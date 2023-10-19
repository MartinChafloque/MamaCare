import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    scroll: {
        backgroundColor: "white"
    },

    viewCreate: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        padding: 20, 
        minWidth: windowWidth,
    },

    txtTitle: font => ({
        marginTop: 30,
        fontFamily: font,
        fontSize: 30,
        color: "#3F0117",
        marginBottom: 20
    }),

    inputTitle: font => ({
        fontFamily: font,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: "#FFFFFF",
        width: "100%",
        minHeight: 46,
        paddingLeft: 4,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }),

    inputDesc: font => ({
        fontFamily: font,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: "#FFFFFF",
        width: "100%",
        minHeight: 70,
        paddingLeft: 4,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }),

    btnSelect: {
        backgroundColor: "#FC86BF",
        minHeight: 35,
        minWidth: "100%",
        marginTop: 8,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    btnUpload: {
        backgroundColor: "#FC86BF",
        minHeight: 35,
        minWidth: "100%",
        marginTop: 8,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    txtBtn: font => ({
        fontFamily: font,
        fontSize: 16,
        fontWeight: "bold",
    }),
});