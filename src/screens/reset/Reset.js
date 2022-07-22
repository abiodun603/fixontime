import React, {useState, useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button, BannerLogo, InputPassword} from '../login/Login__element'
import {useHistory} from "react-router-dom"
import axios from "axios"
import authLogo from "../../assets/image/auth/authLogo.svg"
import { Puff } from 'react-loading-icons';
import swal from "sweetalert";

const ResetLink = () => {
    const history = useHistory()
    const [loading, setloading] = useState(false);


    const [values, handleChange] = useForm({
        password: "",
        confirm_password: ""
    });

    // const foo = params.get('query');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(values);
        
        setloading(true);
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const emailReset = params.get("email")
        const resetToken = params.get("token")

        console.log(values.password)
        await axios({
            method: "post",
            url: "https://v1.api.seenergysolutions.org/api/forgot_password",
            data: {
                email: emailReset,
                token: resetToken,
                password: values.password,
                passwordConfirmation: values.confirm_password
            }
        }).then(response => {
          setloading(false);
          console.log(response.data)
          swal({
            title: "Password Rest Successful",
            icon: "success",
            confirmButtonColor: '#030762',
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              history.push("/admin")
            } else {
              swal("Your imaginary file is safe!");
            }
          });})
          .catch(err => {
              console.log(err)
          })
    }
    return (
        <>
            <LoginWrapper>
            <LoginBanner>
            <BannerLogo src = {authLogo} alt=""  style = {{zIndex: 999 , width: 200}}/>
                    <div style={{display: 'flex', alignItems: "center",flexDirection: 'column',justifyContent: "center", width: "100%", height: "100%"}}>
                        <span>Welcome to</span>
                        <h1>FIXONTIME</h1>
                        <span>Admin Panel</span>
                    </div>
                    {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b55bc102925351.5f41b2583a8db.png" alt="name"/> */}
                </LoginBanner>
                <FormWrapper onSubmit = {handleLogin}>
                    <LoginForm>
                        <h2>Reset Password</h2>
                        <p>
                          Enter you email address and we’ll send you a link to reset your password
                        </p>
                        <FromBx>
                            <span>New Password</span>
                            
                            <InputPassword
                                type= "password" 
                                // placeholder = "Enter Username"
                                name = "password"
                                required
                                value = {values.password}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <span>Confirm New Password</span>
                            
                            <InputPassword
                                type= "password" 
                                // placeholder = "Enter Username"
                                name = "confirm_password"
                                required
                                value = {values.confirm_password}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <Button type="submit" disabled = {values.isSubmitting}>
                                {!loading  ? "Submit" : <Puff/> }
                            </Button>
                        </FromBx>
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}
export default ResetLink;
