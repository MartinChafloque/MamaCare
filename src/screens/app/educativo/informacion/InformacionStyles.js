import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    content:{
      backgroundColor: "white",
      minHeight: "100%", 
      minWidth: windowWidth,
      position: "relative"
    },

    viewBtn: {
      right: 10,
      bottom: 10,
      position: 'absolute',
    },

    btnCrear: {
      alignItems: "center",
      justifyContent: "center",
      minWidth: 60,
      minHeight: 60,
      borderRadius: 90,
      backgroundColor: "rgba(252, 252, 252, 0.8)",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
    },
});