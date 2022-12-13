import styled from 'styled-components';

export const SubMenu = styled.ul`
   list-style: none;
   background-color: white;
   box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
   border-radius: 4px;
   padding: 5px 7px;
   margin-top: 20px;
   width: 200px;
`;

export const List = styled.li`
   border-radius: 3px;
   padding: 3px;

   a{
      color: #210478;
   }

   &:hover{
      background-color: #CCD0EF;
   }
`;

export const Space = styled.div`
   width: 100%;
   height: 1px;
   background-color: #CCD0EF;
   margin: 4px 0;
`;
