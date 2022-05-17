import styled from "styled-components"

export const LayoutWrapper = styled.div `
    color: var(--txt-color); 
`
export const LayoutContent = styled.div `
    padding-left: var(--sidebar-width);
    background: var(--kWhite);
    min-height: 100vh;

    @media screen and (max-width: 1065px){
      padding-left: unset !important;
    }
`

export const LayoutContentMain = styled.div `
    padding: 30px;
    // background: #FFFFFF;
    /* height: 80vh; */
`    