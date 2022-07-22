import styled from "styled-components"

export const BrandFot = styled.div `
    text-align:center;
    margin 4rem 2rem;


    @media screen and (max-width: 500px){
      margin 4rem 2rem;
    }


    .header_name{
      color: #030762;
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      // display:block;
      margin-bottom: 40px;

      @media screen and (max-width: 452px){
        font-size: 24px;
      }
    }

    .images {
      margin-top: 20px;
      @media screen and (max-width: 452px){
        display: flex;
        flex-direction: column;
      }
    }
            
    img{
      height: auto;
      margin: auto;

    }
    
   

` 