import React, {useState} from "react";
import { View, Text, Pressable, Image, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import Toast from "react-native-toast-message";
import { styles } from "./LoginStyles";
import {screen} from "../../../utils/screenName"
import { signIn } from "../../../firebase/authentication";

export function Login(){
    
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loaded] = useFonts({
        Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
        MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
        MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
      });
    
    if (!loaded) {
        return null;
    }

    const handleLogin = async () => {
        if(!email || !password) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Todos los campos son obligatorios",
              });
            return;
        }
        await signIn(email, password);
    }
    
    return(
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image source={require("../../../../assets/img/logoSmall.png")}/>
                </View>
                <Text style={styles.txtTitle("Miller")}>
                    Mama Care
                </Text>
                <TextInput placeholder="Correo Electrónico" style={styles.inputEmail("MillerBold")} onChangeText={(newText) => setEmail(newText)} defaultValue={email}/>
                <TextInput placeholder="Contraseña" style={styles.inputPassword("MillerBold")} secureTextEntry={true} onChangeText={(newText) => setPassword(newText)} defaultValue={password}/>
                <Text style={styles.txtAviso("Miller")}>¿Olvidó su contraseña?</Text>
                <Pressable style={styles.btnLogin} onPress={() => handleLogin()}>
                    <Text style={styles.txtBtn("Miller")}>Iniciar Sesión</Text>
                </Pressable>
                <Text style={styles.txtAviso("Miller")}>¿No eres un miembro de Mama Care?</Text>
                <Pressable style={styles.btnRegister} onPress={() => navigation.navigate(screen.auth.register)}>
                    <Text style={styles.txtBtn("Miller")}>Registrarse</Text>
                </Pressable>
            </View>
            </View>
        </ScrollView>
    );
}