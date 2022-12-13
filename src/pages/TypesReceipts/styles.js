import styled from 'styled-components';

import { ColumnTitle, ColumnIcon } from '../Clients/styles'

export const ColumnId = styled(ColumnTitle)`
   width: 19%;
`;

export const ColumnName = styled(ColumnId)`
   width: 38%;
   border-top-left-radius: 0;
`;

export const ColumnStatus = styled(ColumnName)`
   width: 35%;
`;

export const ColumnIconFirst = styled(ColumnIcon)`
   border-top-right-radius: 0;
   border-right: 1px solid white;
`;




export const ColumnIdDesc = styled(ColumnTitle)`
   width: 19%;
`;

export const ColumnNameDesc = styled(ColumnIdDesc)`
   width: 38%;
`;

export const ColumnStatusDesc = styled(ColumnNameDesc)`
   width: 35%;
`;

export const ColumnIconFisrt = styled(ColumnIcon)`
   border-right: 1px solid #210478;
`;
