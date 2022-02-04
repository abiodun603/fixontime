import React, {useContext, useState} from "react"
import Signin from "./screens/login/Login"
import Layout from "./components/c-layout/Layout"
import "./assets/css/grid.css"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {AuthContext} from "./context/authContext/AuthContext"
import Signup from "./screens/signup/Signup"
import { Reset } from "./screens"

function App() {
  const [mobileScreen, setMobileScreen] = useState(false);

 const GetWindowScreen = () => {
    if(window.innerWidth > 768 ){
        setMobileScreen(false);
    }else {
      setMobileScreen(true);
    }
  }
		const {user, isFetching} = useContext(AuthContext)
      return (
        <>
      {/* New AuthProvidr */}
          {/* <Router>
            <Switch>
              <Route exact path="/">{ user? <Layout/> : <Redirect to="/login" />}</Route>
              <Route path = "/login">
                {!user ? <Signin/> : <Redirect to="/" />}
              </Route>
              <Route path = "/forget">
                {!user ? <Signup/> : <Redirect to="/" />}
              </Route>
              <Route path = "/reset">
                <Reset/>
              </Route>
            </Switch>
          </Router> */}
          <Layout/>
    </>
  )
}

export default App