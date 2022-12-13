import { ColumnTitle, ColumnTypeDesc } from '../Clients/styles'

import styled from 'styled-components';

export const ColumnId = styled(ColumnTitle)`
   width: 10%;
`;
export const ColumnNome = styled(ColumnId)`
   border-top-left-radius: 0;
   width: 16%;
`;
export const ColumnCNPJ = styled(ColumnNome)`
   width: 20%;
`;
export const ColumnTelefone = styled(ColumnNome)`
   width: 22%;
`;
export const ColumnEmail = styled(ColumnNome)`
   width: 25%;
`;






export const ColumnIdDesc = styled(ColumnTypeDesc)`
   width: 10%;
`;

export const ColumnNomeDesc = styled(ColumnIdDesc)`
   width: 16%;

   @media(max-width: 1030px){
      width: 17%;
   }
`;

export const ColumnCNPJDesc = styled(ColumnIdDesc)`
   width: 20%;
`;

export const ColumnTelefoneDesc = styled(ColumnIdDesc)`
   width: 22%;
`;

export const ColumnEmailDesc = styled(ColumnIdDesc)`
   width: 25%;
`;
