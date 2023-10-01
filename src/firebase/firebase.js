import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB0isQaLajZfUJRQUopi8bo8mZX0Xw8EFk",
    authDomain: "mamacare-b3a03.firebaseapp.com",
    databaseURL: "https://mamacare-b3a03-default-rtdb.firebaseio.com",
    projectId: "mamacare-b3a03",
    storageBucket: "mamacare-b3a03.appspot.com",
    messagingSenderId: "12189577709",
    appId: "1:12189577709:web:7509f9e1332e5752e037e4"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });