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
        sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
        sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf')
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
                <TextInput placeholder="Contraseña" style={styles.inputPassword("sansBold")} secureTextEntry={true} onChangeText={(newText) => setPassword(newText)} defaultValue={password}/>
                <Pressable onPress={() => navigation.navigate(screen.auth.forgotpassword)}>
                    <Text style={styles.txtAviso("sans")}>¿Olvidó su contraseña?</Text>
                </Pressable>
                <Pressable style={styles.btnLogin} onPress={() => handleLogin()}>
                    <Text style={styles.txtBtn("sansBold")}>Iniciar Sesión</Text>
                </Pressable>
                <Text style={styles.txtAviso("sans")}>¿No está registrada a Mama Care?</Text>
                <Pressable style={styles.btnRegister} onPress={() => navigation.navigate(screen.auth.register)}>
                    <Text style={styles.txtBtn("sansBold")}>Registrarse</Text>
                </Pressable>
            </View>
            </View>
        </React.StrictMode>
    );
}