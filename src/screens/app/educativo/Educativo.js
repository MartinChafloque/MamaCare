import {View, Text, ScrollView, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { styles } from "./EducativoStyles";
import {screen} from "../../../utils/screenName"

export function Educativo() {

  const navigation = useNavigation();

  const [loaded] = useFonts({
    Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
    MillerBlack: require('../../../../assets/fonts/MillerBannerBlack.ttf'),

  });

  if (!loaded) {
      return null;
  }

  return (
    <ScrollView>
      <View style={styles.content}>
        <Pressable style={styles.infoGeneralView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Información general
          </Text>
        </Pressable>
        <Pressable style={styles.recursosView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Recuperación y recursos
          </Text>
        </Pressable>
        <Pressable style={styles.sintomasView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Síntomas y cuidados físicos
          </Text>
        </Pressable>
        <Pressable style={styles.nutricionView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Nutrición vital
          </Text>
        </Pressable>
        <Pressable style={styles.tratamientosView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Tratamientos y enfoque
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}