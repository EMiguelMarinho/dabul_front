import styled from 'styled-components';

import logo_bg from '../../assets/images/png/logo_background.png';

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   z-index: 0;
`;

export const Logo_background = styled.div`
   height: 12%;
   width: 100%;
   margin-bottom: 55px;

   background: url(${logo_bg});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
`;

export const Container_Children = styled.div`
   height: 70%;
   width: 100%;
   z-index: 0;
   padding: 30px 120px;

   position: absolute;
   top: 65px;
`;
