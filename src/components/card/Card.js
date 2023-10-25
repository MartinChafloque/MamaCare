import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from "expo-font"
import Toast from "react-native-toast-message";
import {styles} from "./CardStyles"
import { screen } from '../../utils/screenName'
import {VideoPlayer} from "../VideoPlayer"
import { updateDbData } from '../../firebase/updateDbData'
import { deleteStorage } from '../../firebase/deleteStorage'
import { getImage } from '../../firebase/getStorageContent';

export  function Card( props ) {

  const { contenido, index, role } = props;
  const [imageURL, setImageURL] = useState("");
  const navigation = useNavigation();
  const [updateData] = updateDbData("/");

  useEffect(() => {
    const getImageURL = async() => {
      if(contenido.tipo === "photo" && !imageURL) {
        const url = await getImage("photos/" + contenido.id + ".jpg");
        setImageURL(url);
      }
    }

    getImageURL();
  }, [imageURL])

  const [loaded] = useFonts({
    sans: require('../../../assets/fonts/OpenSans-Regular.ttf'),
    sansBold: require('../../../assets/fonts/OpenSans-Bold.ttf')
  });

  if (!loaded) {
      return null;
  }

  const handleDelete = async () => {
    let result = null;
    if(contenido.tipo === "video") {
      result = await deleteStorage("/videos/" + contenido.id + ".mp4");
    } else if(contenido.tipo === "photo") {
      result = await deleteStorage("/photos/" + contenido.id + ".jpg");
    }

    if(result || contenido.tipo === "texto") {
      updateData({ ["/contenido/" + contenido.id]: null });
      Toast.show({
        type: "info",
        position: "bottom",
        text1: "El contenido se eliminó correctamente.",
      });
    } else {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error eliminando el contenido.",
      });
    }
  }

  return (
    <View style={[styles.card, index % 2 === 0 ? styles.cardEven : styles.cardOdd]}>
      <Text style={[styles.txtTemas("sansBold"),styles.cardTitle]}>{contenido.titulo}</Text>
      { contenido.tipo === "video" && <VideoPlayer videoURL={contenido.contenidoURL} path="contenido" mode="contain"/>}
      { contenido.tipo === "photo" && imageURL && (
        <View style={styles.imageView}>
          <Image style={styles.image} source={{ uri: imageURL }}/>
        </View>
      )}
      <Text style={[styles.txtTemas("sans"),styles.cardContent]}>{contenido.descripcion}</Text>
      {
        role === "admin" && (
          <View style={styles.viewBtn}>
            <Pressable style={styles.btnModificar} onPress={() => navigation.navigate(screen.inicio.video, { isEdit: true, contenidoInfo: contenido, ubicacion: contenido.ubicacion })}>
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