import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import Toast from "react-native-toast-message";
import { auth } from "./firebase";

export const signUp = async (email, password) => {
    try{
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(credentials.user).then(() => {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Se ha enviado un link de verificación a tu correo.",
                text2: "Verificalo para poder iniciar sesión."
              });
        });
        logout();
        return credentials.user.uid;
    }catch (e){
        const errorCode = e.code;
        if(errorCode === "auth/invalid-email"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Correo invalido.",
              });
        }

        if(errorCode === "auth/weak-password"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "La contraseña debe tener al menos 6 caracteres.",
              });
        }

        if(errorCode === "auth/email-already-in-use"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "El correo ya está asociado a una cuenta.",
              });
        }

        return null;
    }
}

export const signIn = async (email, password) => {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        if(!credentials.user.emailVerified) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "No has verificado tu correo electrónico.",
              });
            logout();
            return false;
        }
        return true;
    } catch(e) {
        const errorCode = e.code;
        if(errorCode === "auth/invalid-email"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Correo invalido.",
              });
        }

        if(errorCode === "auth/user-not-found" || errorCode === "auth/wrong-password"){
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Correo electrónico o contraseña invalidas.",
              });
        }
        return false;
    }
}

export const logout = async () => {
    try{
        await signOut(auth);
        return true;
    }catch (e){
        return false;
    }
}
