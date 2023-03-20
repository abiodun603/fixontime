import styled from "styled-components"
import pole from "../../assets/image/about/pole.svg"

export const TransWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 6rem;

    @media screen and (max-width: 468px){
        flex-direction : column;
        padding: 2rem 2rem;
    }
`

export const TransContainer = styled.div `
    padding-right: 4rem;

    h2{
        color: #030762;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 1rem  !important;
    }

    p{
        text-align: justify;
        color: #505050;
        font-size: 16px;
        margin-bottom: 1rem  !important;
    }

    @media screen and (max-width: 468px){
        h2{
            font-size: 24px;
        }
    }
    

`

export const TransImage = styled.div   `
    img{
        width: 400px;
    }

    @media screen and (max-width: 468px){
        img{
            width: 300px;
        }
    }
`

// Core Value
export const CoreWrapper = styled.div `
    margin: 4rem 6rem;
    display: flex;
    flex-direction: column;
    align-items center;

    h2{
        text-align: center;
        color: #030762;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 2.5rem !important;
    }

    @media screen and (max-width: 468px){
        h2{
            margin-bottom: unset !important;
        }
    }
`
export const CoreContainer = styled.div `
    display: flex;
    
    @media screen and (max-width: 468px){
        flex-direction: column;
    }
`

export const CoreDescCon = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 1rem;
    

    img{
        width: 40px;
    }

    @media screen and (max-width: 468px){
        margin-top: 2rem;
    }
`

export const ImageContainer = styled.div `
    height: 50px;
`

export const CoreDesc = styled.div `
    display: flex;
    flex-direction: column;

    span{
        color: #FD0014;
        text-align: center !important;
        font-size: 18px;
        margin-top: 1rem;
        margin-bottom: .4rem;
    }

    p{
        color: #505050;
        text-align: center;
        font-size: 14px;
    }

`
// BLOG
export const DescWrapper = styled.div `
    position: relative;
    width: 100%;
    height: 80vh;
    display: flex;

    @media screen and (max-width: 468px){
        flex-direction: column;
        height: 100%;
    }
`

export const DescBanner = styled.div `
    flex: 1;
    /* background: red; */
    background-image: url(${pole});
    background-position: center center;
    object-fit: contain;

    @media screen and (max-width: 468px){
        /* f */
    }

`

export const DescView = styled.div `
    background-color: #030762;
    padding-left: 2.5rem;
    padding-right: 5rem;
    padding-top: 3rem;
    flex: 1;

    h2{
        font-weight: 600;
        font-size: 36px;
        color #FFFFFF;
        line-height: 48px;
        margin-bottom: 1.2rem !important;
    }

    p{
        color: #FFFFFF;
        font-size: 16px;
        margin-bottom: 1rem !important;
    }

    @media screen and (max-width: 468px){
        padding-left: 2.5rem;
        padding-right: 1rem;
    }
`
// Accordion
export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 6rem;


    h3{
        color: #030762;
        font-size: 36px;
        font-weight: 600;
        text-align: center;
    }

    span{
        color: #FD0014;
    }

    @media screen and (max-width: 468px){
        margin: 4rem 2rem;

        h3{
            font-size: 24px; 
            margin-bottom: 1rem !important;
        }
    }
`

// Sponsors style
export const Brand = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 6rem;


    h3{
        color: #030762;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    img{
        /* width: 100px; */
        margin-right: 2rem !important;
    }

    div{
        margin-top:2.5rem;
        width: 70%;
    }

` 