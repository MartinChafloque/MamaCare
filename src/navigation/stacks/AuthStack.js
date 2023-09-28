import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens/auth/login/Login";
import { Landing } from "../../screens/auth/landing/Landing";
import { Register } from "../../screens/auth/register/Register";
import { screen } from "../../utils/screenName";
import { Verification } from "../../screens/auth/verification/Verification";
import { ForgotPassword } from "../../screens/auth/login/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={() => ({
        headerShown: false,
    })}>
      <Stack.Screen
        name={screen.auth.landing}
        component={Landing}
      />
      <Stack.Screen
        name={screen.auth.login}
        component={Login}
      />
      <Stack.Screen
        name={screen.auth.register}
        component={Register}
      />
      <Stack.Screen
        name={screen.auth.verification}
        component={Verification}
      />
      <Stack.Screen
        name={screen.auth.forgotpassword}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
}