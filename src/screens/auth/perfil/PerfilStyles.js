import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    content: {
        backgroundColor: "white",
        alignItems: "center", 
        minHeight: windowHeight + 62, 
        minWidth: windowWidth
    },

    topContainer:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFCCEF",
        width: "100%",
        height: 155,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    dataContainer:{
        justifyContent: "space-between",
        width: "100%",
        height: windowHeight - 350,
        alignItems: "center",
        marginTop: 70
    },

    infoContainer: {
        alignItems: "center"
    },

    imageContainer:{
        marginTop: 150,
        alignItems: "center",
        justifyContent: "center",
        width: 126,
        height: 122,
        borderRadius: 150/2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        backgroundColor: "#651C50"
    },
    
    btn: {
        backgroundColor: "#FC86BF",
        height: 45,
        width: 255,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    txtBtn: font => ({
        fontFamily: font,
        fontSize: 20,
        fontWeight: "bold",
    }),

    txtName: font => ({
        fontFamily: font,
        fontSize: 24
    }),

    txtEmail: font => ({
        fontFamily: font,
        fontSize: 14
    })
});