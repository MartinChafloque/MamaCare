import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    content: {
        backgroundColor: "white",
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: windowHeight + 62, 
        minWidth: windowWidth
    },

    energiaView:{
        justifyContent:"center",
        paddingLeft: 8,
        width:356,
        marginBottom: 10,
        height:100,
        borderRadius:10,
        backgroundColor: "#C9F0BA",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    caminandoView:{
        justifyContent:"center",
        paddingLeft: 8,
        width:356,
        marginBottom: 10,
        height:100,
        borderRadius:10,
        backgroundColor: "#F4BACA",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    equilibrioView:{
        justifyContent:"center",
        paddingLeft: 8,
        width:356,
        marginBottom: 10,
        height:100,
        borderRadius:10,
        backgroundColor: "#B0E9DE",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    apoyoView:{
        justifyContent:"center",
        paddingLeft: 8,
        width:356,
        marginBottom: 10,
        height:100,
        borderRadius:10,
        backgroundColor: "#EF7595",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    txtTemas: font => ({
        fontFamily: font,
        fontSize: 17
    })
});