import styled from 'styled-components';

export const Container = styled.div`
   background: white;
   border-radius: 10px;
   width: 100%;
   height: 89%;
   margin-top: 10px;


   display: flex;
   flex-direction: column;
`;

export const ContainerRegisterAndRegisterMulti = styled.div`
   width: 100%;
   height: 85%;


   display: flex;
   justify-content: space-between;
`;

export const ContainerInput = styled.form`
   width: 47%;
   height: 50%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;

export const SpaceInput = styled.div`
   width: 1px;
   background-color: #210478;
`;

export const Input = styled.div`
   width: calc(100%/2 - 20px);
   display: flex;
   flex-direction: column;
   margin: 10px 0;

   label{
      color: #2E0C94;
   }

   p{
      color: red;
      margin-top: 3px;
      font-size: 14px;
   }
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

export const ContainerBtn = styled.div`
   width: 25%;
   margin: 20px auto 20px auto;
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
