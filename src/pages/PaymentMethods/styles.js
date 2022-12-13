import styled from 'styled-components';

import { ColumnTitle } from '../Clients/styles'

export const ColumnId = styled(ColumnTitle)`
   width: 6%;
`;

export const ColumnName = styled(ColumnTitle)`
   width: 43%;
   border-top-left-radius: 0;
`;

export const ColumnCell = styled(ColumnName)`
   border-top-left-radius: 0;
   width: 42%;
`;





export const ColumnIdDesc = styled(ColumnTitle)`
   width: 6%;
`;

export const ColumnNameDesc = styled(ColumnTitle)`
   width: 43%;
`;

export const ColumnCellDesc = styled(ColumnNameDesc)`
   width: 42%;
`;
