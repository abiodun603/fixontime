import styled from "styled-components"

export const FormWrapper = styled.form `

`

export const CardWrapper =  styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-top: 2rem;
`
export const Card = styled.div `
    width: 55%;
    align-self: center;
`
export const CardHeader = styled.div   `
    height: 60px;
    background:#D0D0D0;
    display:flex;
    align-items: center;
    justify-content: center;
    P{
        color: var(--kBlue);
        font-size: 18px;
        font-weight: 400;
    }
`
export const CardBody= styled.div   `
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 2rem 2rem 3rem 2rem;
    background: #f9f9f9;
`

export const CardForm = styled.div `

`