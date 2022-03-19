import React,{useState, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyled';
import Description from './container/Description';
import Products from './container/Products';
import Elearning from './container/e-learning';
import Home from './container/Home';
import Service from './container/Service';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from './container/blog/Blog';
import About from './container/about/About';
import Contact from './container/contact/Contact';
import Signin from "./screens/login/Login"
import Layout from "./components/c-layout/Layout"
import "./assets/css/grid.css"
import {AuthContext} from "./context/authContext/AuthContext"
import Signup from "./screens/signup/Signup"



function App() 
        {
            const [sidebar, setSidebar] = useState(false);   
          	const {user} = useContext(AuthContext)
     
            return (
               <>
                  <GlobalStyles sidebar={sidebar} />
                  <Router>
                     <Route path="/productsDetails/:id">
                        <Description sidebar={sidebar} setSidebar={setSidebar} />
                     </Route>
                     <Route path="/products">
                        <Products sidebar={sidebar} setSidebar={setSidebar} />
                     </Route>
                     <Route path="/elearn">
                        <Elearning sidebar={sidebar} setSidebar={setSidebar} />
                     </Route>
                     <Route path="/" exact>
                        <Home sidebar={sidebar} setSidebar={setSidebar} />
                     </Route>
                     <Route path="/service">
                        <Service sidebar={sidebar} setSidebar={setSidebar} />
                     </Route>
                     <Route path="/about">
                        <About sidebar={sidebar} setSidebar={setSidebar} />
                     </Route>
                     <Route path="/blog">
                        <Blog sidebar={sidebar} setSidebar={setSidebar} />
                     </Route>
                     <Route path="/contact">
                        <Contact sidebar={sidebar} setSidebar={setSidebar} /> 
                     </Route>  
                     <Route exact path="/admin">{ user? <Layout/> : <Redirect to="/login" />}</Route>
                        <Route path = "/login">
                        {!user ? <Signin/> : <Redirect to="/" />}
                      </Route>
                     <Route path = "/forget">
                       {!user ? <Signup/> : <Redirect to="/" />}
                   </Route>  
                  </Router>
               </>        
            );
        }

export default App;


// import React, {useContext, useState} from "react"
// import Signin from "./screens/login/Login"
// import Layout from "./components/c-layout/Layout"
// import "./assets/css/grid.css"
// import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// import {AuthContext} from "./context/authContext/AuthContext"
// import Signup from "./screens/signup/Signup"
// import { Reset } from "./screens"

// function App() {
//   const [mobileScreen, setMobileScreen] = useState(false);

//  const GetWindowScreen = () => {
//     if(window.innerWidth > 768 ){
//         setMobileScreen(false);
//     }else {
//       setMobileScreen(true);
//     }
//   }
// 		const {user, isFetching} = useContext(AuthContext)
//       return (
//         <>
//                       <Router>
//             <Switch>
//               <Route exact path="/">{ user? <Layout/> : <Redirect to="/login" />}</Route>
//               <Route path = "/login">
//                 {!user ? <Signin/> : <Redirect to="/" />}
//               </Route>
//               <Route path = "/forget">
//                 {!user ? <Signup/> : <Redirect to="/" />}
//               </Route>
//               <Route path = "/reset">
//                 <Reset/>
//               </Route>
//             </Switch>
//           </Router>
//     </>
//   )
// }

// export default App