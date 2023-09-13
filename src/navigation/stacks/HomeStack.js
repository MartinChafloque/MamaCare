import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/app/home/Home";
import { Educativo } from "../../screens/app/educativo/Educativo";
import { screen } from "../../utils/screenName";
import Bienestar from "../../screens/app/bienestar/Bienestar";


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
    </Stack.Navigator>
  );
}