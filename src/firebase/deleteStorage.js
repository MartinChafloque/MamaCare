import { ref, deleteObject } from "firebase/storage";
import { storage } from "./firebase";

export const deleteStorage = async (path) => {
    const contenidoRef = ref(storage, path);
    try {
        deleteObject(contenidoRef)
        return true;
    } catch(err) {
        return false;
    }
};