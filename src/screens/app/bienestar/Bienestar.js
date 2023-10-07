import React from 'react';
import {View, Text, Image, Pressable} from "react-native";
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
    sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf')
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
        <Pressable style={styles.energiaView} onPress={() => navigation.navigate(screen.inicio.energia, { role: getRol() })}>
          <View><Text style={styles.txtTemas("sansBold")}>Energía en movimiento</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/energ.png")}></Image></View>
        </Pressable>
        <Pressable style={styles.caminandoView} onPress={() => navigation.navigate(screen.inicio.apoyo, { role: getRol() })}>
          <View><Text style={styles.txtTemas("sansBold")}>Caminando juntos{"\n"}apoyo y superación</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/caminando.png")}></Image></View>
        </Pressable>
        <Pressable style={styles.equilibrioView} onPress={() => navigation.navigate(screen.inicio.equilibrio, { role: getRol() })}>
          <View><Text style={styles.txtTemas("sansBold")}>Equilibrio interno</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/balance.png")}></Image></View>
        </Pressable>
        <Pressable style={styles.apoyoView} onPress={() => navigation.navigate(screen.inicio.circulo, { role: getRol() })}>
          <View><Text style={styles.txtTemas("sansBold")}>Círculo de apoyo</Text></View>
          <View style={styles.imgEd}><Image source={require("../../../../assets/img/circ.png")}></Image></View>
        </Pressable>
      </View>
    </React.StrictMode>
  )
}