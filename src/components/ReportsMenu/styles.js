import styled from 'styled-components';

export const Container = styled.div`
   width: 160px;
   height: 160px;
   border-radius: 10px;
   margin: 5px 10px;
   box-shadow: 0px 1px 60px rgba(33, 4, 120, 0.08);
   cursor: pointer;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const Icon = styled.div`
   height: 72%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const SubTitle = styled.div`
   height: 28%;
   padding: 0 10px;
   text-align: center;
   color: black;
`;
