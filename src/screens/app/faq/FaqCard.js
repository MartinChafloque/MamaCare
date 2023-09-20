import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./FaqStyles";
import { screen } from "../../../utils/screenName"

export function FaqCard({ chat, userId, messageId }) {

  const navigation = useNavigation();

  const goToChat = () => {
    navigation.navigate(screen.inicio.chat, { initialPrompt: chat.prompt, userId, messageId, flag: "card" })
  }

  return (
    <Pressable style={styles.viewQ} onPress={() => goToChat()}>
        <View style={styles.topQ}>
            <View style={styles.img}><Image source={require("../../../../assets/img/logoFaq.png")}></Image></View>
            <View style={styles.pregunta}><Text style={styles.txtPreg("Miller")}>{chat.prompt}</Text></View>
        </View>
        <View style={styles.bottomQ}>
            <Text style={styles.txtDate("MillerBold")}>{chat.date}</Text>
        </View>
    </Pressable>
  )
}