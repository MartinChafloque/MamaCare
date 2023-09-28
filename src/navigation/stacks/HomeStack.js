import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/app/home/Home";
import { Educativo } from "../../screens/app/educativo/Educativo";
import { screen } from "../../utils/screenName";
import { Bienestar } from "../../screens/app/bienestar/Bienestar";
import { Faq } from "../../screens/app/faq/Faq"
import { Chat } from "../../screens/app/faq/Chat";
import { Informacion } from "../../screens/app/educativo/informacion/Informacion";
import { Tratamientos } from "../../screens/app/educativo/tratamientos/Tratamientos";
import { Apoyo } from "../../screens/app/bienestar/apoyoYsuperacion/Apoyo";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
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
            fontFamily:"MillerBlack",
            fontSize: 23,
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
            fontFamily:"MillerBlack",
            fontSize: 23,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screen.inicio.apoyo}
        component={Apoyo}
        options={{
          headerShown: true,
          headerBackVisible: false, // Oculta la flecha de retroceso
          headerTitle: "Caminando Juntos: Apoyo y Superación",
          headerTitleStyle: {
            fontFamily:"MillerBlack",
            fontSize: 18,
            color: '#3F0117',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
}