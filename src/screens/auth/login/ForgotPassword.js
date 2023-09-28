import React, {useState} from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import Toast from "react-native-toast-message";
import { styles } from "./ForgotPasswordStyles";
import {screen} from "../../../utils/screenName"
import { resetPassword, signIn } from "../../../firebase/authentication";
import { sendPasswordResetEmail } from "firebase/auth";


export function ForgotPassword() {

    const navigation = useNavigation();
    const [email, setEmail] = useState("");

    const [loaded] = useFonts({
        Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
        MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
        MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
      });
    
    if (!loaded) {
        return null;
    }

    const handleForgottenPassword = async () => {
        if(!email){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Llene el campo del correo",
              });
            return;
        }
        const response = await resetPassword(email);
        if(response) navigation.navigate(screen.auth.login);
        return;
    }

  return (
    <React.StrictMode>
            <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image style={styles.searchIcon} source={require("../../../../assets/img/logoSmall.png")}/>
                </View>
                <Text style={styles.txtTitle("Miller")}>
                    Mama Care
                </Text>
                <TextInput placeholder="Correo Electrónico" style={styles.inputEmail("MillerBold")} onChangeText={(newText) => setEmail(newText)} defaultValue={email}/>
                <Pressable style={styles.btnLogin} onPress={() => handleForgottenPassword()}>
                    <Text style={styles.txtBtn("Miller")}>Restaurar contraseña</Text>
                </Pressable>
                <Text style={styles.txtAviso("Miller")}>¿No eres un miembro de Mama Care?</Text>
                <Pressable style={styles.btnRegister} onPress={() => navigation.navigate(screen.auth.register)}>
                    <Text style={styles.txtBtn("Miller")}>Registrarse</Text>
                </Pressable>
            </View>
            </View>
        </React.StrictMode>
  )
}