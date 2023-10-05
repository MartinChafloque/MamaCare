import React from 'react';
import {View, Text, Image, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { styles } from "./HomeStyles";
import {screen} from "../../../utils/screenName"
import { useDbData } from '../../../firebase/useDbData';

export function Home() {

  const navigation = useNavigation();
  const [ data ] = useDbData("/frase-del-dia");


  const [loaded] = useFonts({
    Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
    MillerBlack: require('../../../../assets/fonts/MillerBannerBlack.ttf'),

  });


  if (!loaded || !data) {
      return null;
  }

  return (
    <React.StrictMode>
      <View style={styles.content}>
        <Text style={styles.txtTitle("Miller")}>
          Mama Care
        </Text>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Pressable style={styles.eduView} onPress={() => navigation.navigate(screen.inicio.educativo)}>
              <View style={styles.imageEduc}>
                <Image source={require("../../../../assets/img/homeEd.png")}/>
              </View>
              <Text  style={styles.txtModulos("MillerBold")}>
                Módulo{"\n"}Educativo
              </Text>
            </Pressable>
            <Pressable style={styles.faqView} onPress={() => navigation.navigate(screen.inicio.faq)}>
              <View style={styles.images}>
                <Image source={require("../../../../assets/img/homeFAQ.png")}/>
              </View>
              <Text style={styles.txtModulos("MillerBold")}>
                Preguntas{"\n"}Frecuentes
              </Text>
            </Pressable>  
          </View>
          <View style={styles.rightContainer}> 
            <Pressable style={styles.gameView}>
              <View style={styles.imageGame}>
                <Image source={require("../../../../assets/img/homeGame.png")}/>
              </View>
              <Text style={styles.txtModulos("MillerBold")}>
                Explicando con{"\n"}amor
              </Text>
            </Pressable>
            <Pressable style={styles.healthView} onPress={() => navigation.navigate(screen.inicio.bienestar)}>
              <View style={styles.imageHealth}>
                <Image source={require("../../../../assets/img/homeHealth.png")}/>
              </View>
              <Text style={styles.txtModulos("MillerBold")}>
                Módulo de{"\n"}Bienestar
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.fraseContainer}>
          <View> 
            <Text style={styles.txtFraseTitle("Miller")}>
              Frase del día
            </Text> 
          </View>
          <View style={styles.fraseContent}>
            <View style={styles.starLeft}><Image source={require("../../../../assets/img/star.png")}/></View>
            <View style={styles.fraseTextCon}><Text style={styles.txtFrase("MillerLight")}>"{data.texto}" - {data.autor}</Text></View>
            <View style={styles.starRight}><Image source={require("../../../../assets/img/star.png")}/></View>
          </View>
        </View>
      </View>
    </React.StrictMode>
  );
}