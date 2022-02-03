import styled from "styled-components"
import image from "../../assets/image/headerBanner.png"

export const HeaderContainer = styled.div `
    height: 100px;
    background-image: url(${image});
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;

    p{
        font-weight: var(--fw-semi);
        font-size: 24px;
        color: var(--kBlue);
    }
`

export const HeaderButton = styled.button `
    padding: .8rem 1rem;
    background : var(--kBlue);
    border-radius: 10px;
    color: var(--main-bg);
    display: flex;
    /* align-items: center; */
    justify-content: center;

    span{
        margin-left: 1rem
    }
`