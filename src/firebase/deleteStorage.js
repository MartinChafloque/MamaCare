import { ref, deleteObject } from "firebase/storage";
import { storage } from "./firebase";

export const deleteStorage = async (path) => {
    const videoRef = ref(storage, path);
    try {
        deleteObject(videoRef)
        return true;
    } catch(err) {
        return false;
    }
};