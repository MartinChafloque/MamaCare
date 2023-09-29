import {View, Text, ScrollView, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { styles } from "./BienestarStyles";
import {screen} from "../../../utils/screenName"
import { useCurrentUser } from "../../../firebase/useCurrentUser";
import { useDbData } from "../../../firebase/useDbData";

export function Bienestar() {

  const navigation = useNavigation();
  const user = useCurrentUser();
  const [data] = useDbData("/usuarios");

  const [loaded] = useFonts({
    Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
    MillerBlack: require('../../../../assets/fonts/MillerBannerBlack.ttf'),

  });

  if (!loaded) {
      return null;
  }

  const getRol = () => {
    let rol = null;
    Object.entries(data).forEach(([key, val]) => {
      if(val.id === user.uid) {
        rol = val.role;
      }
    })
    return rol;
  }

  if(!user || !data) return null;

  return (
    <ScrollView>
      <View style={styles.content}>
        <Pressable style={styles.energiaView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Energía en movimiento
          </Text>
        </Pressable>
        <Pressable style={styles.caminandoView} onPress={() => navigation.navigate(screen.inicio.apoyo, { role: getRol() })}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Caminando juntos{"\n"}apoyo y superación
          </Text>
        </Pressable>
        <Pressable style={styles.equilibrioView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Equilibrio interno
          </Text>
        </Pressable>
        <Pressable style={styles.apoyoView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Círculo de apoyo
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}