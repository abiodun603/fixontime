import React, {useState, useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button, BannerLogo} from '../login/Login__element'
import {useHistory} from "react-router-dom"
import axios from "axios"
import authLogo from "../../assets/image/auth/authLogo.svg"

const Signup = () => {
    const history = useHistory()

    const [values, handleChange] = useForm({
        email: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(values);

        await axios({
            method: "post",
            url: "https://fixontime.herokuapp.com/auth/forgot-password",
            data: {
                email: values.email,
            }
        }).then( res => {
            console.log(res.data)
        })
    }

    
    return (
        <>
            <LoginWrapper>
            <LoginBanner>
                    <BannerLogo src = {authLogo} alt="" />
                    <div style={{display: 'flex', alignItems: "center",flexDirection: 'column',justifyContent: "center", width: "100%", height: "100%"}}>
                        <span>Welcome to</span>
                        <h1>FIXONTIME</h1>
                        <span>Admin Pannel</span>
                    </div>
                    {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b55bc102925351.5f41b2583a8db.png" alt="name"/> */}
                </LoginBanner>
                <FormWrapper onSubmit = {handleLogin}>
                    <LoginForm>
                        <h2>Forget Password</h2>
                        <p>
                            Enter your email address and we'll send you a link to
                            reset your password
                        </p>
                        <FromBx>
                            <span>Email Address</span>
                            
                            <Input 
                                type = "text" 
                                name = "email"
                                required
                                value = {values.email}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <Button type="submit" disabled = {values.isSubmitting} >
                                {values.isSubmitting ? (
                                    "Loading"
                                ): "Reset Password"}
                            </Button>
                        </FromBx>
                        <div style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
                            <label style={{cursor: "pointer", color: "#505050", fontSize: 14, marginTop: 5}} onClick= {() => history.push("/login")}>Sign In</label>
                        </div>
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}
export default Signup;
