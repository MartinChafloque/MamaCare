import React from 'react'
import { View, FlatList, Pressable, Image, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import {screen} from "../../../../utils/screenName"
import { styles } from "./SintomasStyles"
import { Card } from "../../../../components/card/Card"
import { useDbData } from '../../../../firebase/useDbData';

export  function Sintomas({ route }) {

  const navigation = useNavigation();
  const { role } = route.params;
  const [ data ] = useDbData('/contenido'); 

  const [loaded] = useFonts({
    Miller: require('../../../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../../../assets/fonts/MillerBannerBold.ttf'),
    MillerBlack: require('../../../../../assets/fonts/MillerBannerBlack.ttf'),

  });

  if (!loaded) {
      return null;
  }

  if(!data) return null; 
  const datosFiltrados = Object.values(data).filter((val) => val.ubicacion === 'sintomas');

  const RenderItem = ({ item, index }) => {
    return <Card contenido={item} index={index} role={role} />;
  };


  return (
    <View style={styles.content}>
      {
        datosFiltrados.length === 0 ? (
          <View style={styles.viewAviso}>
            <Text style={styles.txtAviso("Miller")}>Aún no hay videos en la sección de 'Síntomas y cuidados físicos'</Text>
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
            <Pressable style={styles.btnCrear} onPress={() => navigation.navigate( screen.inicio.video, { isEdit: false, videoInfo: null, ubicacion: "sintomas" } )}>
              <Image source={require("../../../../../assets/img/create.png")}/>
            </Pressable>
          </View>
        )
      }
    </View>
  );
}