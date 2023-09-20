import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/app/home/Home";
import { Educativo } from "../../screens/app/educativo/Educativo";
import { screen } from "../../utils/screenName";
import { Bienestar } from "../../screens/app/bienestar/Bienestar";
import { Faq } from "../../screens/app/faq/Faq"
import { Chat } from "../../screens/app/faq/Chat";

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
    </Stack.Navigator>
  );
}