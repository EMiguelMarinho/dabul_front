import styled from 'styled-components'

export const Container = styled.div`
   position: absolute;
   height: 100vh;
   width: 100vw;
   top: -65px;
   left: 0;
   backdrop-filter: blur(2px);
   background-color: rgba(0, 0, 0, 0.30);
   z-index: 2;

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const ContainerForm = styled.div`
   width: 700px;
   background-color: white;
   border-radius: 10px;
   padding: 10px;

   .form{
      width: 100%;
      padding: 0 50px;
      margin: 20px 0;

      display: flex;
      flex-wrap: wrap;
   }
`;

export const HeaderForm = styled.div`
   height: 20%;
   width: 100%;
   display: flex;
   justify-content: space-between;
   font-weight: 400;

`;

export const Title = styled.h1`
   text-align: center;
   width: 95%;
   color: #2E0C94;
   font-weight: 400;
   margin-top: 20px;
`;

export const ContainerLogo = styled.div`
   display: flex;
   align-items: flex-start;
   width: 5%;

   svg{
      width: 100%;
      cursor: pointer;
   }
`;

export const Input = styled.div`
   width: 100%;
   display: flex;
   align-items: end;
   margin: 15px;
   flex-direction: column;

   button{
      width: 100px;
      margin-left: 5px;
      background-color: #2E0C94;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      height: 33px;
   }
`;

export const TitleInput = styled.h1`
   width: 100%;
   color: #2E0C94;
   font-weight: 400;
   font-size: 1.1em;
   padding: 0 0 10px 10px;
`;

export const ContainerInput = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   margin-left: 10px;
   justify-content: center;
   align-items: center;

   label{
      color: #2E0C94;
      margin-right: 5px;
   }

   select{
      padding: 7px 5px;
      border-radius: 5px;
      color: #2E0C94;
      cursor: pointer;
      border: 1px solid black;
   }

   input{
      padding: 7px 5px;
      border-radius: 5px;
      color: #2E0C94;
      border: 1px solid black;
      width: 65%;
   }
`;

export const ContainerBtn = styled.div`
   width: 100%;
   margin: 40px 0 20px 0;
`;

export const BtnRegister = styled.button`
   width: 96%;
   border-radius: 8px;
   background-color: #2E0C94;
   height: 42px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: auto;
   border: none;

   color: white;
   font-size: 11px;
   text-transform: uppercase;
   letter-spacing: 0.12em;
`;





export const ContainerContent = styled.table`
   width: 100%;
   height: 30px;
   border-collapse: collapse;
`;


export const LineTitles = styled.tr`
   background-color: #210478;
`;













export const ContainerDivDesc = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
`;

export const Table = styled.table`
   width: 100%;
   max-height: 100%;
   background: #fff;
   border-collapse: collapse;
`;

export const ContainerDesc = styled.tbody`
   tr{
      height: 40px;
   }

   tr:nth-child(even) {
      background: #F6F7FF;
   }

   tr:nth-child(odd) {
      background: #FFF
   }
`;

export const ColumnBankDesc = styled.td`
   color: black;
   font-size: 15px;
   padding: 10px 10px;
   font-weight: 400;
   text-align: start;
   border-right: 1px solid #210478;
   width: 40%;
   height: 40px;
`;

export const ColumnValueDesc = styled(ColumnBankDesc)`
   width: 60%;
   border-right: none;
`;

