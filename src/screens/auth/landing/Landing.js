import {View, Text, ScrollView, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { styles } from "./LandingStyles";
import {screen} from "../../../utils/screenName"

export function Landing(){

    const navigation = useNavigation();

    const [loaded] = useFonts({
        Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
      });
    
    if (!loaded) {
        return null;
    }

    return(
        <ScrollView centerContent={true}>
            <View style={styles.content}>
                <Text style={styles.txtTitle("Miller")}>
                    MAMA CARE
                </Text>
                <Image source={require("../../../../assets/img/mainLogo.png")}/>
                <Pressable style={styles.btn} onPress={() => navigation.navigate(screen.auth.login)}>
                    <Text style={styles.txtBtn("Miller")}>Iniciar Sesión</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={() => navigation.navigate(screen.auth.register)}>
                    <Text style={styles.txtBtn("Miller")}>Registrarse</Text>
                </Pressable>
                <View>
                    <Image source={require("../../../../assets/img/logo_universidad.png")} style={styles.logoU}/>
                </View>
            </View>
        </ScrollView>
    );
}