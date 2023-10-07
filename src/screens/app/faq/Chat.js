import React, {useEffect, useState} from 'react';
import { ScrollView, TextInput, TouchableHighlight, View , Text, Pressable, Image } from 'react-native';
import axios from "axios";
import { useFonts } from 'expo-font';
import { API_KEY } from '@env'
import { TypingAnimation } from 'react-native-typing-animation';
import { useDbData } from "../../../firebase/useDbData";
import { updateDbData } from "../../../firebase/updateDbData";
import { styles } from './ChatStyles';

export function Chat({ route }) {
    const [initialRender, setInitialRender] = useState(true);
    const [input, setInput] = useState();
    const [loading, setLoading] = useState(false);
    const { initialPrompt, userId, messageId, flag } = route.params;
    const [ updateData ] = updateDbData("/");
    const [ chat ] = useDbData("/chats/" + userId + "/" + messageId);

    
    const [loaded] = useFonts({
        sans: require('../../../../assets/fonts/OpenSans-Regular.ttf')
    });

    useEffect(() => {
        if(flag === "main" && chat && initialRender) {
            setInitialRender(false);
            sendMessage(initialPrompt);
        }
    }, [chat])


    const sendMessage = async (content) => {
        setLoading(true);
        const userMessage = { role: "user", content: content };
        const response = await axios.post("https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo",
            messages: [...chat.messages, userMessage],
            temperature: 0
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
            }
        })
        const botMessage = { role: "assistant", content: response.data.choices[0].message.content };
        const newMessages = [...chat.messages, userMessage, botMessage];
        updateData({ ["/chats/" + userId + "/" + messageId]: { ...chat, messages: newMessages } });
        setInput("");
        setLoading(false);
    }

    const LoadingAnimation = () => {
        return <TypingAnimation
            dotColor="black"
            dotMargin={10}
            dotAmplitude={5}
            dotSpeed={0.15}
            dotRadius={3}
            dotY={0}
        />
    }

    const MessageItem = ({ role, content }) => (
        <View style={role === "user" ? styles.ownMessageContainer : styles.botMessageContainer}>
            <TouchableHighlight style={role === "user" ? styles.ownMessage : styles.botMessage}>
                <View>
                    <Text style={styles.message("sans")}>{content}</Text>
                </View>
            </TouchableHighlight>
        </View>
      );

    if(!chat) return null;
    
    if (!loaded) {
        return null;
    }

    return (
        <ScrollView
            automaticallyAdjustContentInsets={false}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps="never"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <ScrollView style={styles.messagesList}>
                {chat.messages.slice(1).map((msg, idx) => (
                    <MessageItem key={idx} role={msg.role} content={msg.content}/>
                ))}
            </ScrollView>
            {
                loading && 
                <View style={styles.loadingContainer}>
                    <LoadingAnimation />
                </View>
            }
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Realiza tu pregunta..."
                    onChangeText={(newText) => setInput(newText)}
                    defaultValue={input}
                />
                <Pressable onPress={() => sendMessage(input)}>
                    <Image source={require("../../../../assets/img/flechaDer.png")}/>
                </Pressable>
            </View>
        </ScrollView>
    )
}