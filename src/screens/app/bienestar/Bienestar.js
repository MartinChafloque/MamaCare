import {View, Text, ScrollView, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { styles } from "./BienestarStyles";
import {screen} from "../../../utils/screenName"

export function Bienestar() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <Pressable style={styles.energiaView}>
          <Text  style={styles.txtTemas("MillerBold")}>
                Energía en movimiento
          </Text>
        </Pressable>
        <Pressable style={styles.caminandoView}>
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