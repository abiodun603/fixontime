import styled from "styled-components"
import { COLORS } from "../../assets/theme"

export const CommentContainer = styled.div `
  height: 100%;
  width: 100%;
  background: ${COLORS.lightgray2};
  padding: 25px;
  border-radius: 6px;
  margin-top: 1rem;

  div{
    display: flex;
    align-items: flex-end;
    margin-bottom: 2px;

    h2{
      font-size: 18px;
      font-weight: 700;
      
    }
    span{
      font-size: 12px;
      margin-left: 10px;
    }
    
  }
  
  p{
    color: ${COLORS.lightgray};
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
  }
`