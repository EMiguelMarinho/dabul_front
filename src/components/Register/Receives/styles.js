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
   height: 550px;
   background-color: white;
   border-radius: 10px;
   padding: 10px;
   overflow: auto;

   .form{
      width: 100%;
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
   align-items: center;
   justify-content: right;
   margin: 9px 15px;

   h1{
      color: #2E0C94;
      font-weight: 400;
      text-align: end;
      font-size: 16px;
      width: 20%;
   }

   @media(min-height: 700px){
      margin: 13px 15px;
   }
`;

export const DivInput = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: left;
   margin: auto;
   width: 80%;

   label{
      color: #2E0C94;
   }

   p{
      color: red;
      margin-top: 3px;
      font-size: 14px;
   }
`;

export const TextArea = styled(Input)`
   width: 100%;
`;

export const ContainerInput = styled.div`
   display: flex;
   flex-direction: column;
   width: ${({ width }) => width ? width : 'calc(100%/2 - 20px)'};
   margin: 0 10px;
`;

export const ContainerSelect = styled(ContainerInput)`
   margin: auto;
   width: 86%;
   `;

export const InputCamp = styled.input`
   padding: 7px 5px;
   border-radius: 5px;
   color: #2E0C94;
   border: ${({ color }) => `1px solid ${color}`};

   &:focus{
      outline: none;
   }
`;

export const SelectCamp = styled.select`
   padding: 7px 5px;
   border-radius: 5px;
   color: #2E0C94;
   cursor: pointer;
   border: 1px solid black;
   text-align: center;
   font-size: 16px;

   &:focus{
      outline: none;
   }
`;

export const TextAreaCamp = styled.textarea`
   padding: 7px 5px;
   border-radius: 5px;
   color: black;
   border: 1px solid black;
   resize: none;
   height: 80px;
   outline: none;
   border: ${({ color }) => `1px solid ${color}`};
`;

export const ContainerBtn = styled.div`
   width: 100%;
   margin: 30px 0 30px 0;

   display: flex;
   flex-direction: row;
`;

export const BtnRegister = styled.button`
   width: 45%;
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

export const BtnLoad = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;