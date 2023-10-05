import React from "react";
import {View, Text, Image, Pressable} from "react-native";
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
    <React.StrictMode>
      <View style={styles.content}>
        <Pressable style={styles.infoGeneralView} onPress={() => navigation.navigate(screen.inicio.informacion, { role: getRol() })}>
          <View><Text style={styles.txtTemas("MillerBold")}>Información general</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/book.png")}></Image></View>
        </Pressable>
        <Pressable style={styles.recursosView} onPress={() => navigation.navigate(screen.inicio.recuperacion, { role: getRol() })}>
          <View><Text style={styles.txtTemas("MillerBold")}>Recuperación y recursos</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/rec.png")}></Image></View>
        </Pressable>
        <Pressable style={styles.sintomasView} onPress={() => navigation.navigate(screen.inicio.sintomas, { role: getRol() })}>
          <View><Text style={styles.txtTemas("MillerBold")}>Síntomas y cuidados físicos</Text></View>
          <View style={styles.imgEd2}><Image source={require("../../../../assets/img/sin.png")}></Image></View>
        </Pressable>
        <Pressable style={styles.nutricionView} onPress={() => navigation.navigate(screen.inicio.nutricion, { role: getRol() })}>
          <View><Text style={styles.txtTemas("MillerBold")}>Nutrición vital</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/hand.png")}></Image></View>
        </Pressable>
        <Pressable style={styles.tratamientosView} onPress={() => navigation.navigate(screen.inicio.tratamientos, { role: getRol() })}>
          <View><Text style={styles.txtTemas("MillerBold")}>Tratamientos y enfoque</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/trat.png")}></Image></View>
        </Pressable>
      </View>
    </React.StrictMode>
  );
}