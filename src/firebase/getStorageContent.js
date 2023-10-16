import { storage } from "./firebase";
import { getDownloadURL, ref } from "firebase/storage";

export const getImage = async (path) => {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return url;
  }