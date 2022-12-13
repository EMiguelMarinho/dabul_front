import { ColumnTitle, ColumnTypeDesc, ColumnIconDesc, ColumnIcon } from '../Clients/styles'

import styled from 'styled-components';

export const ColumnId = styled(ColumnTitle)`
   width: 10%;

`;
export const ColumnNumber = styled(ColumnId)`
   width: 16%;
   border-top-left-radius: 0;

`;
export const ColumnReduced = styled(ColumnNumber)`
   width: 13%;
`;
export const ColumnGroup = styled(ColumnNumber)`
   width: 22%;
`;
export const ColumnName = styled(ColumnNumber)`
   width: 25%;
`;

export const ColumnOrder = styled(ColumnNumber)`
   width: 10%;
`;

export const ColumnIcone = styled(ColumnIcon)`
   width: 4%;
`;






export const ColumnIdDesc = styled(ColumnTypeDesc)`
   width: 10%;
`;

export const ColumnNumberDesc = styled(ColumnIdDesc)`
   width: 16%;

   @media(max-width: 1030px){
      width: 17%;
   }
`;

export const ColumnReducedDesc = styled(ColumnIdDesc)`
   width: 13%;
`;

export const ColumnGroupDesc = styled(ColumnIdDesc)`
   width: 22%;
`;

export const ColumnNameDesc = styled(ColumnIdDesc)`
   width: 25%;
`;

export const ColumnOrderDesc = styled(ColumnIdDesc)`
   width: 10%;
`;

export const ColumnIconeDesc = styled(ColumnIconDesc)`
   width: 4%;
`;
