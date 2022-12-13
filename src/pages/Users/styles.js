import { ColumnTitle } from '../Clients/styles'

import styled from 'styled-components';

export const ColumnId = styled(ColumnTitle)`
   width: 10%;
`;
export const ColumnLogin = styled(ColumnId)`
   border-top-left-radius: 0;
   width: 16%;
`;
export const ColumnNome = styled(ColumnLogin)`
   width: 20%;
`;
export const ColumnEmail = styled(ColumnLogin)`
   width: 25%;
`;
export const ColumnExemplo = styled(ColumnLogin)`
   width: 22%;
`;






export const ColumnIdDesc = styled(ColumnTitle)`
   width: 10%;
`;

export const ColumnLoginDsc = styled(ColumnIdDesc)`
   width: 16%;

   @media(max-width: 1030px){
      width: 17%;
   }
`;

export const ColumnNomeDesc = styled(ColumnIdDesc)`
   width: 20%;
`;

export const ColumnEmailDesc = styled(ColumnIdDesc)`
   width: 25%;
`;

export const ColumnExemploDesc = styled(ColumnIdDesc)`
   width: 22%;
`;
