import styled from 'styled-components';
import {FaBars, FaClock,FaPhoneAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import {MdMail } from 'react-icons/md'
import { COLORS,SIZES } from "../../constant";

export const NavContainer = styled.div`
    height:110px;
    position: sticky;
    top: 0;
    z-index: 10;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 19.27%, rgba(255, 255, 255, 0.51) 100%);
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(50px);

    @media screen and (max-width: 996px){
        height: 124px;
        width: 100%;
    }

    @media screen and (max-width: 690px){
        height: 64px;
        
    }

    .sidebar {
        position: fixed;
        top: 0;
        left:0;
        width: 250px;
        height: 100vh;
        background: ${COLORS.blue};
        z-index: 1000;
        display:flex;
        flex-direction: column;
    }

    .sideCancel {
        align-self:flex-end;
        font-size: 30px;
        color: ${COLORS.white};
        margin-right:20px;
        margin-top: 20px;
        margin-bottom: 30px;
        cursor:pointer;
    }

    .sidebar_link{
        display:flex;
        flex-direction:column;
        align-self:center;
        font-size: 20px;
    }

    .sidebar_text{
        color: ${COLORS.white};
        margin-bottom: 20px;
    }

    .side_darkbg {
        z-index: 999;
        height: 100vh;
    }

    
`;


export const Nav = styled.nav`
    position: relative;
    display: block;


`;

export const NavTopHeader = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${COLORS.blue};
    padding-bottom: 15px;
    padding-top: 15px;
    padding-left: ${SIZES.padding};
    padding-right: 50px;
    width: 100%;
    height: 46px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 996px){
        height: 60px;
    }

    @media screen and (max-width:862px){
        padding-left: 40px;
        padding-right: 40px;
    }

    @media screen and (max-width:805px){
        padding-left: 50px;
        padding-right: 50px;
    }
    

    @media screen and (max-width: 760px){
        padding-right: 20px;
        paddin-left: 20px;
    }

    @media screen and (max-width: 690px){
        display:none;
        
    }

`;


export const CompanyInfo = styled.div`
    display: flex;
    flex-direction: row;
    
    width: 100%;
    height: 100%;

`;

export const SocialInfo = styled.div`
display: flex;
flex-direction: row;

`;

export const ComNo = styled.div`
    display: flex;
    flex-direction: row
    color: #fff;
    margin-right: 25px;
`;

export const ComEmail = styled.div`
    display: flex;
    flex-direction: row
    color: #fff;
    margin-right: 25px;
`;

export const ComTime = styled.div`
    display: flex;
    flex-direction: row
    color: #fff;
    margin-right: 25px;
`;


export const FontPhone = styled(FaPhoneAlt)`
    min-width:16px;
    height: 16px;
    color: #fff;
    margin-right: 20px;

    
`;

export const FontEmail = styled(MdMail)`
    min-width:16px;
    height: 16px;
    color: #fff;
    margin-right: 20px;
    
`;
export const FontClock = styled(FaClock)`
    min-width:16px;
    height: 16px;
    color: #fff;
    margin-right: 20px;
    
`;

export const PhoneText = styled.div`
    font-size: ${SIZES.h6};
    color: #fff;
    font-weight: 400;

    @media screen and (max-width: 735px){
        font-size: 11px;
    }

    @media screen and (max-width: 754px){
        font-size: 12px;
    }
`;

export const EmailText = styled.div`
    font-size: ${SIZES.h6};
    color: #fff;
    font-weight: 400;

    @media screen and (max-width: 735px){
        font-size: 11px;
    }
    @media screen and (max-width: 754px){
        font-size: 12px;
    }

`;

export const ClockText = styled.div`
    font-size: ${SIZES.h6};
    color: #fff;
    font-weight: 400;

    @media screen and (max-width: 735px){
        font-size: 11px;
    }
    @media screen and (max-width: 754px){
        font-size: 12px;
    }
`;
export const SocialIcon = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;

    @media screen and (max-width: 735px){
        font-size: 14px;
    }
`;

export const FacebookImg = styled.img`
    display: block;
`;
export const InstagramImg = styled.img`
    display: block;
`;
export const TwitterImg = styled.img`
    display: block;
`;


export const NavBottomHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height:64px;
    border-bottom: 0.5px solid #F0F0F0;
    padding-left: 70px;
    padding-right: 0;

    @media screen and (max-width: 698px){
        padding-left: 65px;  
    }
    
    
    
`;

export const NavSection = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    @media screen and (max-width: 687px){
        justify-content: space-between;

        
    }
    
  
    
`;
export const NavHamBar = styled(FaBars)`
    font-size: 20px;
    color: #000;
    margin-top: 20px;
    display: none;
    cursor:pointer;
   
        @media screen and (max-width: 1172px){
                display: block;
        }

        @media screen and (max-width: 687px){
            
            
        }
    

`;

export const LogoBar = styled.div`
    margin-right: 89px;
    display:flex;
    


   

    
`;



export const LogoImage = styled.img`
    width: 93px;
    height: 46px;
    margin-top: 9px;
    margin-bottom: 9px;
    

`;

export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  

    @media screen and (max-width: 810px){
        float: right;
    }
    @media screen and (max-width: 687px){
        display:none;
        
        }
        
`;

export const NavLinks = styled(Link)`
    font-size: ${SIZES.h6};
    padding:10px 0;
    margin-right: 51px;
    font-weight: 500;
    font-family: Roboto;
    padding-top: 23px;
    padding-bottom: 25px;
    height: 100%;
    color: #000;

    &:hover {
        border-bottom: 4px solid ${COLORS.red};
        color: ${COLORS.red};
    }

    @media screen and (max-width: 1021px){

        &:nth-child(7){
            display: none;
        }
    }

    @media screen and (max-width: 977px){
         &:nth-child(6){
             display:none;
         }
    }

    @media screen and (max-width: 810px){
        &:nth-child(5) {
            display:none;
        }        

   }

   @media screen and (max-width: 704px){
    
        font-size: 12px;  
    }
    
   @media screen and (max-width: 698px){
       
    }

    @media screen and (max-width: 689px){
        margin-right: 30px;   
    }
   @media screen and (max-width: 687px){
    display:none;
    
    }

  
`;

export const NavReq = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    background: ${COLORS.red};
    padding: 25px 22px;

    @media screen and (max-width: 1172px){
        display: none;
    }
    ;
`;

export const ReqText = styled.h5`  
    font-size: 12px;
    color: #fff;
    font-family: Roboto;
    font-weight: bold;
    margin-right: 20px;
    
`;

export const FontArrow = styled.img`
    display:block;
    width: 16.5px;
    height: 10px;
`;




