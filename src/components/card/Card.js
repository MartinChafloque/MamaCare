import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from "expo-font"
import Toast from "react-native-toast-message";
import {styles} from "./CardStyles"
import { screen } from '../../utils/screenName'
import {VideoPlayer} from "../VideoPlayer"
import { updateDbData } from '../../firebase/updateDbData'
import { deleteStorage } from '../../firebase/deleteStorage'

export  function Card( props ) {

  const { contenido, index, role } = props;
  const navigation = useNavigation();
  const [updateData] = updateDbData("/");

  const [loaded] = useFonts({
    sans: require('../../../assets/fonts/OpenSans-Regular.ttf'),
    sansBold: require('../../../assets/fonts/OpenSans-Bold.ttf')
  });

  if (!loaded) {
      return null;
  }

  const handleDelete = async () => {
    const result = await deleteStorage("/videos/" + contenido.id + ".mp4");
    if(result) {
      updateData({ ["/contenido/" + contenido.id]: null });
      Toast.show({
        type: "info",
        position: "bottom",
        text1: "El video se eliminó correctamente.",
      });
    } else {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error eliminando el video.",
      });
    }
  }

  return (
    <View style={[styles.card, index % 2 === 0 ? styles.cardEven : styles.cardOdd]}>
      {/* Renderiza el título del contenido */}
      <Text style={[styles.txtTemas("sansBold"),styles.cardTitle]}>{contenido.titulo}</Text>
       {/* Renderiza el componente VideoPlayer y pasa la URL del video */}
      <VideoPlayer videoURL={contenido.videoURL}/>
      {/* Renderiza la descripción del contenido */}
      <Text style={[styles.txtTemas("sans"),styles.cardContent]}>{contenido.descripcion}</Text>
      {
        role === "admin" && (
          <View style={styles.viewBtn}>
            <Pressable style={styles.btnModificar} onPress={() => navigation.navigate(screen.inicio.video, { isEdit: true, videoInfo: contenido, ubicacion: contenido.ubicacion })}>
              <Image source={require("../../../assets/img/edit.png")}/>
            </Pressable>
            <Pressable style={styles.btnEliminar} onPress={handleDelete}>
              <Image source={require("../../../assets/img/close.png")}/>
            </Pressable>
          </View>
        )
      }
    </View>
  )
}