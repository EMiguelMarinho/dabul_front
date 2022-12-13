import { useFormik } from 'formik';

import {
   Title,
   ContainerTable,
   Table,
   ContainerTitles,
   Content,
   Titles,
   SubTitles,
   ColumnTitle,
   Form,
   ContainerInput,
   InputCamp,
   SelectCamp,
   ColumnIcon,
   ContainerRegister,
   Register,
} from '../Clients/styles';

import * as Styles from './styles';

import { schema } from "./schemaValidation";

import { useEffect, useState } from "react";

import { Header } from "../../components/Header";



export const PaymentPanel = () => {
   const [ search, setSearch ] = useState([])
   const arrList = [
      {
         provider: "Pessoa Jurídica",
         folder: "Lorem, ipsum",
         clientMain: "Juros",
         client: "juros",
         value: "500",
         dueDate: "30/05/2012",
         id: 1
      },
      {
         provider: "Pessoa Jurídica",
         folder: "Lorem, ipsum",
         clientMain: "Juros",
         client: "juros",
         value: "500",
         dueDate: "12/03/2015",
         id: 2
      },
      {
         provider: "Pessoa Jurídica",
         folder: "Lorem, ipsum",
         clientMain: "Juros",
         client: "juros",
         value: "500",
         dueDate: "30/05/2012",
         id: 3
      },
      {
         provider: "Pessoa Jurídica",
         folder: "Lorem, ipsum",
         clientMain: "Juros",
         client: "juros",
         value: "500",
         dueDate: "12/03/2015",
         id: 4
      },
      {
         provider: "Pessoa Jurídica",
         folder: "Lorem, ipsum",
         clientMain: "Juros",
         client: "juros",
         value: "500",
         dueDate: "30/05/2012",
         id: 5
      },
      {
         provider: "Pessoa Jurídica",
         folder: "Lorem, ipsum",
         clientMain: "Juros",
         client: "juros",
         value: "500",
         dueDate: "12/03/2015",
         id: 6
      },
   ];

   const formik = useFormik({
      initialValues: {
         day: '01',
         month: '01',
         year: '2022',
         status: 'true',
         folder: '',
      },
      validationSchema: schema,
      onSubmit: values => {
         const { day, month, year, status, folder } = values;

         if(
            day === '' &&
            month === '' &&
            year === '' &&
            status === '' &&
            folder === ''
         ) return setSearch(arrList);
            
         const date = `${day}/${month}/${year}`
         
         let arr = reducedFilterArray(arrList, date, 'date')

         setSearch(arr);
      }
   });

   useEffect(() => {
      setSearch(arrList)
   }, []);

   return (
      <>
      <Header />
      <Styles.ContainerMain>
         <Title>Painel de Pagamento</Title>

         <ContainerTable margin="15px 0 0 0">
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle search={true} colSpan={2}>
                        <Form onSubmit={formik.handleSubmit}>
                           <ContainerInput>
                              <h1>Indicadores de recebimento:</h1>
                              <label htmlFor="day">Dia</label>
                              <SelectCamp
                                 name="day"
                                 id="day"
                                 values={formik.values.day}
                                 onChange={formik.handleChange}
                              >
                                 <option value='01'selected>01</option>
                                 <option value='02'>02</option>
                                 <option value='03'>03</option>
                                 <option value='04'>04</option>
                                 <option value='05'>05</option>
                                 <option value='06'>06</option>
                                 <option value='07'>07</option>
                                 <option value='08'>08</option>
                                 <option value='09'>09</option>
                                 <option value='10'>10</option>
                                 <option value='11'>11</option>
                                 <option value='12'>12</option>
                                 <option value='13'>13</option>
                                 <option value='14'>14</option>
                                 <option value='15'>15</option>
                                 <option value='16'>16</option>
                                 <option value='17'>17</option>
                                 <option value='18'>18</option>
                                 <option value='19'>19</option>
                                 <option value='20'>20</option>
                                 <option value='21'>21</option>
                                 <option value='22'>22</option>
                                 <option value='23'>23</option>
                                 <option value='24'>24</option>
                                 <option value='25'>25</option>
                                 <option value='26'>26</option>
                                 <option value='27'>27</option>
                                 <option value='28'>28</option>
                                 <option value='29'>29</option>
                                 <option value='30'>30</option>
                                 <option value='31'>31</option>
                              </SelectCamp>

                              <label htmlFor="month">Mês</label>
                              <SelectCamp
                                 name="month"
                                 id="month"
                                 values={formik.values.month}
                                 onChange={formik.handleChange}
                              >
                                 <option value='01'selected>01</option>
                                 <option value='02'>02</option>
                                 <option value='03'>03</option>
                                 <option value='04'>04</option>
                                 <option value='05'>05</option>
                                 <option value='06'>06</option>
                                 <option value='07'>07</option>
                                 <option value='08'>08</option>
                                 <option value='09'>09</option>
                                 <option value='10'>10</option>
                                 <option value='11'>11</option>
                                 <option value='12'>12</option>
                              </SelectCamp>

                              <label htmlFor="year">Ano</label>
                              <SelectCamp
                                 name="year"
                                 id="year"
                                 values={formik.values.year}
                                 onChange={formik.handleChange}
                              >
                                 <option value='2022'selected>2022</option>
                                 <option value='2021'>2021</option>
                                 <option value='2020'>2020</option>
                                 <option value='2019'>2019</option>
                                 <option value='2018'>2018</option>
                                 <option value='2017'>2017</option>
                                 <option value='2016'>2016</option>
                                 <option value='2015'>2015</option>
                                 <option value='2014'>2014</option>
                                 <option value='2013'>2013</option>
                                 <option value='2013'>2012</option>
                                 <option value='2011'>2011</option>
                                 <option value='2010'>2010</option>
                                 <option value='2009'>2009</option>
                                 <option value='2008'>2008</option>
                                 <option value='2007'>2007</option>
                                 <option value='2006'>2006</option>
                                 <option value='2005'>2005</option>
                                 <option value='2004'>2004</option>
                                 <option value='2003'>2003</option>
                                 <option value='2002'>2002</option>
                                 <option value='2001'>2001</option>
                                 <option value='2000'>2000</option>
                                 <option value='1999'>1999</option>
                                 <option value='1998'>1998</option>
                                 <option value='1997'>1997</option>
                                 <option value='1996'>1996</option>
                                 <option value='1995'>1995</option>
                                 <option value='1994'>1994</option>
                                 <option value='1993'>1993</option>
                                 <option value='1992'>1992</option>
                                 <option value='1991'>1991</option>
                                 <option value='1990'>1990</option>
                              </SelectCamp>
                           </ContainerInput>

                           <ContainerInput>
                              <label htmlFor="status">Status</label>
                              <SelectCamp
                                 id="status"
                                 values={formik.values.status}
                                 onChange={formik.handleChange}
                              >
                                 <option value="true"selected>Aberto</option>
                                 <option value="false">Fechado</option>
                              </SelectCamp>
                           </ContainerInput>

                           <ContainerInput>                              
                                 <label htmlFor="folder">N° da pasta</label>
                                 <InputCamp
                                    type="text"
                                    id="folder"
                                    placeholder="00000000"
                                    values={formik.values.folder}
                                    onChange={formik.handleChange}
                                 />                              
                           </ContainerInput>
                        </Form>
                     </ColumnTitle>
                     <td>
                        <Register type="submit" onClick={formik.handleSubmit}>Pesquisar</Register>
                     </td>
                  </Titles>
               </ContainerTitles>
               <Content>
                  <SubTitles bgColor="#CDD1F4">
                     <ColumnTitle>Nome</ColumnTitle>
                     <ColumnTitle>Valor</ColumnTitle>
                     <ColumnIcon bdRadiusRight="none"></ColumnIcon>
                  </SubTitles>
                  {search.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.provider}</ColumnTitle>
                        <ColumnTitle>R${list.value}</ColumnTitle>
                        <ColumnIcon></ColumnIcon>
                     </tr>
                  ))}
                  </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister height="30px" />

         <ContainerTable margin="70px 0 0 0">
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first={true}>Pasta</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Valor</ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {search.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.folder}</ColumnTitle>
                        <ColumnTitle>{list.provider}</ColumnTitle>
                        <ColumnTitle>R${list.value}</ColumnTitle>
                        <ColumnIcon></ColumnIcon>
                     </tr>
                  ))}
                  </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister height="30px" />

         <ContainerTable margin="70px 0 0 0">
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first={true}>Detalhes</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Valor</ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {search.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.dueDate}</ColumnTitle>
                        <ColumnTitle>R${list.value}</ColumnTitle>
                        <ColumnIcon></ColumnIcon>
                     </tr>
                  ))}
                  </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister height="30px" />
      </Styles.ContainerMain>
      <Styles.Footer />
      </>
   )
}
