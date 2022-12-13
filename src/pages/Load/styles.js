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

export const Loader = styled.div`
   animation: is-rotating 1s infinite;
   border: 2px solid white;
   border-radius: 50%;
   border-top-color: #2E0C94;
   height: 50px;
   width: 50px;

   @keyframes is-rotating {
      to {
         transform: rotate(1turn);
      }
   };
`;
