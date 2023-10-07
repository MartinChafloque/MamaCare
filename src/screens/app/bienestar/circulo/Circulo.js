import React from 'react'
import { View, FlatList, Pressable, Image, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import {screen} from "../../../../utils/screenName"
import { styles } from "./CirculoStyles"
import { Card } from "../../../../components/card/Card"
import { useDbData } from '../../../../firebase/useDbData';

export  function Circulo({ route }) {

  const navigation = useNavigation();
  const { role } = route.params;
  const [ data ] = useDbData('/contenido'); 

  const [loaded] = useFonts({
    sans: require('../../../../../assets/fonts/OpenSans-Regular.ttf')
  });

  if (!loaded) {
      return null;
  }

  if(!data) return null; 
  const datosFiltrados = Object.values(data).filter((val) => val.ubicacion === 'circulo');

  const RenderItem = ({ item, index }) => {
    return <Card contenido={item} index={index} role={role} />;
  };


  return (
    <View style={styles.content}>
      {
        datosFiltrados.length === 0 ? (
          <View style={styles.viewAviso}>
            <Text style={styles.txtAviso("sans")}>Aún no hay videos en la sección de 'Círculo de apoyo'</Text>
          </View>
        ) : (
          <FlatList
            data={datosFiltrados}
            renderItem={RenderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )
      }
      {
        role === "admin" && (
          <View style={styles.viewBtn}>
            <Pressable style={styles.btnCrear} onPress={() => navigation.navigate( screen.inicio.video, { isEdit: false, videoInfo: null, ubicacion: "circulo" } )}>
              <Image source={require("../../../../../assets/img/create.png")}/>
            </Pressable>
          </View>
        )
      }
    </View>
  );
}