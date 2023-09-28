import { View, FlatList } from 'react-native'
import React from 'react'
//importar los estilos
import {styles} from "./InformacionStyles"
// Importa el componente Card
import {Card} from "../../../../components/card/Card"

import {useContentData} from "../../../../firebase/useContentData"

export  function Informacion() {

  const [cards] = useContentData('/contenido');
  if(!cards) return null; 
     // Filtrar los datos por el valor de "contenido"
  const datosFiltrados = cards.filter((item) => item.ubicacion === 'informacion');
  const renderItem = ({ item, index }) => {
    // Renderiza el componente Card y pasa la información y el índice como props
    return <Card contenido={item} index={index} />;
  };

  return (
    <View style={styles.content}>
      {/* Utiliza FlatList para renderizar las tarjetas */}
      <FlatList
        data={datosFiltrados}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}