import styled from "styled-components"
import glass from "../../assets/image/contact/glass.png"

export const ContactLand = styled.div `
    height: 200px;
    background-image: url(${glass});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    h1{
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        color: #030762
    }

    p{
        color: #505050;
        font-size: 16px
    }

    @media screen and (max-width: 468px){
        h1{
            font-size: 36px;
        }
       P{
           text-align: center;
       }
     }
`


export const BlogWrapper = styled.div `
    position: relative;
    width: 80%;
    height: 100vh;
    display: flex;
    margin: 5rem auto 0 auto;

    @media screen and (max-width: 468px){
        flex-direction: column;
        height: 100%;
        width: 100%;
        margin: unset;
    }
`

export const BlogBanner = styled.div `
    position: relative;
    width: 50%;
    height: 100%;
    background-color: #030762;
    padding-left: 2.5rem;
    padding-top: 3rem;
    

    p{
        font-weight: 700;
        font-size:24px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 468px){
        width: 100%;
        padding-bottom: 2rem

    }
`

export const Contact = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    p{
        font-size: 16px;
        font-weight: 400 !important;
        color: rgba(255,255,255, 0.7);
        margin-left: 5px !important;
        margin-top: 5px !important;
    }

`

export const ContactDesc = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;

    p{
        color: #FFFFFF;
        font-weight: 400;
        font-size: 16px;
        margin-top: 8px;
    }

    
    span{
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const FormWrapper = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    width: 50%;
    height: 100%;
    background: #F9F9F9;

    @media screen and (max-width: 468px){
        width: 100%;
        padding-top: 2rem
        padding-bottom: 2rem
    }
`

export const BlogForm = styled.div `
    width:80%;

    h2{
        text-align: left !important;
        margin-bottom: 2rem !important;
        color: #030762;
        font-size: 24px;
        font-weight: 700;
    }
`

export const FromBx = styled.div `
    width: 100%;
    margin-bottom: .5rem;


    span{
        line-height: 36px;
        font-size: 16px !important;
        display: inline-block; 
        color: #505050;
        font-weight: 400;
    }

    label{
        display: flex;
    }
`
export const Input = styled.input.attrs(props => ({
    type: 'text',

})) `
    width: 100%;
    border-radius: 6px;
    padding: 5px 20px;
    background: #FFFFFF;
    border: 0.5px solid #D0D0D0;
    outline: none;
    font-weight: 400;
    letter-spacing: 1px;
    /* background: transparent; */
`

export const Textarea = styled.textarea `
    width: 100%;
    background: #FFFFFF;
    border: 0.5px solid #D0D0D0;
`


export const InputCheck = styled.input.attrs(props => ({
    type: "checkbox"
}))` `

export const FromBxRem = styled.div `
    margin-top: .5rem;
`
export const Button = styled.button `
    width: 100%;
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


// Work Styling

export const WorkWrapper = styled.div `
    background: #030762;
    width: 85%;
    height: 300px;
    margin: 2.5rem auto;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;


    @media screen and (max-width: 468px){
        height: 100%;
        margin: unset;
        width: 100%;
    }
`
export const WorkContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    img{
        width: 200px;
    }

    @media screen and (max-width: 468px){
       flex-direction: column;
       align-items: center;
       padding-top: 2rem;
       padding-bottom: 2rem;
       justify-content: unset;
    }
`

export const WorkTitle = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: .8rem;

    h2{
        color: #FFFFFF;
        font-weight: 600;
        font-size: 36px;
    }

    p{
        color: #FD0014;
        font-size: 14px;
    }

    @media screen and (max-width: 468px){
        margin-top: 1.5rem;

        h2{
            text-align: center
        }
        
        p{
            text-align: center;
        }
    }
`

export const WorkHourContainer = styled.div `
       margin-top: .8rem;
`

export const WorkHour = styled.div `
    /* display: flex;
    flex-direction: column; */

    span{
        color: #FFFFFF;
        font-size: 16px;
    }

    p{
        color: #FFFFFF;
        font-size: 20px;
    }

    @media screen and (max-width: 468px){
        margin-top: 1rem;
    }
`

// Question
export const QuestionWrapper = styled.div `

    @media screen and (max-width: 468px){
        /* h2 */
    }
`
export const Faq = styled.div `
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #D0D0D0;
    width: 500px;

    @media screen and (max-width: 468px){
        flex-direction: column;
        width: 100vw;
        padding: 1rem;
    }
`

export const Wrap = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    outline:none!important;
    border:none;
`

export const Question = styled.div `
    font-size: 18px;
    margin-right: 20px;
    color: #030762;
    font-weight: 700;
`

export const Answer = styled.div `
    font-size: 16px;
    font-weight: 400;
    width: 95%;
    display: block;
    color: #000000;
`