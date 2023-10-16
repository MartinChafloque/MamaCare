import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";
import { useFonts } from 'expo-font';
import Toast from "react-native-toast-message";
import DropDownPicker from 'react-native-dropdown-picker';
import uuid from 'react-native-uuid';
import { styles } from './AgendaFormStyles'
import { yearsPicker, monthsPicker, hoursPicker, minutesPicker, getTodaysDate } from '../../../utils/datetime';
import { updateDbData } from '../../../firebase/updateDbData';
import { useCurrentUser } from '../../../firebase/useCurrentUser';
import { schedule } from '../../../utils/scheduleNotification';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

export function AgendaForm() {

    const [titulo, setTitulo] = useState("");
    const [notas, setNotas] = useState("");

    const [openCat, setOpenCat] = useState(false);
    const [openAnio, setOpenAnio] = useState(false);
    const [openMes, setOpenMes] = useState(false);
    const [openDia, setOpenDia] = useState(false);
    const [openHora, setOpenHora] = useState(false);
    const [openMin, setOpenMin] = useState(false);
    const [categorias, setCategorias] = useState([
        {label: '​🧡​ ​medicamento', value: '🧡 medicamento'},
        {label: '​​💜​ cita', value: '💜 cita'},
        {label: '💚 ​actividad', value: '💚 actividad'},
        {label: '​​​​💙​ otro', value: '💙 otro' }
    ]);

    const [dias, setDias] = useState([]);
    const [meses, setMeses] = useState(monthsPicker);
    const [anios, setAnios] = useState(yearsPicker);
    const [horas, setHoras] = useState(hoursPicker);
    const [minutos, setMinutos] = useState(minutesPicker);

    const [valCategoria, setValCategoria] = useState(null);
    const [valDias, setValDias] = useState(null);
    const [valMeses, setValMeses] = useState(null);
    const [valAnios, setValAnios] = useState(null);
    const [valHoras, setValHoras] = useState(null);
    const [valMinutos, setValMinutos] = useState(null);

    const user = useCurrentUser();
    const [ updateData ] = updateDbData("/");
    const navigation = useNavigation();

    const [expoPushToken, setExpoPushToken] = useState('');

    useEffect(() => {
        getDaysItems(new Date().getMonth() + 1);
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    }, []);

    async function schedulePushNotification(id) {

        const trigger = new Date();
        trigger.setFullYear(valAnios, valMeses - 1, valDias);
        trigger.setHours(valHoras - 1);
        trigger.setMinutes(valMinutos);
        trigger.setSeconds(0);
        
        const identifier = await Notifications.scheduleNotificationAsync({
            content: {
            title: "MamaCare",
            body: titulo,
            data: {
                id: id,
                titulo: titulo,
                notas: notas,
                categoria: valCategoria,
                fecha: valAnios + "-" + valMeses + "-" + valDias,
                hora: valHoras + ":" + valMinutos,
            },
            sound: "notification.wav"
            },
            trigger: trigger,
        });

        return identifier;
    }
      
    async function registerForPushNotificationsAsync() {
        let token;
        
        if (Platform.OS === 'android') {
            await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
            });
        }
        
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
            }
            if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
            }
            token = (await Notifications.getExpoPushTokenAsync({ projectId: Constants.expoConfig.extra.eas.projectId })).data;
            console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }
        
        return token;
    }

    const [loaded] = useFonts({
        sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
        sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf'),
    });

    const getDaysItems = (month) => {
        const getDays = (year, month) => { return new Date(year, month, 0). getDate(); };
        const daysOfMonth = getDays(new Date().getFullYear(), month);
        const daysPicker = Array.apply(null, Array(daysOfMonth)).map(function (x, i) { return {label: i + 1, value: (i + 1) < 10 ? "0" + (i + 1) : "" + (i + 1)} });
        setDias(daysPicker);
    } 

    const handleSubmit = async () => {

        if(!validateForm()) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Todos los campos son obligatorios.",
              });
            return;
        }

        const myDate = valAnios + "-" + valMeses + "-" + valDias + " " + valHoras + ":" + valMinutos;
        const today = getTodaysDate();
        if(myDate < today) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Digite una fecha y hora válida.",
              });
            return;
        }
        const id = uuid.v4();
        const identifier = await schedulePushNotification(id);
        const newRecordatorio = {
            id: id,
            titulo: titulo,
            notas: notas,
            categoria: valCategoria,
            fecha: valAnios + "-" + valMeses + "-" + valDias,
            hora: valHoras + ":" + valMinutos,
            notificationId: identifier
        }
        
        const response = await fetch("https://mamacare-scheduler-03c02ff7bd73.herokuapp.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: newRecordatorio, userId: user.uid })
        })

        //const response = await schedule(newRecordatorio, user.uid);
        if(response.status === 201) {
            updateData({ ["/recordatorios/" + user.uid + "/" + id]: newRecordatorio });
            Toast.show({
                type: "info",
                position: "bottom",
                text1: "El recordatorio se creo con éxito.",
              });
            navigation.goBack();
        } else {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Error creando el recordatorio. Intente nuevamente.",
            });
            navigation.goBack();
        }

    }

    const validateForm = () => {
        return titulo && valCategoria && valAnios && valMeses && valDias && valHoras && valMinutos;
    }
    
    if (!loaded) {
         return null;
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.content}>
        <View style={styles.formView}>
            <Text style={styles.txtTitle("sansBold")}>Agregar Recordatorio</Text>
            <Image source={require("../../../../assets/img/logoAgenda.png")}/>
            <View style={styles.viewSecciones}>
                <Text style={styles.txtSecciones("sansBold")}>Título:</Text>
                <TextInput placeholder="Título" style={styles.input("sansBold")} onChangeText={(newText) => setTitulo(newText)}/>
            </View>
            <View style={styles.viewCategoria}>
                <Text style={styles.txtSecciones("sansBold")}>Categoría:</Text>
                <DropDownPicker
                    style={styles.dropDown}
                    dropDownContainerStyle={{
                        marginLeft: 7,
                        width: 230,
                        borderColor: "white"
                    }}
                    placeholder='Selecciona una categoría'
                    open={openCat}
                    value={valCategoria}
                    dropDownDirection='TOP'
                    items={categorias}
                    textStyle={styles.txtDrop("sans")}
                    setOpen={setOpenCat}
                    setValue={setValCategoria}
                    setItems={setCategorias}
                />
            </View>
            <View style={styles.viewFechaGrande}>
                <Text style={styles.txtSecciones("sansBold")}>Fecha:</Text>
                <View>
                    <DropDownPicker
                        style={styles.dropFecha}
                        dropDownContainerStyle={{
                            width: 230,
                            borderColor: "white"
                        }}
                        placeholder='Año'
                        open={openAnio}
                        value={valAnios}
                        dropDownDirection='TOP'
                        items={anios}
                        textStyle={styles.txtDrop("sans")}
                        setOpen={setOpenAnio}
                        setValue={setValAnios}
                        setItems={setAnios}
                    />
                    <DropDownPicker
                        style={styles.dropFecha}
                        dropDownContainerStyle={{
                            width: 230,
                            borderColor: "white"
                        }}
                        placeholder='Mes'
                        onChangeValue={(value) => getDaysItems(parseInt(value))}
                        open={openMes}
                        value={valMeses}
                        dropDownDirection='TOP'
                        items={meses}
                        textStyle={styles.txtDrop("sans")}
                        setOpen={setOpenMes}
                        setValue={setValMeses}
                        setItems={setMeses}
                    />
                    <DropDownPicker
                        style={styles.dropFecha}
                        dropDownContainerStyle={{
                            width: 230,
                            borderColor: "white"
                        }}
                        placeholder='Día'
                        open={openDia}
                        value={valDias}
                        dropDownDirection='TOP'
                        items={dias}
                        textStyle={styles.txtDrop("sans")}
                        setOpen={setOpenDia}
                        setValue={setValDias}
                        setItems={setDias}
                    />
                </View>
            </View>
            <View style={styles.viewFechaGrande}>
                <Text style={styles.txtSecciones("sansBold")}>Hora:</Text>
                <View>
                    <DropDownPicker
                        style={styles.dropFecha}
                        dropDownContainerStyle={{
                            width: 230,
                            borderColor: "white"
                        }}
                        placeholder='Hora'
                        open={openHora}
                        value={valHoras}
                        dropDownDirection='TOP'
                        items={horas}
                        textStyle={styles.txtDrop("sans")}
                        setOpen={setOpenHora}
                        setValue={setValHoras}
                        setItems={setHoras}
                    />
                    <DropDownPicker
                        style={styles.dropFecha}
                        dropDownContainerStyle={{
                            width: 230,
                            borderColor: "white"
                        }}
                        placeholder='Minuto'
                        onChangeValue={(value) => getDaysItems(parseInt(value))}
                        open={openMin}
                        value={valMinutos}
                        dropDownDirection='TOP'
                        items={minutos}
                        textStyle={styles.txtDrop("sans")}
                        setOpen={setOpenMin}
                        setValue={setValMinutos}
                        setItems={setMinutos}
                    />
                </View>
            </View>
            <View style={styles.viewSecciones}>
                <Text style={styles.txtSecciones("sansBold")}>Notas:</Text>
                <TextInput 
                    multiline={true}
                    numberOfLines={2} 
                    returnKeyType='none' 
                    placeholder="Notas Adicionales (Opcional)" 
                    style={styles.inputNot("sansBold")}
                    onChangeText={(newText) => setNotas(newText)}/>
            </View>
            <Pressable style={styles.btnSubmit} onPress={handleSubmit}><Text style={styles.txtSubmit("sansBold")}>Agregar</Text></Pressable>
        </View>
        </View>
    </TouchableWithoutFeedback>

  )
}