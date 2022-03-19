import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import {SIZES,COLORS} from '../../constant/index';

export const ElearnContainer = styled.div`
    position: relative;  
    
`;

export const ElearnContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: ${SIZES.padding};
    padding-right: ${SIZES.padding};
    padding-bottom: 65px;

    @media screen and (max-width: 990px){
        padding-left: 60px;
        padding-right: 60px;
    }
`;

export const ElandingPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 104px;
    @media screen and (max-width: 1086px){
        align-items: flex-end;
    }

    @media screen and (max-width:876px){
        flex-wrap: wrap;
        justify-content: center;
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
    font-size: ${SIZES.h3};
    font-weight: 600;
    color: ${COLORS.blue};
  
    @media screen and (max-width: 1320px){
        font-size:${SIZES.h4};
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
    position: relative;
`;

export const ElearningStore = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 1498px){
        justify-content: space-between;
    }
    @media screen and (max-width: 556px){
        align-items: center;
       
        padding-left:30px;
    }
    @media screen and (max-width: 470px){
        padding-left:0;
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
    max-width: 500px;
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
