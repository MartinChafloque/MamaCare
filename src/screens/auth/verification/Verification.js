import React, { useEffect, useState, useRef } from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getMultiFactorResolver, RecaptchaVerifier, PhoneMultiFactorGenerator } from "firebase/auth"
import { phoneCodeVerification } from '../../../firebase/authentication';
import { screen } from '../../../utils/screenName';
import { auth } from '../../../firebase/firebase';

export function Verification({resolver, verificationId}) {
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState();
  const recaptchaVerifier = useRef(null); 

  useEffect(() => {
    recaptchaVerifier.current = new RecaptchaVerifier('verify-container', {
      size: 'normal',
      callback: (response) => {
        console.log('reCAPTCHA completado:', response);
      },
      'expired-callback': () => {
        console.log('reCAPTCHA expirado');
      },
    }, auth);
  }, []);


  const handleSendPhoneCodeVerification = async() => {
    const resolver = getMultiFactorResolver(auth, e);
    if (resolver.hints[0].factorId === PhoneMultiFactorGenerator.FACTOR_ID) {
        const phoneInfoOptions = {
            multiFactorHint: resolver.hints[0],
            session: resolver.session
        };
        const phoneAuthProvider = new PhoneAuthProvider(auth);
        const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);
        console.log(verificationId);
    }
  }


  const handlePhoneCodeVerification = async () => {
    const resolved = await phoneCodeVerification(resolver, verificationId, verificationCode);
    if(!resolved) {
      navigation.navigate(screen.auth.login);
    }
  }

  return (
    <React.StrictMode>
      <View id="verify-container" />
      <Text>Verification</Text>
    </React.StrictMode>
  )
}