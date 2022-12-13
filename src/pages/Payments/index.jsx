import { ContainerMain } from "../../components/ContainerMain";

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
   ContainerInputRadio,
   SelectCamp,
   ColumnIcon,
   ContainerRegister,
   Register,
} from '../Clients/styles';

import * as Styles from './styles';

import { reducedFilterArray } from '../../functions/reducedFilterArray';
import { listFilterDateInitFin } from '../../functions/listFilterDateInitFin';

import { schema } from "./schemaValidation";
import { useEffect, useState } from "react";

export const Payments = () => {
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
         paymentOf: '',
         paymentUntil: '',
         emission: '',
         client: '',
         nf: '',
         dueDateOf: '',
         dueDateUntil: '',
         provider: '',
         numberFolder: '',
         grossValueOf: '',
         grossValueUntil: '',
      },
      validationSchema: schema,
      onSubmit: values => {
         const { dueDateOf, dueDateUntil, emission, client ,nf ,provider ,numberFolder ,grossValueOf ,grossValueUntil } = values;

         if(
            values.dueDateOf === '' &&
            values.dueDateUntil === '' &&
            values.emission === '' &&
            values.client === '' &&
            values.nf === '' &&
            values.provider === '' &&
            values.numberFolder === '' &&
            values.grossValueOf === '' &&
            values.grossValueUntil === ''
         ) return setSearch(arrList);

         let arr = listFilterDateInitFin(arrList, dueDateOf, dueDateUntil, 'dueDate');
         arr = reducedFilterArray(arr, emission, "emission");

         setSearch(listFilterInputDueDate);
      }
   });

   useEffect(() => {
      setSearch(arrList)
   }, []);

   return (
      <ContainerMain>
         <Title>Pagamentos</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle search={true} colSpan={5}>
                        <Form>
                           <ContainerInput width="30%">
                              <h1>Pagamento:</h1>
                              <label htmlFor="paymentOf">de</label>
                              <InputCamp
                                 type="text"
                                 id="paymentOf"
                                 values={formik.values.paymentOf}
                                 onChange={formik.handleChange}
                                 width="25%"
                              />

                              <label htmlFor="paymentUntil">ate</label>
                              <InputCamp
                                 type="text"
                                 id="paymentUntil"
                                 values={formik.values.paymentUntil}
                                 onChange={formik.handleChange}
                                 width="25%"
                              />
                           </ContainerInput>

                           <ContainerInput>
                              <label htmlFor="emission">Emissão:</label>
                              <InputCamp
                                 type="text"
                                 id="emission"
                                 values={formik.values.emission}
                                 onChange={formik.handleChange}
                              />
                           </ContainerInput>

                           <ContainerInput>
                              <label htmlFor="client">Cliente:</label>
                              <InputCamp
                                 type="text"
                                 id="client"
                                 values={formik.values.client}
                                 onChange={formik.handleChange}
                              />
                           </ContainerInput>

                           <ContainerInput>
                              <label htmlFor="nf">NF:</label>
                              <InputCamp
                                 type="text"
                                 id="nf"
                                 values={formik.values.nf}
                                 onChange={formik.handleChange}
                              />
                           </ContainerInput>

                           <ContainerInput width="30%">
                              <h1>Vencimento:</h1>
                              <label htmlFor="dueDateOf">de</label>
                              <InputCamp
                                 type="text"
                                 id="dueDateOf"
                                 values={formik.values.dueDateOf}
                                 onChange={formik.handleChange}
                                 width="25%"
                              />
                              <label htmlFor="dueDateUntil">ate</label>
                              <InputCamp
                                 type="text"
                                 id="dueDateUntil"
                                 values={formik.values.dueDateUntil}
                                 onChange={formik.handleChange}
                                 width="25%"
                              />
                           </ContainerInput>

                           <ContainerInput width="18%">
                              <label htmlFor="provider">Fornecedor:</label>
                              <InputCamp
                                 type="text"
                                 id="provider"
                                 values={formik.values.provider}
                                 onChange={formik.handleChange}
                                 width="50%"
                              />
                           </ContainerInput>

                           <ContainerInput width="18%">
                              <label>N° da pasta:</label>
                              <InputCamp
                                 type="text"
                                 id="numberFolder"
                                 values={formik.values.numberFolder}
                                 onChange={formik.handleChange}
                                 width="40%"
                              />
                           </ContainerInput>

                           <ContainerInput width="33%">
                              <h1>Valor bruto:</h1>
                              <label htmlFor="grossValueOf">de</label>
                              <InputCamp
                                 type="text"
                                 id="grossValueOf"
                                 values={formik.values.dueDateOf}
                                 onChange={formik.handleChange}
                                 width="22%"
                              />
                              <label htmlFor="grossValueUntil">ate</label>
                              <InputCamp
                                 type="text"
                                 id="grossValueUntil"
                                 values={formik.values.dueDateUntil}
                                 onChange={formik.handleChange}
                                 width="22%"
                              />
                           </ContainerInput>
                        </Form>
                     </ColumnTitle>
                     <td>
                        <Register onClick={formik.handleSubmit}>Pesquisar</Register>
                     </td>
                  </Titles>
               </ContainerTitles>
               <Content>
                  <SubTitles bgColor="#CDD1F4">
                     <ColumnTitle>Fornecedor</ColumnTitle>
                     <ColumnTitle>Pasta</ColumnTitle>
                     <ColumnTitle>Cliente principal</ColumnTitle>
                     <ColumnTitle>Cliente</ColumnTitle>
                     <ColumnTitle>Valor</ColumnTitle>
                     <ColumnTitle>Data Vencimento</ColumnTitle>
                  </SubTitles>
                  {search.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.provider}</ColumnTitle>
                        <ColumnTitle>{list.folder}</ColumnTitle>
                        <ColumnTitle>{list.clientMain}</ColumnTitle>
                        <ColumnTitle>{list.client}</ColumnTitle>
                        <ColumnTitle>R${list.value}</ColumnTitle>
                        <ColumnTitle>{list.dueDate}</ColumnTitle>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister />
      </ContainerMain>
   )
}

