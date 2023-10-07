import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/app/home/Home";
import { Educativo } from "../../screens/app/educativo/Educativo";
import { screen } from "../../utils/screenName";
import { Bienestar } from "../../screens/app/bienestar/Bienestar";
import { Faq } from "../../screens/app/faq/Faq"
import { Chat } from "../../screens/app/faq/Chat";
import { useFonts } from 'expo-font';
import { Informacion } from "../../screens/app/educativo/informacion/Informacion";
import { Tratamientos } from "../../screens/app/educativo/tratamientos/Tratamientos";
import { Apoyo } from "../../screens/app/bienestar/apoyo/Apoyo";
import { VideoForm } from "../../screens/app/video/VideoForm";
import { Circulo } from "../../screens/app/bienestar/circulo/Circulo";
import { Energia } from "../../screens/app/bienestar/energia/Energia";
import { Equilibrio } from "../../screens/app/bienestar/equilibrio/Equilibrio";
import { Recuperacion } from "../../screens/app/educativo/recuperacion/Recuperacion";
import { Sintomas } from "../../screens/app/educativo/sintomas/Sintomas";
import { Nutricion } from "../../screens/app/educativo/nutricion/Nutricion";

const Stack = createNativeStackNavigator();

export default function HomeStack() {

  const [loaded] = useFonts({
    sansBold: require('../../../assets/fonts/OpenSans-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={() => ({
        headerShown: false,
    })}>
      <Stack.Screen
        name={screen.inicio.home}
        component={Home}
      />
      <Stack.Screen
        name={screen.inicio.educativo}
        component={Educativo}
      />
      <Stack.Screen
        name={screen.inicio.bienestar}
        component={Bienestar}
      />
       <Stack.Screen
        name={screen.inicio.faq}
        component={Faq}
      />
      <Stack.Screen
        name={screen.inicio.chat}
        component={Chat}
      />
      {/* Educativo */}
      <Stack.Screen
        name={screen.inicio.informacion}
        component={Informacion}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Información General",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.recuperacion}
        component={Recuperacion}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Recuperación y Recursos",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.sintomas}
        component={Sintomas}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Síntomas y Cuidados Físicos",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.nutricion}
        component={Nutricion}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Nutrición Vital",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.tratamientos}
        component={Tratamientos}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Tratamientos y Enfoque",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      {/* Bienestar */}
      <Stack.Screen
        name={screen.inicio.apoyo}
        component={Apoyo}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Caminando Juntos: Apoyo y Superación",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.circulo}
        component={Circulo}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Círculo de Apoyo",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.energia}
        component={Energia}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Energía en Movimiento",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.equilibrio}
        component={Equilibrio}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Equilibrio Interno",
          headerTitleStyle: {
            fontFamily:"sansBold",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      {/* Video upload */}
      <Stack.Screen
        name={screen.inicio.video}
        component={VideoForm}
      />
    </Stack.Navigator>
  );
}