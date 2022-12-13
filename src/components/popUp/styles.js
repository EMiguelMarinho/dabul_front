import styled from 'styled-components';

export const Container = styled.div`
   padding: 15px;
   background-color: ${({ success }) => success ? "#95B963" : "#E3242B"};
   border-radius: 10px;
   color: white;

   position: absolute;
   right: 10px;
   top: 80px;
   text-align: end;

   div{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
   }
`;

export const Icon = styled.div`
   display: flex;
   height: 100%;
   justify-content: center;
   align-items: center;
   margin-left: 15px;

   svg{
      cursor: pointer;
   }
`
