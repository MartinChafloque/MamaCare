import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    container:{
        backgroundColor: "white",
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: windowHeight + 62, 
        minWidth: windowWidth
    },
    
    content: {
        backgroundColor: "#FFCCEF",
        justifyContent: "center", 
        alignItems: "center",
        width: 295,
        height: 320, 
        marginRight: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginLeft: 40,
        marginTop: 134,
        marginBottom: 134,
    },
    
    txtTitle: font => ({
        fontFamily: font,
        fontSize: 23,
        marginTop: 11.5,
        marginBottom: 11.5
    }),

    imageContainer:{
        marginTop: -50,
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

    inputEmail: font => ({
        fontFamily: font,
        fontSize: 14,
        backgroundColor: "#FFFFFF",
        width: 248,
        height: 46,
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

    inputPassword: font => ({
        fontFamily: font,
        fontSize: 14,
        backgroundColor: "#FFFFFF",
        width: 248,
        marginTop: 19,
        height: 46,
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

    txtAviso: font => ({
        fontFamily: font,
        fontSize: 12,
        marginTop: 10
    }),

    btnLogin: {
        backgroundColor: "#FC86BF",
        height: 35,
        width: 208,
        marginTop: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    btnRegister:{
        backgroundColor: "#FC86BF",
        height: 35,
        width: 208,
        marginTop: 8,
        marginBottom: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    txtBtn: font => ({
        fontFamily: font,
        fontSize: 16,
        fontWeight: "bold",
    }),
})