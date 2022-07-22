import React,{useState, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
import BlogDetails from './container/blog/blogDetails';
import ScrollToTop from './components/scollTop/ScrollTop';
import ResetLink from './screens/reset/Reset';

function App() 
   {
      const [sidebar, setSidebar] = useState(false);   
      const {user} = useContext(AuthContext)

      return (
         <>
            <GlobalStyles sidebar={sidebar} />
            <Router>
              <ScrollToTop/>
               {/* <Switch></Switch> */}
               <Route path="/productsDetails/:id">
                  <Description sidebar={sidebar} setSidebar={setSidebar} />
               </Route>
               <Route path="/blogDetails">
                  <BlogDetails sidebar={sidebar} setSidebar={setSidebar} />
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

               <Route exact path = "/login">
                  {!user ? <Signin/> : <Redirect to="/admin" />}
               </Route>

               <Route path = "/reset">
                    <ResetLink/>
               </Route> 

               <Route exact path = "/forget">
                 <Signup/> 
               </Route> 
               {/* <Route exact path = "/adminblog">
                  {user ? <Blog/>}
               </Route>   */}
            </Router>
         </>        
      );
   }
export default App;

// "homepage": "http://seenergysolutions.org",

