import {View, Text, ScrollView, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { styles } from "./EducativoStyles";
import {screen} from "../../../utils/screenName"
import { useCurrentUser } from "../../../firebase/useCurrentUser";
import { useDbData } from "../../../firebase/useDbData";

export function Educativo() {

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
        <Pressable style={styles.infoGeneralView} onPress={() => navigation.navigate(screen.inicio.informacion, { role: getRol() })}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Información general
          </Text>
        </Pressable>
        <Pressable style={styles.recursosView} onPress={() => navigation.navigate(screen.inicio.recuperacion, { role: getRol() })}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Recuperación y recursos
          </Text>
        </Pressable>
        <Pressable style={styles.sintomasView} onPress={() => navigation.navigate(screen.inicio.sintomas, { role: getRol() })}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Síntomas y cuidados físicos
          </Text>
        </Pressable>
        <Pressable style={styles.nutricionView} onPress={() => navigation.navigate(screen.inicio.nutricion, { role: getRol() })}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Nutrición vital
          </Text>
        </Pressable>
        <Pressable style={styles.tratamientosView} onPress={() => navigation.navigate(screen.inicio.tratamientos, { role: getRol() })}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Tratamientos y enfoque
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}