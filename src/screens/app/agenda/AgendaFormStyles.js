import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    content: {
        backgroundColor: "white",
        minHeight: "100%",
        alignItems: "center",
        justifyContent: "center",
        minWidth: windowWidth,
    },

    formView: {
        backgroundColor: "#FFCCEF",
        width: 338,
        minHeight: 580,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        alignItems: "center"
    },

    viewSecciones: {
        marginTop: 10,
        flexDirection: "row",
        minWidth: "100%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    viewFechaGrande: {
        marginLeft: 5,
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row",
        minWidth: "100%",
        justifyContent: "space-evenly"
    },

    viewCategoria: {
        marginLeft: 20,
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    },

    dropDown: {
        borderRadius: 20,
        borderColor: "white",
        marginLeft: 7,
        width: 230,
        minHeight: 24
    },

    dropDownAlarma: {
        borderRadius: 20,
        borderColor: "white",
        marginLeft: 20,
        width: 230,
        minHeight: 24
    },

    dropFecha: {
        marginTop: 8,
        borderRadius: 20,
        borderColor: "white",
        width: 230,
        minHeight: 24
    },

    btnSubmit:{
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 24,
        borderRadius: 20,
    },

    txtSubmit: font => ({
        fontFamily: font,
        fontSize: 15,
    }), 

    txtTitle: font => ({
        marginTop: 10,
        fontFamily: font,
        fontSize: 16,
    }),

    txtBtn: font => ({
        fontFamily: font,
        fontSize: 14,
    }),

    txtDrop: font => ({
        fontFamily: font,
        fontSize: 14,
    }),

    txtSecciones: font => ({
        fontFamily: font,
        fontSize: 14,
    }),

    input: font => ({
        fontFamily: font,
        fontSize: 14,
        backgroundColor: "white",
        width: 230,
        minHeight: 24,
        paddingLeft: 4,
        borderRadius: 20,
    }),

    inputNot: font => ({
        fontFamily: font,
        fontSize: 14,
        textAlignVertical: "center",
        backgroundColor: "#FFFFFF",
        width: 230,
        minHeight: 70,
        paddingLeft: 4,
        borderRadius: 20,
    }),

});