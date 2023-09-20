import { useState } from "react";
import {View, Text, Image, TextInput, ScrollView, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import uuid from 'react-native-uuid';
import Toast from "react-native-toast-message";
import moment from 'moment-timezone';
import 'moment/locale/es';
import { styles } from "./FaqStyles";
import { FaqCard } from "./FaqCard";
import { screen } from "../../../utils/screenName"
import { useDbData } from "../../../firebase/useDbData";
import { updateDbData } from "../../../firebase/updateDbData";
import { useCurrentUser } from "../../../firebase/useCurrentUser";

export function Faq() {
    const navigation = useNavigation();
    const user = useCurrentUser();
    const [input, setInput] = useState("");
    const [updateData] = updateDbData("/");
    const [preguntas] = useDbData("/chats/");
    const [usuarios] = useDbData("/usuarios/");


    const [loaded] = useFonts({
        Miller: require('../../../../assets/fonts/MillerBannerRoman.ttf'),
        MillerLight: require('../../../../assets/fonts/MillerBannerLight.ttf'),
        MillerBold: require('../../../../assets/fonts/MillerBannerBold.ttf'),
        MillerBlack: require('../../../../assets/fonts/MillerBannerBlack.ttf'),
    });

    const createChat = () => {
        if(input.length === 0) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Ingrese una pregunta.",
              });
            return;

        }

        const id = uuid.v4();
        moment.locale();
        const usuario = usuarios[user.uid];
        const newChat = {
            id: id,
            prompt: input,
            date: moment().tz("America/Bogota").format('LLL'),
            chatCount: usuario.faqs + 1,
            messages: [
                {role: "system", content: "The following chat is mainly for users that are going to make questions about health, specifically questions about breast cancer and how to deal with the stages of it.From now on, the user questions and your answers should be completely in spanish."},
            ]
        }
        updateData({ ["/usuarios/" + user.uid]: {...usuario, faqs: usuario.faqs + 1 } });
        updateData({ ["/chats/" + user.uid + "/" + id]: newChat });
        setInput("");
        navigation.navigate(screen.inicio.chat, { initialPrompt: input, userId: user.uid, messageId: id, flag: "main" })
    }
    
    if (!loaded) {
        return null;
    }

    return (
        <ScrollView>
            <View style={styles.content}>
                <Text style={styles.txtTitle("MillerBold")}>
                    Preguntas Frecuentes
                </Text>
                <View style={styles.buscador}>
                    <Text style={styles.txtSubTitle("MillerBold")}>
                        ¿Cuál es tu pregunta?
                    </Text>
                    <View style={styles.searchContainer}>
                        <TextInput placeholder="Realiza tu pregunta..." style={styles.inputSearch("Miller")} onChangeText={(newText) => setInput(newText)} defaultValue={input} />  
                        <Pressable onPress={() => createChat()}>
                            <Image source={require("../../../../assets/img/search.png")}/>
                        </Pressable>
                    </View>
                    <Text style={styles.txtSubTitle("MillerBold")}>Historial de preguntas</Text>
                    <View style={styles.preguntasContainer}>
                        {
                            preguntas && preguntas[user.uid] ? (
                                <>
                                    {Object.entries(preguntas[user.uid]).sort((a, b) => b[1].chatCount - a[1].chatCount).map(([key, item]) => (
                                        <FaqCard key={item.id} chat={item} userId={user.uid} messageId={item.id}/>
                                    ))}
                                </>
                            ) : (
                                <View style={styles.emptyContainer}>
                                    <Text style={styles.txtEmpty("Miller")}>Aún no has realizado preguntas</Text>
                                </View>
                            )
                        }
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}