import styled from "styled-components"

export const SidebarWrapper = styled.div `
   

    .sidebar{
      position: fixed;
      left: -100%;
      top: 0; 
      min-width: var(--sidebar-width);
      height: 100vh;
      background: var(--kBlue);
      z-index: 100;

      &.active{
        left: 0;
      }
    }
`

export const SidebarLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 22px; */
    height: 80px;
    margin-bottom: 2rem;


    h2{
        cursor: pointer;
        color: var(--kBlue);
        font-size: 20px;
    }
`

export const SideBarItemWrapper = styled.div `
    padding: 0px 0px;
    
`
export const SideBarItemInner = styled.div `
    padding: 12px 25px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: color .3s ease 0s;

    &:hover{
        color: var(--KWhite);
        opacity: 0.4;
    }

    i{
        margin-right: 10px;
        font-size: 1.5rem;
    }

    span{
        text-transform: capitalize;
        color: #FFFFFF;
        margin-top: -7px;
    }

    &.active{
        background: #232783;
        color : #FFF;
        border-left: 4px solid red;
        opacity: 1 !important;
    }

    &.noActive{
        color : #FFFFFF;
    }
`

export const SideBarIcon = styled.div `
    font-size: 1.2rem;
    margin-right: 0.5rem;
    color: #FFFFFF;
`
 