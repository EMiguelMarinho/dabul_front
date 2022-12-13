import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 60%;
   padding-top: 30px;

   display: flex;
   flex-direction: column;
   justify-content: start;
`;

export const Input = styled.input`
   width: 100%;
   border-radius: 8px;
   border: 1px solid #000000;
   padding: 12px 8px;
   height: 42px;
   margin-bottom: 2px;
   font-size: 14px;
   border: ${({ color }) => `1px solid ${color}`};

   &:focus{
      outline: none;
   }
`;

export const P = styled.p`
   color: red;
   margin-top: 3px;
   font-size: 14px;
   margin-bottom: 15px;
`;

export const BtnLogin = styled.button`
   width: 100%;
   border-radius: 8px;
   border: 1px solid #000000;
   padding: 12px 8px;
   background-color: #2E0C94;
   margin-top: 20px;
   height: 42px;
   cursor: pointer;

   color: white;
   font-size: 11px;
   text-transform: uppercase;
   letter-spacing: 0.12em;

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Loader = styled.div`
   animation: is-rotating 1s infinite;
   border: 2px solid white;
   border-radius: 50%;
   border-top-color: #2E0C94;
   height: ${ ({ height }) => height ? height : "20px" };
   width: ${({ width }) => width ? width : "20px"};

   @keyframes is-rotating {
      to {
         transform: rotate(1turn);
      }
   };
`;

export const LinkPassword = styled.p`
   &:hover{
      text-decoration: underline;
   }
`;
