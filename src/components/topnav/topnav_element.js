import styled from "styled-components"

export const TopNavWrapper = styled.div   `
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.05);

 
`


export const TopNavRight = styled.div `
    display: flex;
    align-items: center;
`

export const TopNavRightItem = styled.div `
  margin-left: 30px;

  p{
    color: var(---txt-color2) !important;
    margin-right: 3rem !important;
  }
`