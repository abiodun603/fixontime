import styled from "styled-components";
import {SIZES,COLORS} from '../../constant/index';
import glass from "../../assets/image/banner/learnglass.png"

export const ElearnContainer = styled.div`
    position: relative;  
    
`;

export const ElearnContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 65px;

`;

export const ElandingPage = styled.div`
    display: flex;
    height: 400px;
    max-width: 100%;
    background-image: url(${glass});
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    padding-bottom: 104px;
    @media screen and (max-width: 1086px){
        align-items: flex-end;
    }

    @media screen and (max-width:876px){
        justify-content: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        margin: 0;
        padding: 0 1rem;
    }

  

   
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 631px;
    padding-top: 109px;

     
     @media screen and (max-width:1207px){
        width: 600px;
    }

    @media screen and (max-width:876px){
        width: 100%;
    }



`;

export const LandingTitle = styled.div`
    font-size: 35px;
    font-weight: 600;
    color: ${COLORS.blue};
    margin-bottom: 1rem;
  
    @media screen and (max-width: 1320px){
        font-size:${SIZES.h4};
    }

    @media screen and (max-width: 468px){
       font-size: 26px;
       font-weight: 600;
       margin-bottom: .7rem;
    }
`;

export const LandingSubTitle = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${COLORS.lightgray};
    height: 60px;
    max-width: 604px;
   

`;

export const RightSection = styled.div`
    display: block;
    padding-top: 62px;
   
`;

export const ElearnPic = styled.img`
    background-size: cover;
    margin-bottom: -3rem;
   
    @media screen and (max-width:1207px){
        width: 100%;
    }
    @media screen and (max-width:1100px){
        width: 500px;
    }
    @media screen and (max-width:950px){
        width: 100%;
    }
    @media screen and (max-width:400px){
        width: 300px;
    }
`;

export const ElearningCat = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 100%;
    position: relative;
    padding-left: ${SIZES.padding};
    padding-right: ${SIZES.padding};

    
    @media screen and (max-width: 990px){
      padding-left: 60px;
      padding-right: 60px;
    }

    @media screen and (max-width: 468px){
        padding-left: 0;
        padding-right: 0;
        justify-content: center !important;
        margin: 0 auto !important;
        margin-top: 4rem !important;
    }
`;

export const ElearningStore = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto !important;
    justify-self: center;
    align-self: center;

    .no__post{
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: 1498px){
      justify-content: space-between;
    }
    @media screen and (max-width: 556px){
      align-items: center;
      padding-left:30px;
    }
    @media screen and (max-width: 470px){
      padding-left:0;
      flex-wrap: no-wrap;
      flex-direction: column;
      margin: 0 auto !important;
    }
`;

export const ElearningItems = styled.div`

    margin-right: 33px;
    margin-bottom: 36px;
    @media screen and (max-width: 1498px){
        width: 350px;
    }
    @media screen and (max-width: 1410px){
        width: 320px;
    }
    @media screen and (max-width: 1310px){
        width: 300px;
    }
    @media screen and (max-width: 1216px){
        width: 280px;
    }
    @media screen and (max-width: 1156px){
        width: 210px;
    }
    @media screen and (max-width: 865px){
        width: 300px;
    }
    @media screen and (max-width: 802px){
        max-width: 250px;
    }
    @media screen and (max-width: 702px){
        max-width: 200px;
    }
    @media screen and (max-width: 602px){
        width: 500px;
        margin-right: 10px;
    }
    @media screen and (max-width: 556px){
        max-width: 490px;
        margin-right: 5px;
       
    }
    @media screen and (max-width: 400px){
        max-width: 250px;
        margin-right: 0px;
       
    }


`;

export const ElearningCard = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    
`;

export const ElearningImage = styled.div`
    max-width: 392px;
    height: 225px;
    position: relative;
    @media screen and (max-width: 1310px){
        width: 300px;
    }
    @media screen and (max-width: 1216px){
        width: 280px;
    }
    @media screen and (max-width: 1156px){
        width: 210px;
    }
    @media screen and (max-width: 865px){
        width: 300px;
    }
    @media screen and (max-width: 802px){
        max-width: 250px;
    }
    @media screen and (max-width: 702px){
        max-width: 200px;
    }
    @media screen and (max-width: 602px){
        max-width: 200px;
    }
    @media screen and (max-width: 556px){
        max-width: 490px;
        background-size: cover;
       
    }
    @media screen and (max-width: 400px){
        max-width: 250px;
    }

    
`;
export const PlayImg = styled.img`
    position: absolute;
    left: 35.33%;
    right: 35.33%;
    top: 35.33%;
    bottom: 35.33%;
    z-index: 1;

@media screen and (max-width: 1260px){
    left: 35.33%;
    right: 35.33%;
    top: 35.33%;
    bottom: 35.33%;
}
@media screen and (max-width: 1156px){
    left: 30.33%;
    right: 30.33%;
    top: 30.33%;
    bottom: 30.33%;
    width: 60px;
}
@media screen and (max-width: 865px){
    left: 37.33%;
    right: 37.33%;
    top: 37.33%;
    bottom: 37.33%;
    width: 60px;
}

`;

export const EImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
       
    
`;

export const ElearningName = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${COLORS.lightgray};
`;

export const ElearningView = styled.div`
    font-size: 14px;
    color: ${COLORS.lightgray};
`;

export const ElearnDate = styled.div`
    font-size: 14px;
    color: ${COLORS.lightgray};
`;

export const VideoArea = styled.div`
    position:fixed;
    top:0;
    left: 0;
    display: block;
    background: rgba(0,0,0);
    width: 500px;
    height: 300px;
    z-index:1100;
`;

export const ElearnVid = styled.video`
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%
    border: 3px solid #fff;
    border-radius: 5px;
`;

export const Cancel = styled.span`
    color: #fff;
`;

export const DarkBg = styled.div`
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top:0;
    left: 0;
    z-index:1000;
    width:100%;
    min-height: 1000%;
    display: block;

  
    
`;
