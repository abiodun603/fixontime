import styled from "styled-components"
import { COLORS } from "../../assets/theme"

export const AdminWrappper = styled.div `

  .admin__card {
    display: flex;
    gap:10px;
    
    .card__container{
      width: 260px;
      height: 129px;
      border-radius: 6px;
      padding: 20px;
    } 

    .green{
      background-color: rgba(33,150,83,.3);
    }
  }

  .table__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p{
      color: #505050;
      font-size: 18px;
      font-weight: 700;
    }

    button {
      width: 177px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      gap: 5px;
      border-radius: 6px;
      background: ${COLORS.blue}
    }
  }
`