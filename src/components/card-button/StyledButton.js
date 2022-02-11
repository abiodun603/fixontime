import styled from "styled-components"

export const ButtonContainer = styled.div   `
    display: flex;
    width: 100%;
    justify-content: center;
`

export const ButtonCancel = styled.button   `
    display: flex;
    align-items:center;
    justify-content: center;
    height: 55px;
    width: 174px;
    background: red;
    color: var(--kWhite);
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;
    margin-right: 10px;
    background: var(--kGray);
`

export const ButtonSubmit = styled.button   `
    display: flex;
    display: flex;
    align-items:center;
    justify-content: center;
    height: 55px;
    width: 174px;
    background: var(--kBlue);
    color: var(--kWhite);
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;
`
