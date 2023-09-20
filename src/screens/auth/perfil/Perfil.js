import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { logout } from '../../../firebase/authentication';
import { useCurrentUser } from '../../../firebase/useCurrentUser';
import { useDbData } from '../../../firebase/useDbData';
import { styles } from './PerfilStyles';
import { useFonts } from 'expo-font';

export function Perfil() {
  const user = useCurrentUser();
  const [data] = useDbData("/usuarios");

  const [loaded] = useFonts({
    Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
    MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
    MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
    MillerBlack: require('../../../../assets/fonts/MillerBannerBlack.ttf'),

  });

  if (!loaded) {
      return null;
  }

  if(!user || !data) return null;

  const getName = () => {
    return Object.entries(data).map(([key, val]) => {
      if(val.id === user.uid) {
        return val.name;
      }
    })
  }

  const getEmail = () => {
    return Object.entries(data).map(([key, val]) => {
      if(val.id === user.uid) {
        return val.email;
      }
    })
  }

  return (
    <React.StrictMode>
      <View style={styles.content}>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image source={require("../../../../assets/img/logoSmall.png")}/>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.txtName("MillerBold")}>{getName()}</Text>
            <Text style={styles.txtEmail("MillerLight")}>{getEmail()}</Text>
          </View>
          <View>
            <Pressable style={styles.btn} onPress={() => logout()}>
              <Text style={styles.txtBtn("Miller")}>Cerrar Sesión</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </React.StrictMode>
  );
}