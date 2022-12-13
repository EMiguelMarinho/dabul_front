import styled from 'styled-components';

export const ContainerInput = styled.div`
   color: white;
   margin: 10px 0 10px 0;
   height: 20px;
   cursor: default;

   div{
      display: none;
      z-index: 1;
   }

   &:hover{
      div{
         display: flex;
      }
   }
`;
