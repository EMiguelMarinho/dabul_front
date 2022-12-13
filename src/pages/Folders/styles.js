import { ColumnTitle } from '../Clients/styles'

import styled from 'styled-components';

export const ColumnId = styled(ColumnTitle)`
   width: 10%;
`;
export const ColumnNumber = styled(ColumnId)`
   border-top-left-radius: 0;
   width: 19%;
`;
export const ColumnName = styled(ColumnNumber)`
   width: 26%;
`;
export const ColumnDetails = styled(ColumnNumber)`
   width: 30%;
`;





export const ColumnIdDesc = styled(ColumnTitle)`
   width: 10%;
`;

export const ColumnNumberDesc = styled(ColumnIdDesc)`
   width: 19%;
`;

export const ColumnNameDesc = styled(ColumnIdDesc)`
   width: 26%;
`;

export const ColumnDetailsDesc = styled(ColumnIdDesc)`
   width: 30%;
`;
