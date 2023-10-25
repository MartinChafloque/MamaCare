import { View } from 'react-native'
import React from 'react'
import {Video} from 'expo-av'
import { styles } from './VideoPlayerStyles';

export  function VideoPlayer(props) {

     
    // Obtiene la URL del video desde las props
    const {videoURL, path, mode} = props;

  return (
    <>
      <Video 
        source={{uri: videoURL}}
        style={path === "contenido" ? styles.videoContenido : styles.videoAnimacion}
        useNativeControls // Utiliza los controles nativos
        resizeMode={mode}
        hideControlsTimeoutMillis={5000} // Oculta los controles después de 5 segundos de inactividad
      />
    </>
  )
}