import styled from 'styled-components';

import { ContainerContent, ColumnTitle } from '../Clients/styles';

export const ContainerSearch = styled.div`
   display: flex;
   height: 106px;
`;

export const ContainerContentSearch = styled.form`
   display: flex;
   height: 106px;
`;

export const LineTitles = styled.tr`
   display: flex;
   width: 100%;
`;

export const FirstSearch = styled.td`
   background-color: #210478;
   border-top-left-radius: 10px;
   display: flex;
   justify-content: start;
   width: 100%;
`;

export const SecondSearch = styled(FirstSearch)`
   border-top-left-radius: 0;
`;

export const FirstContainerSearch = styled.div`
   width: 35%;
   background-color: #210478;
   padding: 12px;
   border-top-left-radius: 10px;

   display: flex;
   align-items: center;

   h1{
      font-size: 15px;
      color: white;
      font-weight: 400;
      margin-right: 5px;
      width: 200px;
      text-align: end;
   }
`;

export const ContainerInputSearch = styled.div`
   display: flex;

   label{
      color: white;
      margin: 5px;
   }
`;

export const InputCamp = styled.input`
      background-color: #210478;
      border: 1px solid white;
      border-radius: 5px;
      padding: 5px;
      width: 80%;
      color: white;
`;

export const SearchEmission = styled(FirstContainerSearch)`
   width: 30%;

   label{
      color: white;
      margin: 5px;
      width: 40%;
      text-align: end;
   }

   input{
      background-color: #210478;
      border: 1px solid white;
      border-radius: 5px;
      padding: 5px;
      width: 60%;
      color: white;
   }
`;

export const SearchClient = styled(SearchEmission)`
   width: 30%;

   label{
      /* width: 23%; */
   }

   input{
      /* width: 77%; */
   }
`;
export const SearchNF = styled(SearchEmission)`
   width: 25%;

   label{
      width: 11%;
   }

   input{
      width: 89%;
   }
`;

export const ContainerBtnSearch = styled.div`
   background-color: #210478;
   border-top-right-radius: 10px;
   height: 100%;
   display: flex;
   align-items: center;
   padding-right: 12px;
`;

export const BtnSearch = styled.button`
   width: 100%;
   color: #210478;
   padding: 5px 7px;
   border-radius: 5px;
   border: none;
   cursor: pointer;
`;










export const ContainerDivDesc = styled.div`
   height: 60%;
   overflow: auto;
   ::-webkit-scrollbar{
      display: none;
   }
   border: 1px solid #2E0C94;
   background-color: white;
`;

export const ContainerRegister = styled.div`
   width: 100%;
   height: 8%;
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;
   background-color: #2E0C94;

   display: flex;
   justify-content: flex-end;
   align-items: center;
`;

export const ColumnProvider = styled(ColumnTitle)`
   background-color: #CDD1F4;
`;
export const ColumnFolder = styled(ColumnProvider)``;
export const ColumnClientMain = styled(ColumnFolder)``;
export const ColumnClient = styled(ColumnFolder)``;
export const ColumnValue = styled(ColumnFolder)``;
export const ColumnDueDate = styled(ColumnFolder)``;


export const ColumnProviderDesc = styled(ColumnTitle)``;
export const ColumnFolderDesc = styled(ColumnProviderDesc)``;
export const ColumnClientMainDesc = styled(ColumnFolderDesc)``;
export const ColumnClientDesc = styled(ColumnFolderDesc)``;
export const ColumnValueDesc = styled(ColumnFolderDesc)``;
export const ColumnDueDateDesc = styled(ColumnFolderDesc)``;
