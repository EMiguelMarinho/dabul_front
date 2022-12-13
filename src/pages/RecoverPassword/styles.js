import styled from 'styled-components';

import imgbg from '../../assets/images/png/img_background.png';
import logoTitle from '../../assets/images/png/logo_purple.png';

export const Container = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.458333) 100%);
   backdrop-filter: blur(10px);
   z-index: 1;

   display: flex;
   align-items: center;
   flex-direction: column;
`;

export const ImgBackground_Container = styled.div`
   position: absolute;
   width: 100vw;
   height: 100vh;
   background: url(${imgbg});
   z-index: 1;
`;

export const LogoTitle = styled.div`
   width: 100%;
   height: 8.98%;
   margin-top: 100px;

   background: url(${logoTitle});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
`;

export const Container_Login = styled.div`
   width: 23%;
   height: 50%;
   margin-top: 80px;
   z-index: 2;

   display: flex;
   flex-direction: column;

   h1{
      width: 100%;
      text-align: center;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      color: #000000;
   }
`;
