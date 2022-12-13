import styled from 'styled-components';

export const Title = styled.h1`
   color: #2E0C94;
   font-weight: 400;
   height: 11%;
`;

export const ContainerTable = styled.div`
   height: 82%;
   margin: ${ ({ margin }) => margin ? margin : "auto" };
   border: 1px solid #210478;
   border-radius: 12px 12px 0 0 ;
   overflow: auto;
   ::-webkit-scrollbar{
      display: none;
   }
`;

export const Table = styled.table`
   width: 100%;
   border-collapse: collapse;
`;

export const ContainerTitles = styled.thead``;

export const Content = styled.tbody`
   tr:nth-child(even) {
      background: ${ ({ bgColor }) => bgColor ? bgColor : "#F6F7FF" };
   }

   tr:nth-child(odd) && tr:not(:first-child) {
      background: ${ ({ bgColor }) => bgColor ? bgColor : "#FFF" };
   }
`;

export const Titles = styled.tr`
   background-color: #210478;
`;

export const SubTitles = styled.tr`
   background-color: ${ ({ bgColor }) => bgColor ? bgColor :  "#FFF"};
`;


export const ColumnTitle = styled.td`
   padding: 10px 10px;
   text-align: start;
   color: ${ ({ color }) => color ? color : "black" };
   border-right: ${ ({ BdColor }) => BdColor ? `1px solid ${BdColor}` : "1px solid #210478" };
   width: ${ ({ width }) => width ? width : "auto" };
   border-top-left-radius: ${({ first }) => first ? '10px' : 0};
   border-radius: ${ ({ search }) => search ? "10px 0 0 0" : 0 };
   cursor: ${ ({ cursor }) => cursor ? "pointer" : "auto"};
`;

export const ColumnIcon = styled(ColumnTitle)`
   width: 4%;
   border-right: none;
   border-top-right-radius: ${ ({ bdRadiusRight }) => bdRadiusRight ? bdRadiusRight : "10px" };
   cursor: ${ ({ cursor }) => cursor ? "pointer" : "auto"};
`;

export const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: left;
`;

export const ContainerInput = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin: 10px 0 10px 0;
   width: ${ ({ width }) => width ? width : "auto" };

   label {
      color: white;
      margin-right: 5px;
   }

   h1{
      font-size: 15px;
      color: white;
      font-weight: 400;
      margin-right: 5px;
      text-align: end;
   }
`;

export const ContainerInputRadio = styled(ContainerInput)`
   flex-direction: column;
   margin-right: 30px;
   `;

export const InputCamp = styled.input`
   background-color: #210478;
   border: 1px solid white;
   border-radius: 5px;
   padding: 6px 5px;
   margin-right: 15px;
   color: white;
   width: ${ ({ width }) => width ? width : "auto" };

   &:focus{
      outline: none;
   }
`;

export const SelectCamp = styled.select`
   padding: 6px 5px;
   margin-right: 15px;
   border-radius: 5px;
   color: white;
   cursor: pointer;
   border: 1px solid white;
   background-color: #210478;
`;

export const ContainerRegister = styled.div`
   width: 100%;
   height: ${ ({ height }) => height ? height : "11%" };
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;
   background-color: #2E0C94;

   display: flex;
   justify-content: flex-end;
   align-items: center;
`;

export const ContainerSearch = styled.div`
   background-color: #210478;
   border-top-right-radius: 10px;
   height: 114px;
   display: flex;
   align-items: center;
   padding-right: 12px;
`;

export const Register = styled.button`
   color: #2E0C94;
   margin-right: 20px;
   background-color: white;
   font-weight: 400;
   padding: 3px 15px;
   border-radius: 5px;
   border: none;
   cursor: pointer;

   @media(min-height: 700px){
      font-size: 16px;
   }
`;
