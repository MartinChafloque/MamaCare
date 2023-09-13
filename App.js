import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {AppNavigation} from "./src/navigation/AppNavigation";
import AuthStack from "./src/navigation/stacks/AuthStack";
import { useCurrentUser } from "./src/firebase/useCurrentUser";

export default function App() {

  const user = useCurrentUser();

  const AppContainer = () => {
    if(user && user.emailVerified) {
      return <>
        <AppNavigation />
      </>
    } else {
      return <AuthStack />
    }
  }

  return (
    <>
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
    <Toast />
    </>
  );
}
