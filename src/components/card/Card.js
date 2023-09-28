import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font"
import {styles} from "./CardStyles"


import {VideoPlayer} from "../VideoPlayer"

export  function Card(props) {
  const {contenido, index} = props;

  const [loaded] = useFonts({
    Miller: require('../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../assets/fonts/MillerBannerBold.ttf'),
    MillerBlack: require('../../../assets/fonts/MillerBannerBlack.ttf'),

  });

  if (!loaded) {
      return null;
  }

  return (
    <View style={[styles.card, index % 2 === 0 ? styles.cardEven : styles.cardOdd]}>
      {/* Renderiza el título del contenido */}
      <Text style={[styles.txtTemas("MillerBlack"),styles.cardTitle]}>{contenido.titulo}</Text>
       {/* Renderiza el componente VideoPlayer y pasa la URL del video */}
      <VideoPlayer videoURL={contenido.videoURL}/>
      {/* Renderiza la descripción del contenido */}
      <Text style={[styles.txtTemas("Miller"),styles.cardContent]}>{contenido.descripcion}</Text>
    </View>
  )
}