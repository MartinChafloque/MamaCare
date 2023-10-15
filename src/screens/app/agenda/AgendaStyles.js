import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    content: {
        backgroundColor: "white",
        minHeight: "100%",
        minWidth: windowWidth,
    },

    btnNew: {
        paddingTop: 55,
        paddingRight: 20,
        alignItems: "flex-end",
        marginBottom: 20
    },

    fechaDisplay: {
        marginTop: 20,
        marginLeft: 10
    },

    viewPadre: {
        flexDirection: "row",
        backgroundColor: "#FFCCEF",
        borderRadius: 20,
        minHeight: 100,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    
    viewHora: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%"
    },

    viewInfo:{
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        padding: 10
    },

    viewEliminar: {
        alignItems: "center",
        width: "10%",
        marginTop: -7,
        marginLeft: 7
    },

    txtFecha: font => ({
        fontFamily: font,
        fontSize: 18,
    }),

    txtAviso: font => ({
        fontFamily: font,
        fontSize: 14,
        textAlign: "center"
    }),

    txtHora: font => ({
        fontFamily: font,
        fontSize: 15,
    }),

    txtInfo: font => ({
        fontFamily: font,
        fontSize: 15,
        textAlign: "justify"
    }),
});