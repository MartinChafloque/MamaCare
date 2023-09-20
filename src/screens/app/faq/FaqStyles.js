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

    buscador: {
        minWidth: "100%",
        marginTop: 30
    },

    searchContainer: {
        marginTop: 10,
        marginBottom: 25,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    inputSearch: font => ({
        marginRight: 10,
        fontFamily: font,
        fontSize: 16,
        backgroundColor: "rgba(201, 240, 186, 0.25)",
        width: 320,
        height: 36,
        paddingLeft: 10,
        borderRadius: 20,
       
    }),

    preguntasContainer: {
        alignItems: "center",
        marginBottom: 15
    },

    viewQ: {
        marginTop: 10,
        backgroundColor: "#FFCCEF",
        width: 353,
        minHeight: 60,
        borderRadius: 10,
    },

    topQ: {
        flexDirection: "row",
    },

    bottomQ: {
        alignItems: "flex-end",
        paddingRight: 15
    },
    
    img: {
        justifyContent: "center",
        marginTop: 12,
        marginLeft: 5,
    },
    
    pregunta: {
        marginTop: 8,
        marginLeft: 6,
        paddingRight: 50
    },

    txtPreg: font => ({
        fontFamily: font,
        fontSize: 12,
    }),

    txtDate: font => ({
        fontFamily: font,
        fontSize: 10,
    }),

    txtSubTitle: font => ({
        marginLeft: 8,
        fontFamily: font,
        fontSize: 15,
    }),

    txtTitle: font => ({
        marginTop: 30,
        fontFamily: font,
        fontSize: 32,
        color: "#651C50"
    }),

    emptyContainer: {
        marginTop: 20,
        minWidth: "95%",
        alignItems: "center"
    },

    txtEmpty: font => ({
        fontFamily: font,
        fontSize: 13,
    })
});