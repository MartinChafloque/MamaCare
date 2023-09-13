import { useCallback } from "react";
import { ref, update } from "firebase/database";
import { db } from "./firebase"; 

export function updateDbData(path) {
  const updateData = useCallback(
    (value) => {
      update(ref(db, path), value)
    },
    [path]
  );
  return [updateData];
}