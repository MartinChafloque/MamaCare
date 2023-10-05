import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    content:{
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100%", 
      minWidth: windowWidth,
      position: "relative",
    },

    lista: {
        marginTop: 20,
    },

    frases: {
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#FFCCEF",
        borderRadius: 10,
        maxWidth: 360,
        padding: 25,
    },

    textFrase : {
        width: 310,
    },

    text: font => ({
        fontFamily: font,
        fontSize: 15
    }),

    delete: {
        marginLeft: 8
    },

    viewBtn: {
      left: 10,
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

    txtEmpty: font => ({
        fontFamily: font,
        fontSize: 20,
    })
});