import React, {useState, useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'
import DRoutes from '../Routes'
import TopNav from "../topnav/TopNav"
import {LayoutWrapper, LayoutContent, LayoutContentMain} from './layout_element.js'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

const Layout = () => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {    
    const handleResize = () => {
      if(window.innerWidth < 1065) {
        setMobile(true);
        setSidebar(false)

      } else if(window.innerWidth > 1065) {
        setSidebar(true)
        // setMobile(false)
      }else {
      //  setMobile(false);
       setSidebar(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

    }
  }, [setSidebar, setMobile])

  useEffect(() => {
    if(window.innerWidth < 768) {
      setMobile(true);
    }

    if(window.innerWidth > 1067) {
      setSidebar(true);
    }

  
  }, [])
    return (
        <Router>
            <Switch>
               <Route render={(props) => 
                    <>
                        <LayoutWrapper>
                            <Sidebar {...props } sidebar = {sidebar}/>
                            <LayoutContent>
                                <TopNav sidebar = {sidebar} mobile={mobile} setMobile = {setMobile} setSidebar = {setSidebar} />
                                <LayoutContentMain >
                                    <DRoutes/>
                                </LayoutContentMain>
                            </LayoutContent>
                        </LayoutWrapper>
                    </>
               }/>
            </Switch>
        </Router>
       
    )
}

export default Layout
// title: "Subscription Successfull",
