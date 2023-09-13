import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    
    content: {
        backgroundColor: "#FFCCEF",
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: windowHeight + 62, 
        minWidth: windowWidth
    },
    
    txtTitle: font => ({
        fontFamily: font,
        fontSize: 45,
        marginBottom: 23
    }),

    btn: {
        backgroundColor: "#FC86BF",
        height: 45,
        width: 255,
        marginTop: 23,
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
        fontSize: 21,
        fontWeight: "bold",
    }),

    logoU: {
        marginTop: 50
    }
});