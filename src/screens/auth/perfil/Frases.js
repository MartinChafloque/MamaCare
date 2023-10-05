import React from 'react'
import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDbData } from '../../../firebase/useDbData';
import { useFonts } from 'expo-font';
import { styles } from './FrasesStyles';
import { screen } from '../../../utils/screenName';
import { CardFrase } from './CardFrase';


export function Frases() {

  const [ data ] = useDbData("/frases");
  const navigation = useNavigation();

  const [loaded] = useFonts({
    Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
    MillerBlack: require('../../../../assets/fonts/MillerBannerBlack.ttf'),

  });

  if (!loaded) {
      return null;
  }



  return (
        <View style={styles.content}>
            {
                data ? (
                    <ScrollView style={styles.lista} showsVerticalScrollIndicator={false} >
                        {Object.entries(data).map(([key, item]) => (
                            <CardFrase key={item.id} frase={item}/>
                        ))}
                    </ScrollView>
                ) : (
                    <View>
                        <Text style={styles.txtEmpty("Miller")}>Aún no hay frases del día</Text>
                    </View>
                )
            }
            <View style={styles.viewBtn}>
                <Pressable style={styles.btnCrear} onPress={() => navigation.navigate(screen.perfil.frase)}>
                <Image source={require("../../../../assets/img/create.png")}/>
                </Pressable>
            </View>
        </View>
  )
}