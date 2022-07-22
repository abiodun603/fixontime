import styled from "styled-components"

export const ButtonAction = styled.div `
    display: flex;
    position: absolute;
    top: -40px;
    right: 0;
`

export const ButtonDelete = styled.button `
    height: 35px;
    width: 140px;
    background-color: #F0F0F0;
    border-radius: 6px;
    color: var(--kGray);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .5rem;
    span{
        margin-left: .5rem;
    }
`

export const ButtonDownload = styled.button `
    height: 35px;
    width: 140px;
    background-color: #F0F0F0;
    border-radius: 6px;
    color: var(--kGray);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        margin-left: .5rem;
    }
`