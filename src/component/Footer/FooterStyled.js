import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, SIZES } from "../../constant";


export const FooterContainer = styled.div`
    background: ${COLORS.blue};
    position: relative;
    
    min-height: 344px;

`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    margin-top:18px;
   
    margin-left: ${SIZES.padding};
    margin-right: ${SIZES.padding};

    @media screen and (max-width: 1100px){
        margin-left: 50px;
        margin-right: 50px;
    }

`;

export const TopContent = styled.div`
    display: flex;
    flex-direction column;
    margin-top:18px;

`;
export const FooterNav = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 705px){
        align-items: flex-start;
    }
`;

export const FooterLogo = styled.div`
    width: 131px;
    height: 72px;

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const FooterNavList = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 705px){
        flex-direction: column;
     
        
    }
`;

export const FooterNavLink = styled(Link)`
    color: #fff;
    margin-left:78px;
    font-size: ${SIZES.h6};
    font-weight: 400;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 1232px){
        margin-left: 68px;
    }
    @media screen and (max-width: 1157px){
        margin-left: 60px;
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
   @media screen and (max-width: 705px){
    margin-bottom:30px;
    
    }

  

`;

export const FooterSocialLink = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    margin-top: 16px;
    justify-content: flex-end;
`;

export const BottomContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 150px;
`;

export const FooterCopyRight = styled.div`
    font-size: ${SIZES.h6};
    color: #fff;
  
`;