import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {SIZES,COLORS} from '../../constant/index';

export const ProductsContainer = styled.div`
    position: relative;  
`;

export const ProductsContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const PlandingPage = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: ${SIZES.padding};
    padding-right: ${SIZES.padding};
    padding-bottom: 35.3px;
    padding-top: 69px;
    background-repeat:no-repeat;
    background-size: cover;
    
    background-image: url(${process.env.PUBLIC_URL + `/Image/products/p_landingbg.svg`});
    @media screen and (max-width: 1070px){
        padding-left: 50px;
        padding-right: 50px;
    } 
    
    @media screen and (max-width: 890px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 475px){
        padding-left: 0px;
        padding-right: 0px;
     }

    
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 182px;
    width: 470px;

    @media screen and (max-width: 1152px){
        margin-right: 100px;
    }

    @media screen and (max-width:1070px){
        margin-right: 20px;
    }


    @media screen and (max-width:500px){
      width: 400px;
    }

    @media screen and (max-width:400px){
        width: 300px;
      }

    

`;

export const LandingTitle = styled.div`
    font-size: ${SIZES.h3};
    font-weight: 600;
    color: ${COLORS.blue};
    height: 120px;
    margin-bottom: 40px;

    @media screen and (max-width: 890px){
        font-size: 36px;
    }

    @media screen and (max-width: 475px){
        font-size: 29px;   
       
        max-width: 350px;
        display: flex;
        justify-self: center;
        flex-wrap:wrap;
        margin-left:40px;
    }

  
`;

export const LandingSubTitle = styled.div`
    font-size: 24px;
    font-weight: 400;
    color: ${COLORS.red};
    height: 60px;

    @media screen and (max-width: 890px){
        font-size: 24px;
    }

    @media screen and (max-width: 475px){
        font-size: 20px;   
       
        max-width: 350px;
        display: flex;
        justify-self: center;
        flex-wrap:wrap;
        margin-left:40px;
    }

`;

export const  LandingPartner = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PartnerText = styled.div`
    font-size: ${SIZES.h5};
    color: ${COLORS.lightgray};
    margin-top: 33px;
    margin-bottom: 8px;
`;

export const PartnerLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:500px){
        width: 100px
        margin-left: 40px;
       
    }


    @media screen and (max-width: 475px){
        width: 70px;
        margin-left: 90px;
     }

     @media screen and (max-width:400px){
        margin-left: 70px;
      }
`;

export const NojaImage = styled.img`
    max-width :163px;
    max-height:17px;

    @media screen and (max-width:500px){
        width: 100px;
    }
    @media screen and (max-width: 475px){
       width: 70px;
    }
`;

export const LucyElectImage = styled.img`
    margin: 0 20px;
    @media screen and (max-width:500px){
        width: 100px;
        margin: 0 10px;
    }
    @media screen and (max-width: 475px){
        width: 70px;
     }
`;

export const ReplImage = styled.img`
    width: 130px;
    height: 54px;
    @media screen and (max-width:500px){
        width: 100px;
    }
    @media screen and (max-width: 475px){
        width: 70px;
        
     }
`;

export const RightSection = styled.div`
    display:block;
    max-width: 514px;
    max-height: 370.7px;

    

`;

export const ElectricPic = styled.img`
    width: 100%;
    height: 100%;
`;

export const ProductsCat = styled.div`
    
    width: 100%:
    height: 500px;
    padding-top: 63px;
    padding-left: ${SIZES.padding};
    padding-right: ${SIZES.padding};
    padding-bottom: 230px;

    @media screen and (max-width: 660px){
        padding-left: 50px;
        padding-right: 50px;
        
    }

    @media screen and (max-width: 434px){
        padding-left: 30px;
        padding-right: 30px;
        
    }
`;

export const GetProduct = styled.div`
     display: flex;
     flex-direction: column;
`;

export const FindPro = styled.div`
     display: flex;
     flex-direction: row;
     margin-bottom: 15px;
     align-self:flex-end;
`;

export const SearchPro = styled.div`
     display: flex;
     flex-direction: row;
     width: 268px;
     height: 45px;
     align-items: center;
     background: #F9F9F9;
     border-radius: 6px;
`;

export const SearchInput = styled.input`
     
     margin-left: 22px;
     margin-right: 10px;
     border:none;
     outline: none !important;
     background: transparent;
     &::placeholder {
         font-size: 14px;
     }
     
`;

export const SearchImg = styled(FaSearch)`
    width: 18.62px;
    height: 18.62px;
    color: ${COLORS.lightgray};

`;
export const Line = styled.div`
     content: '';
     width: 100%;
     border: 1px solid #E0E0E0;
     margin-bottom: 40px;
`;

export const ShowProduct = styled.div`
     display: flex;
     flex-direction: column;
`;

export const EachProduct = styled.div`
     display: flex;
     flex-direction: column;
`;

export const ProductStore = styled.div`
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: flex-start;
     
`;

export const ProductName = styled.div`
     font-size: ${SIZES.h4};
     color: ${COLORS.blue};
     margin-bottom: 25px;
     font-weight: 600;
`;

export const ProductItems = styled(Link)`
     max-width:288px;
     margin-right: 29px;
     margin-bottom: 50px;
    
     @media screen and (max-width: 1489px){
         margin-right: 25px;
     }

     @media screen and (max-width: 1470px){
        margin-right:10px;
    }

    @media screen and (max-width: 1410px){
        max-width: 240px;
        margin-right:45px;
    }
    @media screen and (max-width: 1357px){
        max-width: 300px;
        margin-right: 30px;
        
    }

    @media screen and (max-width: 1220px){
        max-width: 288px;
        margin-right:-5px;
        
    }
    @media screen and (max-width: 1065px){
        max-width: 200px;
        margin-right:80px;
        
    }
    @media screen and (max-width: 1057px){
        max-width: 200px;
        margin-right:40px;
        
    }

    @media screen and (max-width: 937px){
        max-width: 200px;
        margin-right:20px;
        
    }

    @media screen and (max-width: 878px){
        max-width: 200px;
        margin-right:10px;
        
    }
    @media screen and (max-width: 846px){
        max-width: 240px;
        margin-right:40px;
        
    }

    @media screen and (max-width: 777px){
        margin-right:20px;
        
    }

    @media screen and (max-width: 737px){
        max-width: 200px;
        margin-right:20px;
        
    }

    @media screen and (max-width: 657px){
        max-width: 400px;
        margin-right:20px;
        
    }

    @media screen and (max-width: 557px){
        max-width: 500px;
        margin-right: 0;
        
    }

    @media screen and (max-width: 400px){
        max-width: 300px;
        margin-right: 0;
        
    }

    
`;

export const ProCard = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
`;

export const ProductImage = styled.div`
     width: 288px;
     height: 212px; 
     @media screen and (max-width: 1065px){
        width: 200px;
        
    } 
    @media screen and (max-width: 846px){
        width: 240px;
        
        
    }

    @media screen and (max-width: 737px){
        max-width: 200px;
        
    }

    @media screen and (max-width: 657px){
        width: 400px;
        
        
    }

    @media screen and (max-width: 557px){
        max-width: 350px;    
    }

    @media screen and (max-width: 400px){
        max-width: 300px;
        
    }
    
`;

export const ProImg = styled.img`
     width: 100%;
     height: 100%;
     @media screen and (max-width: 557px){
        object-fit: cover;
    }
    
`;

export const ItemName = styled.div`
     font-size: ${SIZES.h5};
     color: ${COLORS.blue};
     font-weight: 400;
     margin-left: .5rem;
     @media screen and (max-width: 1220px){
        width: 200px;
        
    }
    @media screen and (max-width: 557px){
        
        
    }
`;

export const ManufactName = styled.div`
     
     font-size: 14px;
     @media screen and (max-width: 557px){
        margin-top: 0px;
        margin-bottom: 20px;
        
    }

`;
export const SpanText = styled.span`
     color: #219653;
`;




