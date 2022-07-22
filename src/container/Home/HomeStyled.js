import styled from "styled-components";
import {SIZES,COLORS} from '../../constant/index';
import {Link} from "react-router-dom"
import rImg from "../../assets/image/homepage/header_image-min.png"
export const HomeContainer = styled.div`
    position: relative;  
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const HomePage = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    padding-right: ${SIZES.padding};
    background-repeat:no-repeat;
    background-size: cover;
    background: #DEDFF1;
    @media screen and (max-width:1120px){
        width: 100%;
        padding-right: 0;
    }
    @media screen and (max-width: 890px){
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 475px){
        padding-left: 0px;
        padding-right: 0px;
        height: 100%;
     }

    
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    max-width: 1240px;
    height: 100%;
    background:url(${rImg});
    background-repeat:no-repeat;
    background-size: cover;
    @media screen and (max-width:1120px){
        width: 100%;
        margin-right: 0;
        height: 100%;
    }

    @media screen and (max-width:475px){
        padding:0 20px;
        height: 80vh;
        display: flex;
        
    }
    

`;
export const LeftText = styled.div`
      padding: ${SIZES.padding};
      
    @media screen and (max-width: 600px){
        padding: 20px;
    }

    @media screen and (max-width: 477px){
        padding:10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-direction: column;
        backgroun: black;
    }
    
`;

export const LandingTitle = styled.div`
    font-size: ${SIZES.h4};
    font-weight: 600;
    color: ${COLORS.white};
    max-width: 610px;
    margin-bottom: 40px;
    @media screen and (max-width: 890px){
        font-size: 36px;
    }
    @media screen and (max-width: 475px){  
        display: flex;
        justify-self: center;
        flex-wrap:wrap;
        margin-left:0px;
        font-size: 24px;
    }

  
`;

export const LandingSubTitle = styled.div`
    font-size: 18px;
    color: ${COLORS.white};
    margin-bottom: 36px;
    @media screen and (max-width: 890px){
        font-size: 18px;
    }
    @media screen and (max-width: 475px){
        max-width: 350px;
        display: flex;
        justify-self: center;
        flex-wrap:wrap;
        margin-left:0px;
    }

`;

export const ButtonTouch = styled.button`
    background: ${COLORS.red};
    border:none;
    outline: none !important;
    width: 160px;
    height: 45px;
    border-radius: 10px;
    color: #fff;
`;


export const RightSection = styled.div`
    display:block;
    width: 400px;
    max-height: 514px;
    
    margin-top: 73px;
    position: relative;
    box-sizing: border-box;

    @media screen and (max-width:1120px){
        display:none;
      }

      .carousel_content {
          height: 100%;
      }

      .carousel_items {
        display: flex;
        flex-direction: row;
        position: relative;
      }

    

`;

export const HomePic = styled.img`
    width: 442px;
    height: 369px;
   
`;

export const HomeCompanyLogo = styled.div`
    display:flex;
    background:#F9F9F9;
    justify-content:center;
    align-items: center;
    padding: 22px 0;
    gap: 60px;

    img{
      width: 150px;

      @media screen and (max-width: 468px){
        gap: 10px !important;
      }
    }

    @media screen and (max-width: 468px){
     padding: 22px 1rem;
    }
`;

export const HomeAbout = styled.div`
    padding-right: ${SIZES.padding};
    padding-left: ${SIZES.padding};
    display:flex;
    flex-direction: column;
    padding-top: 103px;

    @media screen and (max-width:660px){
        padding-right: 50px;
        padding-left: 50px;
    }

    @media screen and (max-width:468px){
        padding-right: 20px;
        padding-left: 20px;
    }
`;

export const HomeAboutTitle = styled.div`
    font-weight: 600;
    font-size: 38px;
    max-width:990px;
    line-height: 132.69%;
    text-align: center;
    align-self: center;
    color: #030762;
    @media screen and (max-width: 815px){
        font-size: 36px;
    }
    @media screen and (max-width: 537px){
        font-size: 24px;
    }
`;
export const HomeAboutSubTitle = styled.div`
    font-size: 16px;
    text-align: center;
    color: #505050;
    align-self: center;
    max-width: 719px;
    margin-top: 17px;
    margin-bottom: 170px;
`;

export const WFE = styled.div`
    display:flex;
    flex-direction: column;

    .wfe_title{
        font-weight: 600;
        font-size: ${SIZES.h4};
        color: ${COLORS.blue};

        @media screen and (max-width: 468px){
            font-size: 24px;
        }
    }


    .wfe_body {
        display:flex;
        justify-content: space-between;

        @media screen and (max-width: 1074px){
            flex-direction: column;
        }
    }

    .wfe_left_section{
        margin-top: 49px;
        max-width: 538px;

        @media screen and (max-width: 1182px){
            max-width: 400px;
        }
        @media screen and (max-width: 1074px){
            max-width: 100vh;
        }
    }

    .wfe_text{
        padding-left: 63px;
        border-left: 2px solid ${COLORS.red};
        padding-top: 10px;
        padding-bottom: 20px;
        @media screen and (max-width:415px){
            padding-left: 30px;
        }


    }

    .wfe_header{
        font-weight: bold;
        font-size: 18px;
        color:${COLORS.blue};
    }

    .wfe_subheader {
        font-size: 18px;
        color:${COLORS.lightgray}
    }

    .wfe_right_section{
        max-width: 543px;
        img {
            width: 100%;
        }

        @media screen and (max-width: 468px){
            margin-top: 1rem;
            max-width: 100%;
            img{
                height: 300px;
                margin-left: -30px;
            }
        }

    }

`;

export const HomeService = styled.div`
    display:flex;
    flex-direction:column;

   

    .home_service_title {
        display:flex;
        flex-direction:row;
        position: relative;
        justify-content:center;
        margin-top: 100px;
        margin-bottom: 92px;
    }
    .home_service_title .home_text {
        display:flex;
        align-self:flex-end;
        font-size: 48px;
        color: #030762;
        text-align:center;
        font-weight: 600;

        @media screen and (max-width: 600px){
            font-size: 36px;
        }

        @media screen and (max-width: 468px){
            font-size: 24px;
        }
       
    }
    .home_service_title img {
        position: absolute;
        right: 10%;
        bottom:10%;
        

        @media screen and (max-width: 759px){
            bottom -10%;
        }

        @media screen and (max-width: 468px){
            bottom -100%;
        }

    }

    .solution_info {
       
       display:flex;
        background: #F9F9F9;
        width:100%;
        height: 100%;

        @media screen and (max-width: 1047px){
            flex-direction: column;
            align-items:center;
            justify-content:center; 
        }

    
    }

    .solution_info img {
        margin-right: 20px;
        @media screen and (max-width: 1118px){
            width:90%;
        }
        @media screen and (max-width: 1047px){
            height:400px;
            padding-top: 30px;
            
        }

        @media screen and (max-width: 500px){
            width: 100%;
            margin: 0 20px !important;

        }

    }

    .solution_slider {
        max-width: 600px;
        margin-bottom: 40px;
        @media screen and (max-width: 1100px){
            margin-bottom: 5px;
 
        }
        @media screen and (max-width: 1047px){
            width: 100%;
            height: 400px;
            max-height: 100%;
 
        }

        @media screen and (max-width: 434px){
            height: 500px;
        }
    }

    .solution_body {
        margin-top:100px;
        padding-right: 30px;

        @media screen and (max-width: 1047px){
            padding-left:30px;
            margin-top:5px; 
        }
    }
    .solution_title {
        font-weight: 600;
        font-size: 36px;
        color: #030762;

        @media screen and (max-width: 468px){
           font-size: 24px;
           margin-top: 1rem;
           margin-bottom: .5rem;
        }
    }
    .btn_touch {
        width: 150px;
        height: 50px;
        background: #030762;
        border-radius: 6px;
        color: #fff;
        border:none;
        outline: none !important;
        cursor:pointer;
        margin-top: 38px;
    }

    .solution_subtitle{
        max-width: 535px;
    }
`;
export const HomeTest = styled.div`
    width:100%;
    height: 637px;
    padding-top: 104px;
    background: url(${process.env.PUBLIC_URL + `/Image/home/testimonialBg.svg`});
    display:flex;
    flex-direction: column;
    margin-bottom: 2rem;

    @media screen and (max-width:502px){
        padding-bottom: 30px;
    }

    .home_test_title {
        font-weight: 600;
        font-size: 48px;
        line-height: 132.69%;
        text-align: center;
        color: #FFFFFF;
        margin-bottom:20px;

        @media screen and (max-width:502px){
            font-size: 36px;
        }

        @media screen and (max-width:4680px){
            font-size: 24px;
        }
    }
    .home_test_subtitle {
        font-size: 24px;
        line-height: 137.2%;
        text-align: center;
        color: #FFFFFF;
    }


    .test_card {
        display: flex;
        flex-direction:row;
        margin: 0 20px;
        margin-top:47px;
        @media screen and (max-width: 500px){
            flex-direction: column;
            justify-content:center;
            align-items:center;
        }
        
    }

    .card_item{
        display:flex;
        flex-direction:column;
        align-items: center;
        margin-top: 20px;
        position: relative;
    
    }

    .comment_icon {
        position: absolute;
        top:-10%;
        right:75%;

        @media screen and (max-width: 500px){
            top:-10%;
            right:90%;
        }
    }
    
    .card_center{
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .testimony {
        font-size: 16px;
        text-align: center;
        width: 300px;
        color: #FFFFFF;
        font-weight:normal;

     }
    .person_img img{
        position:relative;
        border:5px solid #fff;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        background-repeat:no-repeat;
        display:flex;
        margin-top: 28px;
        background: white;
        justify-content:center;
        justify-self:center;
        align-self:center;
        margin-bottom: 10px;

    }

   

    

    .person_detail p{
        color: #fff;
        font-size: 14px;
        
    }

    .person_detail span {  
        display:block;
        color: ${COLORS.red};
        font-size: 14px;
    }
    
    @media screen and (max-width: 500px){
        height: 100%;
        justify-content: center;
    }
    `;

export const HomeQuoteWrapper = styled.div `
    background: #030762;
    width: 85%;
    height: 300px;
    margin: 2.5rem auto;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;

    @media screen and (max-width: 468px){
        width: 90%;

    }

`;
export const HomeQuoteContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:0 20px;

    h3{
        color: #FFFFFF;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: .8rem !important;

        @media screen and (max-width: 500px) {
            font-size: 20px;
        }
    }

    p{
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: .5rem;
        text-align: center;
    }

    @media screen and (max-width: 468px){
        padding:0 15px;
    }
`;


export const Button = styled.button `
    width: 170px;
    border-radius: 10px;
    
    border: none;
    padding: 10px 20px;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 6px; 
    background: #030762;
    font-weight: 400;
    margin-top: 1.5rem;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HomeConnected  = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    padding-top: 40px;
    padding-bottom: 70px;

    h3{
        font-size: 36px;
        font-weight: 600;
        color: ${COLORS.darkblue};

        @media screen and (max-width: 468px){
           font-size: 24px;
           margin-bottom: .5rem !important;
        }
    }

    

    p{
        text-align:center;
        font-size: 16px;
        color: #505050;
    }

    .subscribe {
        width: 557px;
        height: 48px;
        border: 0.3px solid #070E4A;
        box-sizing: border-box;
        border-radius: 8px;
        display:flex;
        align-items:center;
        padding-left: 30px;
        margin-top: 20px;
        justify-content:space-between;
        @media screen and (max-width: 635px){
            width: 400px;
        }

        @media screen and (max-width: 500px){
            width: 300px;
        }
    }

    input {
        
        border:none;
        outline: none !important;
        width: 70%;
    }

    input::placeholder {
        font-family:Roboto;
        color: #D0D0D0;
        font-size: 13px;
        
    }

    button {
        height: 38px;
        width: 100px;
        background: #070E4A;
        border-radius: 4px;
        color: #fff;
        border:none;
        outline: none !important;
        margin-right: 3px;
        
    }


`;


