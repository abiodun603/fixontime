import styled from 'styled-components'
import authBanner from "../../assets/image/auth/fot-bg.png"
export const LoginWrapper = styled.div `
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
`

export const LoginBanner = styled.div `
    position: relative;
    width: 50%;
    height: 100%;
    background-image: url(${authBanner});
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: #030762; */

    img{
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
        /* height: 100vh; */
        margin: 2rem;
        z-index: -1
    }

    h1{
        color: var(--main-bg);
        font-weight: var(--fw-semi);
        font-size: 48px;
    }

    span {
        color: var(--main-bg);
        font-weight: var(--fw-thin);
        font-size: var(--body1)
    }

    @media screen and (max-width: 468px){
      display : none;
    }
`

export const BannerLogo = styled.img `
    z-index: 999;
    width: 50px;
    /* background: red; */
    /* height: 80px; */
`

export const FormWrapper = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    width: 50%;
    height: 100%;
    background: #E5E5E5;

    @media screen and (max-width: 468px){
      width: 100%;
    }
`

export const LoginForm = styled.div `
    width:69%;
    border-radius: 5px;
    background: #FFFFFF;
    padding: 2rem;

    h2{
        text-align: left !important;
        margin-bottom: var(--mb-2);
        font-weight: 700;
        color: #505050;
    }

    p{
        line-height: 24px;
        /* font-size: 1rem; */
        display: inline-block; 
        letter-spacing: 1px;
        font-size: 14px;
        font-weight: normal;
        color: #505050;
        margin-bottom: .5rem
    }


    @media screen and (max-width: 468px){
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
`

export const FromBx = styled.div `
    width: 100%;
    margin-bottom: .5rem;
    display: flex;
    flex-direction: column;



    span{
        line-height: 36px;
        /* font-size: 1rem; */
        display: inline-block; 
        letter-spacing: 1px;
        font-size: 14px;
        font-weight: normal;
        color: #505050
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
    padding: 10px 20px;
    background: var(--kLightGrey);
    border: 2px solid #D0D0D0;
    outline: none;
    font-weight: 400;
    letter-spacing: 1px;
    background: transparent;
`

export const InputPassword = styled.input.attrs(props => ({
  type: 'password',

})) `
  width: 100%;
  border-radius: 6px;
  padding: 10px 20px;
  background: var(--kLightGrey);
  border: 2px solid #D0D0D0;
  outline: none;
  font-weight: 400;
  letter-spacing: 1px;
  background: transparent;
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
    padding: 15px 20px;
    color: var(--kWhite);
    cursor: pointer;
    border-radius: 10px; 
    background: var(--kBlue);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 1.5rem;
`