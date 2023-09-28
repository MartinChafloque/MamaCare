import { View } from 'react-native'
import React from 'react'

import {Video} from 'expo-av'

export  function VideoPlayer(props) {

     
    // Obtiene la URL del video desde las props
    const {videoURL} = props;

  return (
    <View>
      {/* Componente Video */}
      <Video 
        source={{uri: videoURL}}
        style={{ 
          width: '100%', 
          aspectRatio: 16 / 9, 
          alignSelf:'center', 
          borderRadius: 10,
          backgroundColor: "black"
        }}
        useNativeControls // Utiliza los controles nativos
        resizeMode="contain"
        hideControlsTimeoutMillis={5000} // Oculta los controles después de 5 segundos de inactividad
      />
    </View>
  )
}