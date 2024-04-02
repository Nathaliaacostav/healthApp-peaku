import { doc, getDoc, setDoc } from 'firebase/firestore'
import { firestore } from '../../firebase/firebaseConfig'


const collectionName = 'users'

export const createUserInCollection = async ( uid, newUser ) => {
  try {
    const newUserRef = doc(firestore, collectionName, uid)
    await setDoc(newUserRef, newUser)
    return {
      id: uid,
      ...newUser
    }
  } catch (error) {
    console.warn(error)
    return false
  }
}

export const getUserFromCollection = async ( uid ) => {
  try {
    const userRef = doc(firestore, collectionName, uid)
    const user = await getDoc(userRef)
    if (user.exists()) {
      return {
        id: user.id,
        ...user.data()
      }
    } else {
      return null
    }
  } catch (error) {
    console.warn(error)
    return false
  }
}

export const loginFromFirestore = async ( userData ) => {
  try {
    let userLogged = await getUserFromCollection(userData.uid)
    if (userLogged) {
      return userLogged
    } else {
      const newUser = {
        name: userData.displayName,
        accessToken: userData.accessToken
      }
      await createUserInCollection(userData.uid, newUser)
      return {
        id: userData.uid,
        ...newUser
      }
    }
  } catch (error) {
    console.warn(error)
    return false
  }
}

export const updateUserFromCollection = async ({id, name, photoURL, gender, category, email}) => {
  try {
    const userRef = doc(firestore, collectionName, id);
    setDoc(userRef, {name, gender, email}, { merge: true })
    return true;
  } catch (error) {
    console.error(error);
    return null
  }
}

export const updateNotificationCheck = async ( id, state ) => {
  try {
    const userRef = doc(firestore, collectionName, id);
    await setDoc(userRef, {notificationCheck: state}, { merge: true })
    return true;
    
  } catch (error) {
    console.error(error);
    return null
  }
}