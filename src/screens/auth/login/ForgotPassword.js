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
        sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
        sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf')
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
                <Text style={styles.txtTitle("sans")}>
                    Mama Care
                </Text>
                <TextInput placeholder="Correo Electrónico" style={styles.inputEmail("sansBold")} onChangeText={(newText) => setEmail(newText)} defaultValue={email}/>
                <Pressable style={styles.btnLogin} onPress={() => handleForgottenPassword()}>
                    <Text style={styles.txtBtn("sansBold")}>Restaurar contraseña</Text>
                </Pressable>
                <Text style={styles.txtAviso("sans")}>¿No está registrada a Mama Care?</Text>
                <Pressable style={styles.btnRegister} onPress={() => navigation.navigate(screen.auth.register)}>
                    <Text style={styles.txtBtn("sansBold")}>Registrarse</Text>
                </Pressable>
            </View>
            </View>
        </React.StrictMode>
  )
}