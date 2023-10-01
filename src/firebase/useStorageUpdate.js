import { useState, useCallback } from "react";
import { ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { storage } from "./firebase";

export const useStorageUpdate = (path) => {
    const [result, setResult] = useState();
  
    const useStorage = useCallback(
      (file) => {
        const storageRef = ref(storage, path);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setResult(url);
            });
          }
        );
      },
      [path]
    );
  
    return [useStorage, result];
  };