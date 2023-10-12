import React, {useEffect, useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { styles } from './AgendaStyles';
import { useFonts } from 'expo-font';
import { Pressable, View, Image, Text, ScrollView } from 'react-native';
import moment from 'moment-timezone';
import 'moment/locale/es';
import { useNavigation } from "@react-navigation/native";
import { screen } from '../../../utils/screenName';
import { useDbData } from '../../../firebase/useDbData';
import { useCurrentUser } from '../../../firebase/useCurrentUser';

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: "Hoy"
};
LocaleConfig.defaultLocale = "es"

export function Agenda() {

  const user = useCurrentUser();
  const [ recordatorios ] = useDbData("/recordatorios");
  const [ recFiltrados, setRecFiltrados ] = useState([]);
  const [ selectedDate, setSelectedDate ] = useState("");
  const [ fechas, setFechas ] = useState({});
  const navigation = useNavigation();

  const [loaded] = useFonts({
    sans: require('../../../../assets/fonts/OpenSans-Regular.ttf'),
    sansBold: require('../../../../assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    if(recordatorios && user) {
      const myRecs = recordatorios[user.uid];
      if(!myRecs) {
        return;
      }
      const newFechas = new Object();
      Object.entries(myRecs).forEach(([key, val]) => {
        let color = null;
        if(val.categoria === "💜 cita") {
          color = "purple";
        } else if(val.categoria === "🧡 medicamento") {
          color = "orange";
        } else if(val.categoria === "💚 actividad") {
          color = "green";
        } else if(val.categoria === "💙 otro") {
          color = "blue";
        }

        if(newFechas.hasOwnProperty(val.fecha)) {
          const newDot = {key: val.id, color: color};
          newFechas[val.fecha].dots.push(newDot);
        } else {
          newFechas[val.fecha] = {marked: true, dots: []};
          const newDot = {key: val.id, color: color};
          newFechas[val.fecha].dots.push(newDot);
        }
      })
      setFechas(newFechas);
    }
  }, [recordatorios, user]);

  const handleSelectedDate = (day) => {
    handleRecDetails(day);
    setSelectedDate(day);
  }

  const handleRecDetails = (day) => {
    const newFiltros = Object.values(recordatorios[user.uid]).filter(val => val.fecha === day);
    setRecFiltrados(newFiltros);
  }

  if(!recordatorios || !loaded) return null;

  return (
    <ScrollView style={styles.content}>
      <View style={styles.btnNew}><Pressable onPress={() => navigation.navigate(screen.agenda.crear)}><Image source={require("../../../../assets/img/createAgenda.png")}/></Pressable></View>
      <Calendar
        markingType={'multi-dot'}
        onDayPress={(day) => handleSelectedDate(day.dateString)}
        markedDates={{
          ...fechas,
        }} 
        theme={{
          backgroundColor: '#FFFFFF',
          calendarBackground: '#FFFFFF',
          textSectionTitleColor: '#B6C1CD',
          selectedDayBackgroundColor: '#FFCCEF',
          selectedDayTextColor: '#FFFFFF',
          todayTextColor: '#FFCCEF',
          dayTextColor: '#2D4150',
          arrowColor: "#FFCCEF"
        }}
      />
      <View>
        {recFiltrados && <View style={styles.fechaDisplay}><Text style={styles.txtFecha("sansBold")}>{moment(moment(selectedDate, 'YYYY-MM-DD').toDate()).format("dddd, MMMM D YYYY")}</Text></View>}
        {recFiltrados && recFiltrados.sort((a, b) => a.hora > b.hora ? 1 : -1).map((rec, idx) => (
          <View style={styles.viewPadre} key={idx}>
            <View style={styles.viewHora}><Text style={styles.txtHora("sansBold")}>{rec.hora}</Text></View>
            <View style={styles.viewInfo}>
              <View style={styles.viewTitulo}><Text style={styles.txtInfo("sansBold")}>{rec.titulo}</Text></View>
              <View style={styles.viewCategoria}><Text style={styles.txtInfo("sans")}>{rec.categoria}</Text></View>
              <View style={styles.viewNotas}><Text style={styles.txtInfo("sans")}>{rec.notas}</Text></View>
            </View>
          </View>
          ))
        }
        {recFiltrados && recFiltrados.length === 0 && <View style={styles.fechaDisplay}><Text style={styles.txtAviso("sans")}>No tienes recordatorios para este día</Text></View>}
      </View>
    </ScrollView>
  );
}