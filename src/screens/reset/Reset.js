import React, {useState, useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button, BannerLogo} from '../login/Login__element'
import {useHistory} from "react-router-dom"
import axios from "axios"
import authLogo from "../../assets/image/auth/authLogo.svg"

const Reset = () => {
    const history = useHistory()

    const [values, handleChange] = useForm({
        name: "",
        email: "",
        password: "",
    });
    const [roleId, setRoleId] = useState(1);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(values);

        await axios({
            method: "post",
            url: "https://candid-nest.herokuapp.com/auth/register",
            data: {
                name: values.name,
                email: values.email,
                password: values.password,
                roleId: 1
            }
        }).then( res => {
            console.log(res.data)
            history.push("/login")
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
                            <span>New Password</span>
                            
                            <Input
                                type= "text" 
                                // placeholder = "Enter Username"
                                name = "name"
                                required
                                value = {values.name}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <span>Confirm New Password</span>
                            
                            <Input
                                type= "text" 
                                // placeholder = "Enter Username"
                                name = "name"
                                required
                                value = {values.name}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <Button type="submit" onClick= {() => history.push("/login")} disabled = {values.isSubmitting}>
                                {values.isSubmitting ? (
                                    "Loading"
                                ): "Reset Password"}
                            </Button>
                        </FromBx>
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}
export default Reset;
