import React from "react"
import { HeaderContainer, HeaderButton } from "./StyledHeader"
import {IoAddSharp} from "react-icons/io5"

const Header = (props) => {
    return (
        <>
        {
            props.title ? (
                <HeaderContainer>
                    <p>{props.header}</p>
                    <HeaderButton onClick = {props.onClick}>
                        <IoAddSharp style={{fontSize: 20, color: "#FFFFFF"}}/>
                        <span>{props.title}</span>
                    </HeaderButton>
                </HeaderContainer>
            ): (
                <HeaderContainer>
                    <p>{props.header}</p>
                </HeaderContainer>
            )
        }
            

        </>
    )
}

export default Header