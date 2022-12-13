import styled from 'styled-components';

import { ColumnTitle } from '../Clients/styles'

export const ColumnId = styled(ColumnTitle)`
   width: 10%;
`;

export const ColumnName = styled(ColumnId)`
   width: 40%;
   border-top-left-radius: 0;
`;

export const ColumnOrder = styled(ColumnId)`
   border-top-left-radius: 0;
   width: 40%;
`;




export const ColumnIdDesc = styled(ColumnTitle)`
   width: 10%;
`;

export const ColumnNameDesc = styled(ColumnTitle)`
   width: 40%;
`;

export const ColumnOrderDesc = styled(ColumnNameDesc)`
   width: 40%;
`;
