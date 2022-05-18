import React, {useState} from 'react'
import {SidebarWrapper, SidebarLogo, SideBarItemWrapper,
        SideBarItemInner,
        SideBarIcon,
} from "./sidebar_element.js"
import sidebar_items from "../../assets/JsonData/sidebar_routes"
import {Link} from 'react-router-dom'
import authLogo from "../../assets/image/auth/authLogo.svg"
const SideBarItem = props => {
    const active  = props.active ? "active" : ""
    return (
        <>
            <SideBarItemWrapper>
                        {/* <SideBarItemWrapper className={sidebar ? "sidebar active" : sidebar } > */}

                <SideBarItemInner className = {active}>
                    <SideBarIcon>
                        {props.icon}
                    </SideBarIcon>
                    <span>
                        {props.title}
                    </span>
                </SideBarItemInner>
            </SideBarItemWrapper>
        </> 
    )
}

const Sidebar = ({sidebar, ...props}) => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    console.log(sidebar)

    return (
        <>
          <SidebarWrapper>
            <div className= {sidebar ? "sidebar active" : "sidebar"} >
            <SidebarLogo>
              <img src = {authLogo} alt="" style={{width: "120px", marginTop: 20}}/>
              </SidebarLogo>
              {
                sidebar_items.map((item, index) => (
                  <Link to ={item.route} key={index}>
                    <SideBarItem
                      title = {item.display_name}
                      icon = {item.icon}
                      active = {index === activeItem}
                    />
                  </Link>
                ))
              }
            </div>
          </SidebarWrapper>
        </>
    )
}

export default Sidebar
