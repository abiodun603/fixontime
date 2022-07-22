import styled from "styled-components"

export const DashboardWrapper =  styled.div `
 
`

export const DashboardCard = styled.div `
  display: flex;
  gap:10px;

  .card__container{
    width: 260px;
    height: 129px;
    border-radius: 6px;
    padding: 20px;
  }

  .blue{
    background: rgba(3,7,98,.3);
  }

  .green{
    background-color: rgba(33,150,83,.3);
  }

  .orange {
    background-color: rgba(242,153,74,.3);
  }

  .red {
    background-color: rgba(253,0,20,.3);
  }

  @media screen and (max-width: 468px) {
    flex-direction:column;
  }
`

export const TableContainer = styled.div `
  height: 100%; 
  width: 100%;
  margin-top: 60px;

  .label__container {
    display: flex;
    align-items: center;
    gap: 5px;
    .badge{
      height: 18px;
      width: 24px;
      background: #FD0014;
      border-radius: 8.5px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
    }
  }
`