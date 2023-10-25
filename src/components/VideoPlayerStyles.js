import { StyleSheet, Dimensions, Platform } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
   videoContenido: {
        width: '100%', 
        aspectRatio: 16 / 9, 
        alignSelf:'center', 
        borderRadius: 10,
        backgroundColor: "black"
   },

   videoAnimacion: {
      minHeight: Platform.OS === "ios" ? windowHeight: "100%",
      minWidth: windowWidth,
      backgroundColor: "white",
   }
});