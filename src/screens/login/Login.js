import React, {useState, useContext} from 'react'
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button, BannerLogo} from './Login__element'
import {useHistory} from "react-router-dom"

// new CONFIGUARATION
import { login } from "../../context/authContext/apiCalls"
import {AuthContext} from "../../context/authContext/AuthContext"
import authLogo from "../../assets/image/auth/authLogo.svg"


const Signin = (validateInfo) => {
    const history = useHistory()

    const [values, handleChange] = useForm({
        email : "",
        password: ""
    });
    const [roleId, setRoleId] = useState(1);
    const [errors, setErrors] = useState("")
    // New CONFIGURATION
    const {isFetching,error, dispatch} = useContext(AuthContext);
    
    console.log(isFetching);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = values.email
        const password = values.password
        login({email, password, roleId}, dispatch);
    }
    
    return (
        <>
            <LoginWrapper>
                <LoginBanner>
                    <BannerLogo src = {authLogo} alt="" />
                    <div style={{display: 'flex', alignItems: "center",flexDirection: 'column',justifyContent: "center", width: "100%", height: "100%"}}>
                        <span>Welcome to</span>
                        <h1>FIXONTIME</h1>
                        <span>Admin Panel</span>
                    </div>
                    {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b55bc102925351.5f41b2583a8db.png" alt="name"/> */}
                </LoginBanner>
                <FormWrapper onSubmit = {handleLogin}>
                    <LoginForm>
                        <h2>Login into your account</h2>
                        <FromBx>
                            <span>Email</span>
                            <Input 
                                type = "text" 
                                placeholder = "Enter Email Address"
                                name = "email"
                                required
                                value = {values.email}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <span>Password</span>
                            <Input 
                                name= "password"
                                type = "password" 
                                required
                                placeholder = "*************" 
                                value = {values.password}
                                onChange = {handleChange}    
                            />
                        </FromBx>
                        <FromBx>
                            <Button type="submit" disabled = {isFetching}>
                                {isFetching ? (
                                    ""
                                ): "Sign In"}
                            </Button>
                        </FromBx>
                        <div style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
                            <label style={{cursor: "pointer", color: "#505050", fontSize: 14, marginTop: 5}} onClick= {() => history.push("/forget")}>Forget your password?</label>
                        </div>
                        {/* <p>{dispatch ? "error" :  "fgfg"}</p> */}
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}

export default Signin;
