import { setUser, setLoading, setError } from './userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import { setIsAuthenticated} from './userSlice'
import { createUserInCollection, getUserFromCollection } from '../services/userServices';
import Swal from 'sweetalert2';

// Función para registrar un nuevo usuario
export const createAnAccountAsync = ( newUser ) => async ( dispatch ) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password,
    )
    await updateProfile(auth.currentUser, {
      displayName: newUser.name,
    })
    const userLogged = await createUserInCollection(user.uid, {
      name: newUser.name,
      accessToken: user.accessToken,
      email: newUser.email,
      gender: newUser.gender,
      
    })
    await signOut(auth);
    dispatch(
      setUser({
        id: userLogged.uid,
        displayName: userLogged.name,
        email: userLogged.email,
        accessToken: userLogged.accessToken,
      })
    )
    dispatch(setIsAuthenticated(false))
    dispatch(setError(false))
  } catch (error) {
    console.warn(error)
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}

export const loginWithEmailAndPassword = ({ email, password }) => async ( dispatch ) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const userLogged = await getUserFromCollection(user.uid)
    if (userLogged) {
      dispatch(setIsAuthenticated(true))
      dispatch(setUser({ 
        email: userLogged.email, 
        id: user.uid, 
        name: userLogged.name,
        accessToken: userLogged.accessToken, 
      }))
      console.log(userLogged)
      console.log(user)

      Swal.fire({
        title: `Bienvenido ${userLogged?.name}`,
        text: 'Has iniciado sesión exitosamente',
        icon: 'success'
      })
      dispatch(setError(false))
    } else {
      dispatch(setIsAuthenticated(false))
      dispatch(
        setError({ error: true })
      )
    }
  } catch (error) {
    dispatch(setIsAuthenticated(false))
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}

export const logoutAsync = () => async ( dispatch ) => {
  try {
    await signOut(auth)
    dispatch(setIsAuthenticated(false))
    dispatch(setUser(null))
    dispatch(setError(null))
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    )
  }
}
