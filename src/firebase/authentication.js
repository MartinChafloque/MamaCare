import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, sendEmailVerification, PhoneMultiFactorGenerator } from "firebase/auth"
import Toast from "react-native-toast-message";
import { PhoneAuthProvider } from "firebase/auth";
import { auth } from "./firebase";


export const signUp = async (email, password) => {
    try{
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(credentials.user).then(() => {
            Toast.show({
                type: "info",
                position: "bottom",
                text1: "Se ha enviado un link de verificación a tu correo.",
                text2: "Verificalo para poder iniciar sesión.",
                visibilityTime: 5000,
              });
        });
        logout();
        return credentials.user.uid;
    }catch (e){
        if(e.code === "auth/invalid-email"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Correo invalido.",
              });
        }

        if(e.code === "auth/weak-password"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "La contraseña debe tener al menos 6 caracteres.",
              });
        }

        if(e.code === "auth/email-already-in-use"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "El correo ya está asociado a una cuenta.",
              });
        }

        return null;
    }
}

export const signIn = async (email, password) => {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        if(!credentials.user.emailVerified) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "No has verificado tu correo electrónico.",
              });
            logout();
            return false;
        }
        return true;
    } catch(e) {
        if(e.code === "auth/invalid-email"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Correo invalido.",
              });
            return false;
        }

        if(e.code === "auth/user-not-found" || e.code === "auth/wrong-password"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Correo electrónico o contraseña invalidas.",
              });
            return false;
        }

        if(e.code === "auth/multi-factor-auth-required") {
            return false;
        }

        return false;
    }
}

/*export const phoneCodeVerification = async (resolver, verificationId, verificationCode) => {
    const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
    const userCredentials = await resolver.resolveSignIn(multiFactorAssertion);
    if(!userCredentials.user.emailVerified) {
        Toast.show({
            type: "error",
            position: "bottom",
            text1: "No has verificado tu correo electrónico.",
          });
        logout();
        return false;
    }
    return true;
}*/

export const logout = async () => {
    try{
        await signOut(auth);
        return true;
    }catch (e){
        return false;
    }
}
