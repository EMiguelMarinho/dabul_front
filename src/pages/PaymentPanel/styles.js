import styled from 'styled-components';

export const ContainerMain = styled.div`
   width: 100%;
   padding: 30px 120px;
   z-index: 0;
`;

export const Container = styled.div`
   margin-bottom: 50px;
`;

export const Footer = styled.footer`
   height: 20px;
   width: 100%;
   background-color: #2E0C94;
`;

import { ContainerContent, ColumnTitle } from '../Clients/styles';

export const ContainerSearch = styled.div`
   display: flex;
   margin-top: 20px;
   z-index: 0;
`;

export const ContainerContentSearch = styled.form`
   display: flex;
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

export const FirstContainerSearch = styled.div`
   width: 100%;
   background-color: #210478;
   padding: 12px;
   border-top-left-radius: 10px;

   display: flex;
   align-items: center;

   h1{
      font-size: 16px;
      color: white;
      font-weight: 400;
      margin-right: 5px;
      width: 220px;
      text-align: end;
   }
`;

export const Date = styled.div`
   display: flex;
`;

export const ContainerInputSearch = styled.div`
   display: flex;
   margin: 0 10px;

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
   width: 46%;
   color: white;
   height: 30px;
   font-size: 14px;

   &::placeholder{
      color: #B3B3B3;
   }

   &:focus{
      outline: none;
   }
`;

export const SelectCamp = styled.select`
   background-color: #210478;
   border: 1px solid white;
   border-radius: 5px;
   padding: 5px;
   width: auto;
   color: white;
   height: 30px;
   cursor: pointer;
   font-size: 14px;

   &:focus{
      outline: none;
      cursor: pointer;
   }
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

export const Columnt = styled(ColumnTitle)`
   background-color: #4E3A89;
   color: white;
   width: ${ ({ width }) => width ? width : "auto" };
`;


export const ColumnProviderDesc = styled(ColumnTitle)``;
export const ColumnFolderDesc = styled(ColumnProviderDesc)``;
export const ColumnClientMainDesc = styled(ColumnFolderDesc)``;
export const ColumnClientDesc = styled(ColumnFolderDesc)``;
export const ColumnValueDesc = styled(ColumnFolderDesc)``;
export const ColumnDueDateDesc = styled(ColumnFolderDesc)``;
