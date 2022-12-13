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
      margin-top: 40px;

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
   width: calc(100%/2 - 30px);
   display: inline-block;
   margin: 15px;
`;

export const ContainerInput = styled.div`
   display: flex;
   flex-direction: column;

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

export const SelectCamp = styled.select`
   padding: 7px 5px;
   border-radius: 5px;
   color: #2E0C94;
   cursor: pointer;
   border: ${({ color }) => `1px solid ${color}`};
`;

export const ContainerBtn = styled.div`
   width: 100%;
   margin: 40px 0 50px 0;
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

export const BtnLoad = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
