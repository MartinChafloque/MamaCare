import {ref, push} from "firebase/database";
import {db} from "./firebase";

// Función para agregar datos a la base de datos de Firebase
export function addDataToDb(path, datos) {
  // Obtén una referencia a la ubicación específica en la base de datos
  const databaseRef = ref(db, path);

  // Utiliza la función push para agregar datos a la ubicación y obtener una referencia al nuevo nodo
  const addData = push(databaseRef, datos)
    .then(() => {
      // Maneja el éxito de la operación de escritura
      console.log('Nuevo nodo agregado con éxito.');
    })
    .catch((error) => {
      // Maneja cualquier error que ocurra durante la operación de escritura
      console.error('Error al agregar nuevo nodo:', error);
    });

  // Retorna la promesa resultante de la operación de escritura
  return addData;
}