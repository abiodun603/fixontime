import axios from "axios"
import { loginFailure, loginStart, loginSuccess} from "./AuthActions"

export const login = async (user, dispatch) => {
    dispatch(loginStart);
    try {
        await axios({
                method: "post",
                url: "https://fixontime.herokuapp.com/auth/login",
                data: {
                    email: user.email,
                    password: user.password,
                    roleId: user.roleId
                }
            }).then((response) => {
                console.log(response)
                dispatch(loginSuccess(response.data));
            })
    }catch(err){
        dispatch(loginFailure)
    }
}