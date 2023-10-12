import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils/screenName";
import { Agenda } from "../../screens/app/agenda/Agenda";
import { AgendaForm } from "../../screens/app/agenda/AgendaForm";

const Stack = createNativeStackNavigator();

export default function AgendaStack() {
  return (
    <Stack.Navigator screenOptions={() => ({
        headerShown: false,
    })}>
        <Stack.Screen
        name={screen.agenda.agenda}
        component={Agenda}
      />
      <Stack.Screen
        name={screen.agenda.crear}
        component={AgendaForm}
      />
    </Stack.Navigator>
  );
}