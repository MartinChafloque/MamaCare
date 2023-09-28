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
  })
});