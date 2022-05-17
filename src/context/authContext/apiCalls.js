import axios from "axios"
import { FaTemperatureLow } from "react-icons/fa";
import { loginFailure, loginStart, loginSuccess} from "./AuthActions"

export const login = async (user, dispatch, setErrMsg,errRef, setSuccess) => {
  dispatch(loginStart);
  try {
    await axios({
      method: "post",
      url: "https://v1.api.seenergysolutions.org/api/login",
      data: {
          email: user.user,
          password: user.pwd
        },
      // withCredentials: true,
      headers: {
        'Content-Type' : "application/json"
      }
    }).then((response) => {
        console.log(response)
        dispatch(loginSuccess(response.data));
        console.log(errRef);
        setSuccess(false)
    })
    }catch(err){
      if(!err?.response){
          setErrMsg("No Server Response");
          setSuccess(false)

      } else if( err.response?.status == 400) {
        setErrMsg('Missing Username or Pasword');
        setSuccess(false)

      }else if(err.response?.status === 401){
        setErrMsg("Unauthorized");
        setSuccess(false)

      }
      else if(err.response?.status === 422){
        setErrMsg("User with this email does not exist");
        setSuccess(false)

      }else{
        setErrMsg('Login Failed')
        setSuccess(false)

      }
      // errRef.current.focus();
    }
}