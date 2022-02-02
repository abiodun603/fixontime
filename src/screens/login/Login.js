import React, {useState, useContext} from 'react'
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button} from './Login__element'
import {useHistory} from "react-router-dom"

// new CONFIGUARATION
import { login } from "../../context/authContext/apiCalls"
import {AuthContext} from "../../context/authContext/AuthContext"
const Signin = (validateInfo) => {
    const history = useHistory()

    const [values, handleChange] = useForm({
        email : "",
        password: ""
    });
    const [roleId, setRoleId] = useState(1);
    const [erros, setErrors] = useState({})


    // New CONFIGURATION
    const {isFetching, dispatch} = useContext(AuthContext);
    console.log(isFetching)
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(values)
        const email = values.email
        const password = values.password
        login({email, password, roleId}, dispatch);
    }
    
    return (
        <>
            <LoginWrapper>
                <LoginBanner>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b55bc102925351.5f41b2583a8db.png" alt="name"/>
                </LoginBanner>
                <FormWrapper onSubmit = {handleLogin}>
                    <LoginForm>
                        <h2>Admin Login</h2>
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
                                type = "text" 
                                required
                                placeholder = "*****" 
                                value = {values.password}
                                onChange = {handleChange}    
                            />
                        </FromBx>

                        <div style={{justifyContent: "space-between", display: "flex", alignItems: "center"}}>
                            <FromBxRem >
                                <label><InputCheck type="checkbox" name =""/> Remember me</label>
                            </FromBxRem>
                            <label style={{cursor: "pointer", color: "blue", fontSize: 18, marginTop: 5}} onClick= {() => history.push("/register")}>Sign up instead?</label>
                        </div>

                        <FromBx>
                            <Button type="submit" disabled = {isFetching}>
                                {!isFetching ? (
                                    "Login"
                                ): "mnmnmn"}
                            </Button>
                        </FromBx>
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}

export default Signin;
