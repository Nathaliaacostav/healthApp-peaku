import { firestore } from '../../firebase/firebaseConfig'
import { collection, getDocs, addDoc, setDoc } from 'firebase/firestore'
import { addContent, setError, setContent } from './contentSlice'

const contentCollection = collection(firestore, 'content')

export const getContent = () => {
  return async (dispatch) => {
    try {
      const tempArr = []
      const response = await getDocs(contentCollection);
      response.forEach((item) => {
          tempArr.push({ id: item.id, ...item.data() })
      });
      console.log(tempArr);
      dispatch(setContent(tempArr));
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}

export const createContentAsync = (content, userId) => {
  return async (dispatch) => {
    try {
      let tempObject = {
          userName: content.userName,
          doctorImg: content.doctorImg,
          patientImg: content.patientImg,
          sendingDate: content.sendingDate,
          examType: content.examType,
          userId: userId
      }
      const response = await addDoc(contentCollection, tempObject)
      console.log(response)
      tempObject.id = response.id
      dispatch(addContent(tempObject))
    } catch (error) {
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
}
