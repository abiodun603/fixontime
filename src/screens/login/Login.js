import React, {useState,useEffect,useRef, useContext} from 'react'
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button, BannerLogo} from './Login__element'
import {useHistory} from "react-router-dom"
import { Puff } from 'react-loading-icons';

// new CONFIGUARATION
import { login } from "../../context/authContext/apiCalls"
import {AuthContext} from "../../context/authContext/AuthContext"
import authLogo from "../../assets/image/auth/authLogo.svg"


const Signin = () => {
  // new concept
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("badljfljdl");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  },[user, pwd])
    const history = useHistory()

    const [values, handleChange] = useForm({
        email : "",
        password: ""
    });
    const [roleId, setRoleId] = useState(1);
    const [errors, setErrors] = useState("")
    // New CONFIGURATION
    const {isFetching,error, dispatch} = useContext(AuthContext);
    
    // console.log(isFetching);
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        // setUser("");
        // setPwd("");
        setSuccess(true)
        // const email = values.email
        // const password = values.password
        login({user, pwd}, dispatch, setErrMsg, errRef, setSuccess);
        console.log(errMsg)
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
                      <h2 style={{marginBottom: 10}}>Login into your account</h2>
                      <FromBx>
                          <span>Email</span>
                          <Input 
                              type = "text" 
                              id="username"
                              ref={userRef}
                              autoComplete = "off"
                              placeholder = "Enter Email Address"
                              onChange={(e) => setUser(e.target.value)}
                              value={user}
                              // name = "email"
                              required
                              // value = {values.email}
                              // onChange = {handleChange}
                          />
                      </FromBx>

                      <FromBx>
                          <span>Password</span>
                          <Input 
                              // name= "password"
                              type = "password" 
                              id="password"
                              onChange = {(e) => setPwd(e.target.value)}
                              value = {pwd}
                              required
                              placeholder = "*************" 
                              // value = {values.password}
                              // onChange = {handleChange}    
                          />
                      </FromBx>
                      <FromBx>
                        {
                            <Button>
                              {!success ? "Sign In" : <Puff/>}
                            </Button>
                          
                        }
                         
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
