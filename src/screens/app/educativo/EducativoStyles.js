import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    content: {
        paddingTop: 20,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-evenly", 
        minHeight: windowHeight + 62, 
        minWidth: windowWidth,
        paddingBottom: 120
    },

    infoGeneralView:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
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

    imgEd: {
        marginRight: 40,
    },

    imgEd2: {
        marginRight: 30,
    },

    recursosView:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 8,
        width:356,
        marginBottom: 10,
        height:100,
        borderRadius:10,
        backgroundColor: "#FC86BF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    sintomasView:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
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

    nutricionView:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
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

    tratamientosView:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
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