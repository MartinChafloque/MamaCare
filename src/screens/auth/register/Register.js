import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image, TextInput} from 'react-native'
import { useFonts } from 'expo-font';
import Toast from "react-native-toast-message";
import { signUp } from '../../../firebase/authentication';
import { styles } from "./RegisterStyles";
import {screen} from "../../../utils/screenName"
import { useCurrentUser } from '../../../firebase/useCurrentUser';
import { updateDbData } from '../../../firebase/updateDbData';


export function Register() {

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updateData] = updateDbData("/");

  const [loaded] = useFonts({
    Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
  });

  if (!loaded) {
      return null;
  }

  const handleRegister = async () => {
    if(!name || !email || !password || !confirmPassword) {
        Toast.show({
            type: "error",
            position: "bottom",
            text1: "Todos los campos son obligatorios",
          });
        return;
    }

    if(password !== confirmPassword) {
        Toast.show({
            type: "error",
            position: "bottom",
            text1: "Las contraseñas no coinciden",
          });
        return;
    }

    const response = await signUp(email, password);
    if(response) {
      const newUser = {
        id: response,
        name: name,
        email: email,
        faqs: 0,
        role: "paciente"
      }
      updateData({ ["/usuarios/" + response]: newUser });
    }
  }

  return (
    <React.StrictMode>
            <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image source={require("../../../../assets/img/logoSmall.png")}/>
                </View>
                <Text style={styles.txtTitle("Miller")}>
                    Mama Care
                </Text>
                <TextInput placeholder="Nombre Completo" style={styles.inputName("MillerBold")} onChangeText={(newText) => setName(newText)} defaultValue={name}/>
                <TextInput placeholder="Correo Electrónico" style={styles.inputEmail("MillerBold")} onChangeText={(newText) => setEmail(newText)} defaultValue={email}/>
                <TextInput placeholder="Contraseña" style={styles.inputPassword("MillerBold")} secureTextEntry={true} onChangeText={(newText) => setPassword(newText)} defaultValue={password}/>
                <TextInput placeholder="Confirma tu contraseña" style={styles.inputPassword("MillerBold")} secureTextEntry={true} onChangeText={(newText) => setConfirmPassword(newText)} defaultValue={confirmPassword}/>
                <Pressable style={styles.btnRegister} onPress={() => handleRegister()}>
                    <Text style={styles.txtBtn("Miller")}>Registrarse</Text>
                </Pressable>
                <Text style={styles.txtAviso("Miller")}>¿Ya tienes una cuenta?</Text>
                <Pressable style={styles.btnLogin} onPress={() => navigation.navigate(screen.auth.login)}>
                    <Text style={styles.txtBtn("Miller")}>Iniciar Sesión</Text>
                </Pressable>
            </View>
            </View>
        </React.StrictMode>
  );
}