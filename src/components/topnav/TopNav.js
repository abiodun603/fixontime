import React, {useContext, useState, useEffect} from 'react'
import {TopNavWrapper, TopNavRight, TopNavRightItem} from './topnav_element'
import { AuthContext } from '../../context/authContext/AuthContext'
import { logOut } from '../../context/authContext/AuthActions'
import {AiOutlineMenu} from "react-icons/ai"
import {FaTimes} from "react-icons/fa"
import Sidebar from '../sidebar/Sidebar'
const TopNav = (props) => {
  const {user, dispatch} = useContext(AuthContext);


    return (
        <>
          <TopNavWrapper>
            <div>

            </div>
            <TopNavRight style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <TopNavRightItem style={{marginTop: -8}}>
                    <p style = {{cursor: "pointer", color: "#455560"}} onClick = {() => dispatch(logOut())} >Logout</p>
                </TopNavRightItem>

                {
                  props.mobile && (
                    <div className='sidebar-toggle'r>
                      {
                        props.sidebar ? 
                        <FaTimes onClick={() => props.setSidebar(!props.sidebar)}/> 
                        : 
                        <AiOutlineMenu onClick={() => props.setSidebar(!props.sidebar)}/>
                      }
                    </div>

                  )
                }
            </TopNavRight>
          </TopNavWrapper>

        </>
    )
}

export default TopNav
