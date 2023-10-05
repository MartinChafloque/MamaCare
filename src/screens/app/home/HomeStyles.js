import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    content: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-evenly",
        minHeight: "100%",
        minWidth: windowWidth,
    },

    txtTitle: font => ({
        marginTop: 30,
        fontFamily: font,
        fontSize: 43,
        color: "#3F0117",
        marginBottom: 25
    }),

    txtModulos: font => ({
        fontFamily: font,
        fontSize: 16
    }),

    txtFraseTitle: font => ({
        fontFamily: font,
        fontSize: 20,
        color: "#3F0117",
    }),

    txtFrase: font => ({
        fontFamily: font,
        fontSize: 17,
        textAlign: "center"
    }),

    fraseTextCon:{
        width: 270,
        padding: 10
    },

    container: {
        width: 335,
        height: 287,
        flexDirection: "row"
    },

    leftContainer:{
        marginRight: 11
    },

    fraseContainer: {
        marginTop: 20,
    },

    fraseContent:{
        marginTop:10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "rgba(244, 186, 202, 0.5)",
        opacity: 50,
        width: 336,
        minHeight:133,
        borderRadius:15,
        flexDirection: "row",
        justifyContent:"space-around"
    },

    starLeft:{
        justifyContent: "flex-end",
        marginBottom: 20,
    },

    starRight:{
        marginTop: 20
    },

    eduView:{
        justifyContent: "flex-end",
        paddingLeft:4,
        paddingBottom:3,
        width:154,
        height:162,
        marginBottom: 8,
        borderRadius:10,
        backgroundColor: "#FC86BF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    faqView:{
        justifyContent: "flex-end",
        paddingLeft:4,
        paddingBottom:3,
        width:154,
        height:117,
        borderRadius:10,
        backgroundColor: "#B0E9DE",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    gameView:{
        justifyContent: "flex-end",
        paddingLeft:4,
        paddingBottom:3,
        width:170,
        height:116,
        marginBottom: 8,
        borderRadius:10,
        backgroundColor: "#F4BACA",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    healthView:{
        justifyContent: "flex-end",
        paddingLeft:4,
        paddingBottom:3,
        width:170,
        height:166,
        borderRadius:10,
        backgroundColor: "#C9F0BA",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    images:{
        alignItems: "center",
        marginBottom: 10
    },

    imageGame: {
        height: 70,
        alignItems: "center",
    },

    imageEduc: {
        alignItems: "center",
        marginBottom: 15,
        marginLeft: 15
    },

    imageHealth:{
        alignItems: "center",
        marginBottom: 10,
        marginLeft: 5
    }
});