import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/firebaseConfig'; // Asegúrate de importar tu instancia de Firestore

// Función para cargar un archivo a Firebase Storage y guardar la URL de descarga en Firestore
export async function uploadFile(file, userInfo) { // Pasa userInfo como un parámetro adicional
  try {
    const storage = getStorage();
    const storageRef = ref(storage, `uploads/${file.name}`);
    
    // Sube el archivo a Firebase Storage
    await uploadBytes(storageRef, file);

    // Obtiene la URL de descarga del archivo
    const downloadURL = await getDownloadURL(storageRef);

    // Obtener la fecha y hora actual
    const currentDateTime = new Date();
    const uploadDateTime = currentDateTime.toISOString(); // Convertir a formato de cadena ISO

    // Guarda la URL de descarga en Firestore junto con otra información relevante, incluida la información del usuario y la fecha de subida
    const fileData = {
      name: file.name,
      type: file.type,
      url: downloadURL,
      // Información del usuario
      userInfo: {
        uid: userInfo.uid,
        name: userInfo.name,
        email: userInfo.email,
        gender: userInfo.gender,
        // Otros campos de información del usuario
      },
      // Fecha de subida del archivo
      uploadDateTime: uploadDateTime,
      // Otros campos relevantes...
    };

    // Agrega los datos del archivo a Firestore
    const docRef = await addDoc(collection(firestore, "files"), fileData);
    console.log("Archivo subido con éxito:", docRef.id);
  } catch (error) {
    console.error("Error al subir el archivo:", error);
  }
}
