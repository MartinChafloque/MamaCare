import {StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      margin: 16,
    },
    cardTitle: {
      fontSize: 18,
      marginBottom: 8,
    },
    cardContent: {
      marginTop: 8,
      fontSize: 17,
      textAlign: 'justify'
    },
    cardEven: {
      backgroundColor: '#C9F0BA', // Estilo para tarjetas pares (fondo azul)
    },
    cardOdd: {
      backgroundColor: '#F4BACA', // Estilo para tarjetas impares (fondo verde)
      borderRadius: 10, // Puedes personalizar esto según tus necesidades
    },
    txtTemas: font => ({
      fontFamily: font,
    }),

    viewBtn: {
      paddingTop: 15,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },

    btnModificar: {
      alignItems: "center",
      justifyContent: "center",
      marginRight: 50,
      minWidth: 33,
      minHeight: 31,
      borderRadius: 50,
    },

    btnEliminar: {
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 50,
      minWidth: 33,
      minHeight: 31,
      borderRadius: 50,
    },

    imageView: {
      minWidth: "100%",
      minHeight: 200,
      justifyContent: "center",
      alignItems: "center"
    },

    image: {
      minWidth: 250,
      minHeight: 200
    }
});