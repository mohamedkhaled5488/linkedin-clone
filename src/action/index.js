import { auth ,provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import * as action from './action'

const signInAPI=()=> {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(action.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}
export default signInAPI