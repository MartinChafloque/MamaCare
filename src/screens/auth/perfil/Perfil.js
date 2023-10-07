import React from 'react'
import { View, Text, Pressable, Image, FlatList } from 'react-native'
import { logout } from '../../../firebase/authentication';
import { useCurrentUser } from '../../../firebase/useCurrentUser';
import { useDbData } from '../../../firebase/useDbData';
import { styles } from './PerfilStyles';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { screen } from "../../../utils/screenName"

export function Perfil() {

  const navigation = useNavigation();
  const user = useCurrentUser();
  const [data] = useDbData("/usuarios");
  
  const [loaded] = useFonts({
    sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
    sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf'),
    sansLight: require('../../../../assets/fonts/OpenSans-Light.ttf')
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

  const getRol = () => {
    let rol = null;
    Object.entries(data).forEach(([key, val]) => {
      if(val.id === user.uid) {
        rol = val.role;
      }
    })
    return rol;
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
            <Text style={styles.txtName("sansBold")}>{getName()}</Text>
            <Text style={styles.txtEmail("sansLight")}>{getEmail()}</Text>
          </View>
          {
            getRol() === "admin" && (
              <Text onPress={() => navigation.navigate(screen.perfil.frases)} style={styles.txtFrases("sans")}>Agregar o eliminar frases</Text>
            )
          }
          <View>
            <Pressable style={styles.btn} onPress={() => logout()}>
              <Text style={styles.txtBtn("sansBold")}>Cerrar Sesión</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </React.StrictMode>
  );
}