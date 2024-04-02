import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { auth, firestore, storage } from '../../firebase/firebaseConfig';
import { v4 } from 'uuid';

export async function uploadFile(file) {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('No hay un usuario autenticado');
    }


    const userDocRef = doc(firestore, 'users', user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      throw new Error('No se encontró el documento del usuario');
    }
    const userData = userDocSnap.data();

    const fileRef = ref(storage, `uploads/${user.uid}/${v4()}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    const docRef = await addDoc(collection(firestore, 'files'), {
      id: user.uid,
      name: user.displayName || 'Anónimo',
      gender: userData.gender,
      examType: file.name,
      uploadDate: new Date(),
      fileUrl: url,
    });

    console.log("Documento creado con ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al subir archivo y guardar datos: ", error);
    throw error;
  }
}

