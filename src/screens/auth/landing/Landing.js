import React from "react";
import {View, Text, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { styles } from "./LandingStyles";
import {screen} from "../../../utils/screenName"

export function Landing(){

    const navigation = useNavigation();

    const [loaded] = useFonts({
        sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
        sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf'),
      });
    
    if (!loaded) {
        return null;
    }

    return(
        <React.StrictMode>
            <View style={styles.content}>
                <Text style={styles.txtTitle("sans")}>
                    MAMA CARE
                </Text>
                <Image source={require("../../../../assets/img/mainLogo.png")}/>
                <Pressable style={styles.btn} onPress={() => navigation.navigate(screen.auth.login)}>
                    <Text style={styles.txtBtn("sansBold")}>Iniciar Sesión</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={() => navigation.navigate(screen.auth.register)}>
                    <Text style={styles.txtBtn("sansBold")}>Registrarse</Text>
                </Pressable>
                <View>
                    <Image source={require("../../../../assets/img/logo_universidad.png")} style={styles.logoU}/>
                </View>
            </View>
        </React.StrictMode>
    );
}