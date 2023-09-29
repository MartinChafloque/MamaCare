import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font"
import {styles} from "./CardStyles"


import {VideoPlayer} from "../VideoPlayer"

export  function Card( props ) {
  const { contenido, index, role } = props;

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
      {
        role === "admin" && (
          <View style={styles.viewBtn}>
            <Pressable style={styles.btnModificar}>
              <Image source={require("../../../assets/img/edit.png")}/>
            </Pressable>
            <Pressable style={styles.btnEliminar}>
              <Image source={require("../../../assets/img/close.png")}/>
            </Pressable>
          </View>
        )
      }
    </View>
  )
}