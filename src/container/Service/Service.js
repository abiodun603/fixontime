import styled from "styled-components";
import { SIZES } from "../../constant";
export const ServiceContainer = styled.div`
    position: relative;
`;

export const ServiceContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .hero_section{
        align-self:center;
        margin: 93px 0;
        

    } 
    .hero_title{
        font-weight: 600;
        font-size: 48px;
        text-align: center;
        color: #030762;

        @media screen and (max-width:600px){
           font-size:36px;
        }
    }

    .hero_subtitle{
        font-size: 24px;
        text-align: center;
        color: #505050;
        width: 485px;
        height: 87px;

        @media screen and (max-width:600px){
            font-size:18px;
            width: 300px;
         }
        
    }

    .service_bottom_section{
        
        margin: 0 ${SIZES.padding};
        @media screen and (max-width:987px){
            margin: 0 50px;
        }

        @media screen and (max-width: 868px){
            margin:0;
            display:flex;
            flex-direction:column;
            align-items:center;
        }

        @media screen and (max-width:600px){
            margin: 0 20px;
         }
       
    }

    .card_section{
        display:flex;
        @media screen and (max-width:868px){
            flex-direction:column;
            align-items:center;
        }
       
    }

    .left_section, .right_section {
        width: 602px;
        background: #FFFFFF;
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display:flex;
       
        padding-top:53px;
        padding-left:57px;
        padding-right:57px;
        
        padding-bottom: 45px;
        @media screen and (max-width:450px){
            max-width:350px;
            padding: 54px 20px;
        }
        @media screen and (max-width:410px){
            max-width:280px;
            padding: 54px 20px;
        }
        @media screen and (max-width:868px){
            margin-bottom: 20px;
            width:500px;
        }

        @media screen and (max-width:600px){
            margin-bottom: 20px;
            width:400px;
        }
    }

    .right_section {
        margin-left: 36px;
        @media screen and (max-width:868px){
            margin-left:0;
         }
    }

    .left_section img,.right_section img {
        width: 100%;
        margin-bottom: 34px;
    }
    

    h3{
        max-width: 302px;
        font-weight: 600;
        font-size: 36px;
        line-height: 132.69%;
        color: #030762;
    }

    

   
    button {
        width: 183px;
        height: 50px;
        background: #030762;
        border-radius: 6px;
        border:none;
        outlone: none !important;
        color: #fff;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 20px;
        margin-top: 29px;
        
    }

    .full_section {
        max-width: 1240px;
        margin-top:44px;
        background: #FFFFFF;
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display:flex;
        padding: 54px 57px;
        justify-content:space-between;
        margin-bottom: 44px;
        
        @media screen and (max-width: 868px){
            flex-direction:column-reverse;
            max-width:500px;
            align-self:center;
            justify-self:center;
            display:flex;

        }

        @media screen and (max-width:600px){
            max-width:400px;
        }
        @media screen and (max-width:450px){
            width:350px;
            padding: 54px 20px;
        }
        @media screen and (max-width:410px){
            max-width:280px;
            padding: 54px 20px;
        }
        
    }
    .full_section .image {
        margin-left:20px;

        @media screen and (max-width:868px){
           margin-left:0;
        }
    }
    .full_section .image img {
        width: 100%;
    }
    .info {
        width: 529px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        margin-right: 20px;

        @media screen and (max-width:868px){
            width:350px;
        }
        @media screen and (max-width:600px){
            
            width: 100%;
        }

    }
    .card_section div {
        display:inline-block;
        margin-bottom: 23px;
        
    }

    .info div {
       
        margin-top: 25px;

    }
    .info h3{
        max-width: 323px;
        
    }
`;

