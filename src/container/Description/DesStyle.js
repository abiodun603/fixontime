import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { COLORS, SIZES } from "../../constant";
export const DesContainer = styled.div`
    position: relative;
    z-index:1;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 213px;
    padding-left: 100px;
    padding-bottom: 112px;
    padding-right: 100px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width:1252px){
        padding-top:120px;
    }

    @media screen and (max-width: 995px){
        padding-left: 70px;
        padding-right: 70px;
    }

    @media screen and (max-width: 940px){
        padding-left: 60px;
        padding-right: 60px;
    }
    
    @media screen and (max-width: 900px){
        padding-left: 50px;
        padding-right: 50px;
    }

    @media screen and (max-width: 870px){
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        
    }
    
`;

export const DescPic = styled.div`
    width: 601px;
    height: 559px;

    @media screen and (max-width: 870px){
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 329px){
        width: 200px;
    }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
export const DesContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 72px;

    @media screen and (max-width:1280px){
        margin-left: 50px;
    }
    @media screen and (max-width:1250px){
        margin-left: 30px;
    }

    @media screen and (max-width: 1245px){
        margin-left:0;
    }

    @media screen and (max-width: 870px){
        justify-content: center;
    }
`;



export const DesHeader = styled.h4`
    font-size: ${SIZES.h4};
    color: ${COLORS.blue};
    font-weight: 600;
    margin-bottom: 23px;
    @media screen and (max-width: 870px){
        text-align: center;
    }
`;

export const SubHeader = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 23px;
    @media screen and (max-width: 870px){
        justify-content: center;
    }
`;

export const SubText = styled.div`
    font-size: ${SIZES.h5};
    margin-right: 13px;

`;

export const NojaImage = styled.img`
    width: 163px;
    height: 17px;

    @media screen and (max-width: 329px){
        width: 100px;
    }
`;



export const DescDownload = styled.a`
    border: 1px solid ${COLORS.blue};
    display: flex;
    border-radius:5px;
    flex-direction: row;
    width: 251px;
    height: 50px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 4px 4px #00000008;
    cursor: pointer;
    margin-bottom: 32px;

    @media screen and (max-width: 870px){
        margin-left: 150px;
    }

    @media screen and (max-width: 630px){
        margin-left: 130px;
        
    }
    @media screen and (max-width: 580px){
        width: 240px;
        margin-left: 90px;
    }
    @media screen and (max-width: 430px){
        margin-left: 0;
    }
    
`;

export const FontDownload = styled.img`
    width: 20px;
    height: 18px;
    margin-right: 20px;
    color: ${COLORS.blue};
    

`;

export const DownloadText = styled.h5`
    font-size: ${SIZES.h5};
    color: ${COLORS.blue};
    font-weight: 400;
   
`;

export const DescBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 567px;
    

    @media screen and (max-width: 1174px){
        max-width: 500px;
        
    }

    @media screen and (max-width: 1054px){
        max-width: 400px;
    }

    @media screen and (max-width: 870px){
        max-width: 567px;
        
    }

    @media screen and (max-width: 630px){
        max-width: 500px;
        
    }

    @media screen and (max-width: 580px){
        max-width: 400px;
    }
    @media screen and (max-width: 430px){
        width: auto;
    }

`;

export const Ptag = styled.p`
    font-size: ${SIZES.h5};
    color: ${COLORS.lightgray};
`;

export const DesContactBtn = styled.button`
    width: fit-content;
    display: flex;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid ${COLORS.blue};
    margin-top: 27px;
    border-radius: 6px;
    align-items: center;
    padding:0 15px;
`;

export const ContactText = styled.h5`
    font-size: ${SIZES.h5};
    color: ${COLORS.blue};
    font-weight: 600;
    margin-right: 58px;
    

`;

export const FontArrow = styled(IoIosArrowForward)`
    color: ${COLORS.blue};
`;


