import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { styles } from "./VideoFormStyles"
import * as ImagePicker from 'expo-image-picker';
import Toast from "react-native-toast-message";
import moment from 'moment-timezone';
import 'moment/locale/es';
import { TypingAnimation } from 'react-native-typing-animation';
import uuid from 'react-native-uuid';
import { useFonts } from 'expo-font';
import { updateDbData } from '../../../firebase/updateDbData';
import { useDbData } from '../../../firebase/useDbData';
import { useStorageUpdate } from '../../../firebase/useStorageUpdate';
import { useNavigation } from '@react-navigation/native';

export function VideoForm({ route }) {

  const { isEdit, videoInfo, ubicacion } = route.params;
  const navigation = useNavigation();

  const [title, setTitle] = useState(videoInfo?.titulo || "");
  const [description, setDescription] = useState(videoInfo?.descripcion || "");
  const [videoFile, setVideoFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [videoId, setVideoId] = useState(uuid.v4());
  const [loading, setLoading] = useState(false);

  const [updateData] = updateDbData("/");
  const [usuarios] = useDbData("/usuarios");
  const [useStorage, result] = useStorageUpdate("videos/" + videoId + ".mp4");

  const [loaded] = useFonts({
      sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
      sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf')
    });
  
  useEffect(() => {
    if (result) {
      handleDatabase();
    }
  }, [result]);
  
  if (!loaded || !usuarios) {
      return null;
  }

  const handleDatabase = async () => {
    let newVideo = null;
    if(!isEdit) {
      newVideo = {
        id: videoId,
        videoURL: result,
        titulo: title,
        descripcion: description,
        ubicacion: ubicacion
      }

      const newNotification = {
        id: videoId,
        notificationId: videoId,
        title: `Notificación de Modúlos: Hay nuevo contenido!`,
        tipo: "",
        detalles: `Se ha añadido nuevo contenido en la sección ${ubicacion}. Podrás encontrarlo bajo el título: ${title}`,
        horario: "",
        background: "#FCD2E4",
        timestamp: moment().tz("America/Bogota").format('LLL'),
    }

      updateData({ ["/contenido/" + videoId]: newVideo });
      Object.keys(usuarios).forEach((userId) => {
        updateData({ ["/notificaciones/" + userId + "/" + videoId]: newNotification });
      });

    } else {
      newVideo = {
        id: videoInfo.id,
        videoURL: videoInfo.videoURL,
        titulo: title,
        descripcion: description,
        ubicacion: videoInfo.ubicacion
      }
      updateData({ ["/contenido/" + videoInfo.id]: newVideo });
    }
    setLoading(false);
    navigation.goBack();
  }

  const handleSubmit = () => {
    if(isEdit) {
      handleDatabase();
    } else {
      uploadFile();
    }
  }

  const uploadFile = async () => {
    if(!videoFile || !title || !description) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Todos los campos son obligatorios.",
      });
      return;
    } 

    try {
      setLoading(true);
      const blob = await uriToBlob(videoFile.replace("file:///", "file:/"));
      useStorage(blob);
    }catch(e) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Hubo un error subiendo el archivo.",
      });
    }
  }
    
  const selectFile = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true
      });
      if(!result.canceled) {
        setFileSelected(true);
        setVideoFile(result.assets[0].uri)
      }
    } catch (err) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Hubo un error seleccionando el archivo.",
      });
      return false;
    }
  }

  const uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest()
       xhr.onload = function () {
         resolve(xhr.response)
       }
       xhr.onerror = function () {
         reject(new Error('uriToBlob failed'))
       }
       xhr.responseType = 'blob'
       xhr.open('GET', uri, true)
       xhr.send(null)
    })
  }

  const LoadingAnimation = () => {
    return <TypingAnimation
        dotColor="black"
        dotMargin={10}
        dotAmplitude={5}
        dotSpeed={0.15}
        dotRadius={3}
        dotY={0}
    />
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.viewCreate}>
        <Text style={styles.txtTitle("sans")}>{isEdit ? "Modificar Contenido" : "Agregar Contenido"}</Text>
        <TextInput placeholder="Título" style={styles.inputTitle("sansBold")} onChangeText={(newText) => setTitle(newText)} defaultValue={title}/>
        <TextInput multiline={true}
          numberOfLines={2} returnKeyType='none' placeholder="Descripción" style={styles.inputDesc("sansBold")} onChangeText={(newText) => setDescription(newText)} defaultValue={description}/>
        {
           !isEdit && <Pressable style={styles.btnSelect} onPress={selectFile} disabled={loading}><Text style={styles.txtBtn("sansBold")}>Seleccionar video</Text></Pressable>
        }
        {fileSelected && <Text>Se ha seleccionado un video</Text>}
        <Pressable style={styles.btnUpload} onPress={handleSubmit} disabled={loading}>
           {
            loading ? (<View><LoadingAnimation /></View>) : (<Text style={styles.txtBtn("sansBold")}>{isEdit ? "Modificar video" : "Subir video"}</Text>)
          }
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  )
}