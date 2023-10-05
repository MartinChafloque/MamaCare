import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from "./FraseFormStyles"
import Toast from "react-native-toast-message";
import uuid from 'react-native-uuid';
import { useFonts } from 'expo-font';
import { updateDbData } from '../../../firebase/updateDbData';
import { useNavigation } from '@react-navigation/native';

export function FraseForm() {

  const [texto, setTexto] = useState("");
  const [autor, setAutor] = useState("");
  const [ updateData ] = updateDbData("/");
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

  const handleSubmit = () => {
    if(!texto || !autor){
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Todos los campos son obligatorios.",
      });
      return;
    }
    const id = uuid.v4();
    const newFrase = {
      id: id,
      texto: texto,
      autor: autor
    }
    updateData({ ["/frases/" + id]: newFrase });
    Toast.show({
      type: "info",
      position: "bottom",
      text1: "La frase se añadió a la rotación de frases del día.",
    });
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.viewCreate}>
        <Text style={styles.txtTitle("Miller")}>Agregar frase del día</Text>
        <TextInput multiline={true}
          numberOfLines={2} returnKeyType='none' placeholder="Frase" style={styles.inputFrase("MillerBold")} 
          onChangeText={(newText) => setTexto(newText)} defaultValue={texto}/>
        <TextInput placeholder="Autor" style={styles.inputAutor("MillerBold")} onChangeText={(newText) => setAutor(newText)} defaultValue={autor}/>
        <Pressable style={styles.btnUpload} onPress={() => handleSubmit()}>
          <Text style={styles.txtBtn("Miller")}>Agregar frase</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  )
}