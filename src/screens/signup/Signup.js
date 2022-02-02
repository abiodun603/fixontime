import React, {useState, useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button} from '../login/Login__element'
import {useHistory} from "react-router-dom"
import axios from "axios"
const Signup = () => {
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
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b55bc102925351.5f41b2583a8db.png" alt="name"/>
                </LoginBanner>
                <FormWrapper onSubmit = {handleLogin}>
                    <LoginForm>
                        <h2>Sign Up Here</h2>
                        <FromBx>
                            <span>Username</span>
                            <Input 
                                type = "text" 
                                placeholder = "Enter Username"
                                name = "name"
                                required
                                value = {values.name}
                                onChange = {handleChange}
                            />
                        </FromBx>
                        <FromBx>
                            <span>Email</span>
                            <Input 
                                type = "text" 
                                placeholder = "Enter Email Address"
                                name = "email"
                                value = {values.email}
                                onChange = {handleChange}
                                required
                            />
                        </FromBx>

                        <FromBx>
                            <span>Password</span>
                            <Input 
                                name= "password"
                                type = "text" 
                                placeholder = "*****" 
                                value = {values.password}
                                onChange = {handleChange} 
                                required   
                            />
                        </FromBx>

                        <div style={{justifyContent: "space-between", display: "flex", alignItems: "center"}}>
                            <FromBxRem >
                                <label><InputCheck type="checkbox" name =""/> Remember me</label>
                            </FromBxRem>
                            <label style={{cursor: "pointer", color: "blue", fontSize: 18, marginTop: 5}} onClick= {() => history.push("/login")}>Login instead?</label>
                        </div>
                        


                        <FromBx>
                            <Button type="submit" disabled = {values.isSubmitting}>
                                {values.isSubmitting ? (
                                    "Loading"
                                ): "Sign up"}
                            </Button>
                        </FromBx>
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}
export default Signup;
