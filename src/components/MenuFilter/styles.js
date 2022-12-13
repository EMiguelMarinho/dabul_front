import styled from 'styled-components';

export const Container_Filter = styled.div`
   position: absolute;
   left: 100px;
   top: 125px;

   width: 250px;
   overflow-y: auto;
   padding: 10px;
   border-radius: 7px;
   box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
   background-color: white;
   display: flex;
   flex-direction: column;
`;

export const Container_Input = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 6px 0;

   label{
      color: #2E0C94;
      font-weight: 400;
      margin-left: 5px;
      margin-bottom: 4px;
   }
`;

export const Input_Div = styled.div`
   display: flex;
`;

export const Input = styled.div`
   width: ${({ width }) => width ? width : 'calc(100%/2 - 10px)'};
   display: flex;
   flex-direction: column;
   margin: 0 5px;

   p{
      display: block;
      color: #2E0C94;
   }

   input{
      width: 100%;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #2E0C94;
      text-align: center;
      outline: none;
   }

   input[type=number]::-webkit-inner-spin-button{
    -webkit-appearance: none;
   }

   input[type=text]{
    text-align: start;
   }
`;

export const Btn_Filter = styled.button`
   width: 96%;
   border-radius: 5px;
   background-color: #2E0C94;
   height: 35px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 5px auto;
   border: none;

   color: white;
   font-size: 11px;
   text-transform: uppercase;
   letter-spacing: 0.12em;
`;
