import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils/screenName";
import { Frases } from "../../screens/auth/perfil/Frases";
import { Perfil } from "../../screens/auth/perfil/Perfil";
import { FraseForm } from "../../screens/auth/frases/FraseForm";

const Stack = createNativeStackNavigator();

export default function PerfilStack() {
  return (
    <Stack.Navigator screenOptions={() => ({
        headerShown: false,
    })}>
        <Stack.Screen
        name={screen.perfil.perfil}
        component={Perfil}
      />
      <Stack.Screen
        name={screen.perfil.frases}
        component={Frases}
      />
      <Stack.Screen
        name={screen.perfil.frase}
        component={FraseForm}
      />
    </Stack.Navigator>
  );
}