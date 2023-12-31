import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import Toast from "react-native-toast-message";
import { updateDbData } from '../../../firebase/updateDbData';
import { styles } from './FrasesStyles'

export function CardFrase({frase}) {

  const [ updateData ] = updateDbData("/");


  const [loaded] = useFonts({
    sans: require('../../../../assets/fonts/OpenSans-Regular.ttf')
  });

  if (!loaded) {
      return null;
  }

  const handleDelete = () => {
      updateData({ ["/frases/" + frase.id]: null });
      Toast.show({
        type: "info",
        position: "bottom",
        text1: "La frase se eliminó correctamente.",
      });
  }

  return (
    <View style={styles.frases}>
      <View style={styles.textFrase}><Text style={styles.text("sans")}>{frase.texto} - {frase.autor}</Text></View>
      <Pressable style={styles.delete} onPress={handleDelete}><Image source={require("../../../../assets/img/close.png")}/></Pressable>
    </View>
  )
}