import React, {useContext} from 'react'
import DropDown from "../dropdown/DropDown"
import {Link} from 'react-router-dom'
import {TopNavWrapper, TopNavSearch, TopNavRight, TopNavRightItem, NotificationItem,TopNavRightUser, TopNavRightUserImage, TopNavRightUsername} from './topnav_element'
import user_image from "../../assets/image/about.jpg"
// import notifications from "../../assets/JsonData/notification"
import user_menu from '../../assets/JsonData/user_menus.js'
// import {IoMdNotificationsOutline} from "react-icons/io"
// import {FiSearch} from "react-icons/fi"
import { AuthContext } from '../../context/authContext/AuthContext'
import { logOut } from '../../context/authContext/AuthActions'
import authLogo from "../../assets/image/auth/authLogo.svg"

const curr_user = {
    display_name: "candid security",
    image: user_image
}



const renderUserProfile = (item, index) => (
    <Link to="/" key={index}>
        <NotificationItem>
            {item.icon}
            <span style={{marginLeft: 10}}>{item.content}</span>
        </NotificationItem>
    </Link>
)

const renderNoticationItem = (item, index) => (
    <NotificationItem key ={index}>
        <i className = {item.icon}></i>
        <span>{item.content}</span>
    </NotificationItem>
)
const TopNav = () => {

    const {user, dispatch} = useContext(AuthContext);

    const renderUserToggle = () => (
        <TopNavRightUser>
            <TopNavRightUserImage>
                {/* <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png" alt=""/> */}
            </TopNavRightUserImage>
            <TopNavRightUsername>
                {/* {user.user.name} */}
            </TopNavRightUsername>
        </TopNavRightUser>
    )
    // console.log(user)

    const handleLogout = (e) => {
        alert("good");
        dispatch(logOut)
    }
    return (
        <>
            <TopNavWrapper>
                <TopNavSearch>
                    {/* <input type="text" placeholder="Search here..."/>
                    <FiSearch style={{position: "absolute", fontSize: 20, right: 20, top: 15}}/> */}
                </TopNavSearch>
                <TopNavRight style = {{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <TopNavRightItem>
                        {/* dropdown here */}
                        <DropDown
                            customToggle = {() => renderUserToggle(curr_user)}
                            contentData = {user_menu}

                            renderData = {(item, index) => renderUserProfile(item, index)}
                        />
                    </TopNavRightItem>
                    <TopNavRightItem style={{marginTop: -8}}>
                        {/* <DropDown
                            icon = {<IoMdNotificationsOutline/>}
                            badge = "12"
                            contentData = {notifications}
                            renderData = {(item, index) => renderNoticationItem(item, index)}
                            renderFooter = {()=><Link>View All</Link>}
                        /> */}
                        <p onClick = {handleLogout} style={{color: "#455560"}}>Logout</p>
                    </TopNavRightItem>
                    <TopNavRightItem>
                        {/* Theme here */}
                    </TopNavRightItem>
                </TopNavRight>
            </TopNavWrapper>
        </>
    )
}

export default TopNav
