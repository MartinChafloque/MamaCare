import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { useFonts } from 'expo-font';
import { Agenda } from "../screens/app/Agenda";
import { Notificaciones } from "../screens/app/Notificaciones";
import { screen } from "../utils";
import HomeStack from "./stacks/HomeStack";
import PerfilStack from "./stacks/PerfilStack";

const Tab = createBottomTabNavigator();

export function AppNavigation(){

    const [loaded] = useFonts({
        sans: require('../../assets/fonts/OpenSans-Regular.ttf'),
      });
    
    if (!loaded) {
        return null;
    }

    return(
        <Tab.Navigator screenOptions={({ route }) =>({
            headerShown: false,
            tabBarActiveTintColor: "#6E1B57",
            tabBarInactiveTintColor:"#6E1B57",
            tabBarLabelStyle: {
                fontFamily: "sans",
                fontSize: 12
            },
            tabBarStyle: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderColor: "lightgrey",
                borderWidth: 1.5,            
            },
            tabBarIcon: ({color, size}) => tabBarOptions(route, color, size)
        })}>
            <Tab.Screen name={screen.inicio.tab} component={HomeStack} options={{title: "Inicio"}} />
            <Tab.Screen name={screen.agenda.tab} component={Agenda} options={{title: "Agenda"}} />
            <Tab.Screen name={screen.notificaciones.tab} component={Notificaciones} options={{title: "Notificaciones"}}/>
            <Tab.Screen name={screen.perfil.tab} component={PerfilStack} options={{title: "Perfil"}} />
        </Tab.Navigator>
    );
}

function tabBarOptions(route, color, size){
    let imgPath;

    if(route.name == screen.inicio.tab){
        imgPath = require("../../assets/img/icon_home_.png");
    }
    if(route.name == screen.agenda.tab){
        imgPath = require("../../assets/img/icon_calendar_event_.png");
    }
    if(route.name == screen.notificaciones.tab){
        imgPath = require("../../assets/img/icon_bell_.png");
    }
    if(route.name == screen.perfil.tab){
        imgPath = require("../../assets/img/icon_user_circle_.png");
    }
    return(
        <Image
        source={imgPath}
        />
    );
}