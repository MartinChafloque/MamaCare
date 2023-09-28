import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import { db} from "./firebase";

export function useContentData(path) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(
      () =>
        onValue(
          ref(db, path),
          (snapshot) => {
            const newData = snapshot.val();
            if (newData) {
              // Convierte los datos en un array (si no está vacío)
              const dataArray = Object.values(newData);
              setData(dataArray);
            } else {
              setData([]); // Si no hay datos, establece el array como vacío
            }
          },
          (error) => {
            setError(error);
          }
        ),
      [path]
    );
  
    return [data, error];
}
  