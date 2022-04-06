import styled from "styled-components"

export const BrandFot = styled.div `
    
    // margin: 4rem 1rem;
    text-align:center;

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

    div{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(120px, 5fr) );
        grid-column-gap: 70px;
        grid-row-gap: 20px;
        margin:0 200px;
        @media screen and (max-width: 1303px){
            margin: 0 150px;
        }

        @media screen and (max-width: 1204px){
            margin: 0 90px;
        }

        @media screen and (max-width: 1084px){
            margin: 0 30px;
        }

        @media screen and (max-width: 998px){
            margin: 0 5px;
        }
        
        @media screen and (max-width: 540px){
            grid-template-columns: repeat( auto-fit, minmax(90px, 5fr) );
            grid-column-gap: 70px;
            margin: 0 5px;
        }
        
        
    }
    
    img{
      
        height: auto;
        margin: auto;
       
    
    }
    
   

` 