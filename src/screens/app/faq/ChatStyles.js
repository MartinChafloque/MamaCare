import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: 60,
    },

    messagesList: {
        flex: 2,
        padding: 10,
    },

    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
    },

    searchBar: {
        marginRight: 5,
        fontSize: 16,
        height: 36,
        width: 320,
        backgroundColor: "rgba(201, 240, 186, 0.25)",
        paddingLeft: 10,
        borderRadius: 20,
    },

    ownMessageContainer: {
        alignItems:'flex-end',
        marginBottom: 5,
        marginLeft: 10,
    },

    botMessageContainer: {
        alignItems: 'flex-start',
        marginBottom: 5,
        marginRight: 10,
    },

    ownMessage: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFCCEF",
        marginBottom: 7
    },

    botMessage: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
        borderRadius:10,
        backgroundColor: "#C9F0BA",
        marginBottom: 7
    },

    message: font => ({
        fontFamily: font,
        fontSize: 14,
    }),

    loadingContainer: {
        height: 25, 
        margin: 0, 
        padding: 0, 
        justifyContent: "center", 
        alignItems: "center",
    }
});