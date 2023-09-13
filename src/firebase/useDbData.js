import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "./firebase";


export function useDbData(path) {

    const [data, setData] = useState();
    const [error, setError] = useState(null);
    useEffect(
      () =>
        onValue(
          ref(db, path),
          (snapshot) => {
            setData(snapshot.val());
          },
          (error) => {
            setError(error);
          }
        ),
      [path]
    );
  
    return [data, error];
}