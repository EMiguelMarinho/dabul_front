import styled from 'styled-components';

import logo from '../../assets/images/png/logo_white.png';

export const Container = styled.div`
   width: 100%;
   height: 65px;
   background-color: #210478;
   z-index: 1;

   display: flex;
   justify-content: space-around;
`;

export const Logo = styled.div`
   height: 100%;
   width: 150px;

   background: url(${logo});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
`;

export const Container_Navigation = styled.nav`
`;

export const Nav = styled.ul`
   list-style: none;
   height: 100%;
   width: 100%;
   padding-top: 25px;

   display: flex;
   justify-content: space-between;
`;

export const Home = styled.li`
   margin: 0 15px;
   width: 50px;
   color: white;
   font-size: 15px;
   text-align: center;

   display: flex;
   flex-direction: column;

   span{
      display: none;
      margin-top: -2px;
      width: 100%;
      height: 0.1px;
      background-color: white;
   }

   a{
      color: white;
   }
`;

export const LinkHome = styled.div`
   cursor: pointer;

   &:hover{
      span{
         display: block;
      }
   }
`;

export const ReceiveBills = styled(Home)`
   width: 140px;
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 3;

   a{
      color: #210478;
   }

   .menu{
      display: none;
      margin: -10px;
   }

   &:hover{
      .menu{
         display: block;
      }
   }
`;

export const LogoTriagle = styled.div`
   margin-left: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const PaysBills = styled(ReceiveBills)``;

export const General = styled(Home)`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80px;
   z-index: 3;

   a{
      color: #210478;
   }

   .menu{
      display: none;
   }

   &:hover{
      .menu{
         display: block;
      }
   }
`;

export const Others = styled(General)``;

export const LoginOut = styled.li`
   display: flex;
   justify-content: flex-start;
   margin-top: -7px;

   div{
      height: 60%;
      color: white;
      padding: 4px 15px;
      display: flex;
      align-items: flex-start;
      border: 1px solid white;
      border-radius: 30px;
      cursor: pointer;
   }
`;

export const TitleList = styled.div`
   color: white;
   display: flex;
   flex-direction: row;
`;
