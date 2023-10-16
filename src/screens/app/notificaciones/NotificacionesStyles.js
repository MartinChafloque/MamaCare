import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    content: {
        backgroundColor: "white",
        minHeight: "100%",
        minWidth: windowWidth,
        paddingTop: 40,
        position: "relative"
    },

    viewBackground: background => ({
        backgroundColor: background,
        width: "5%",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    }),

    viewGrande: {
        backgroundColor: "#E8E8E8",
        flexDirection: "row",
        borderRadius: 20,
        minHeight: 100,
        margin: 10,
    },

    viewInfo: {
        width: "95%",
        marginLeft: 10,
        justifyContent: "center",
        padding: 8
    },

    viewTime: {
        width: "95%",
        alignItems: "flex-end"
    },

    viewEmpty: {
        paddingTop: 50,
        minHeight: "100%",
        minWidth: windowWidth,
        alignItems: "center",
    },

    viewBtn: {
        right: 10,
        bottom: 10,
        position: 'absolute',
      },

    btnCrear: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60,
    minHeight: 60,
    borderRadius: 90,
    backgroundColor: "rgba(252, 252, 252, 0.8)",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    },

    txtInfo: font => ({
        fontFamily: font,
        fontSize: 14
    }),

    txtEmpty: font => ({
        fontFamily: font,
        fontSize: 20
    }),

    txtTime: font => ({
        fontFamily: font,
        fontSize: 12
    }),
});