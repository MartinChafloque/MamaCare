import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import Toast from "react-native-toast-message";
import { styles } from "./NotificacionesStyles"
import { useFonts } from 'expo-font';
import { useDbData } from '../../../firebase/useDbData'
import { useCurrentUser } from '../../../firebase/useCurrentUser'
import { updateDbData } from '../../../firebase/updateDbData';

export function Notificaciones() {

  const [loaded] = useFonts({
    sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
    sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf'),
  });

  const user = useCurrentUser();
  const [updateData] = updateDbData("/");
  const [ notificaciones ] = useDbData("/notificaciones");

  const handleDeleteNotifications = () => {
    updateData({ ["/notificaciones/" + user.uid]: null });
    Toast.show({
      type: "error",
      position: "bottom",
      text1: "Se han eliminado las notificaciones correctamente.",
    });
  }

  if(!loaded || !user) return null;
  
  return (
    <View style={styles.content}>
      <ScrollView>
        { (notificaciones && notificaciones[user.uid] && Object.entries(notificaciones[user.uid]).length > 0) ? Object.entries(notificaciones[user.uid]).map(([key, val]) => (
          <View style={styles.viewGrande} key={key}>
            <View style={styles.viewBackground(val.background)}></View>
            <View style={styles.viewInfo}>
              <View>
                <Text style={styles.txtInfo("sansBold")}>{val.title}</Text>
                {val.tipo && <Text style={styles.txtInfo("sans")}>{val.tipo}</Text> }
                {val.horario && <Text style={styles.txtInfo("sans")}>{val.horario}</Text> }
                <Text style={styles.txtInfo("sans")}>{val.detalles}</Text>
              </View>
              <View style={styles.viewTime}>
                <Text style={styles.txtTime("sansBold")}>{val.timestamp}</Text>
              </View>
            </View>
          </View>
        )) : (
          <View style={styles.viewEmpty}>
            <Text style={styles.txtEmpty("sansBold")}>No tiene notificaciones</Text>
          </View>
        )
        }
      </ScrollView>
      <View style={styles.viewBtn}>
        <Pressable style={styles.btnCrear} onPress={() => handleDeleteNotifications()}>
          <Image source={require("../../../../assets/img/eliminar.png")}/>
        </Pressable>
      </View>
    </View>
  )
}