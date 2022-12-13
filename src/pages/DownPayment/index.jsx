import { ContainerMain } from "../../components/ContainerMain";

import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';

import { useState, useEffect } from 'react';
import { useFormik } from "formik";

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
   ColumnIcon,
   ContainerRegister,
   Register,
} from '../Clients/styles';

import { schema } from './schemaValidate';

import { transformDateStringOfDateUTC } from '../../functions/transformDateStringOfDateUTC';
import { reducedFilterArray } from '../../functions/reducedFilterArray';

export const DownPayment = () => {
   const [ search, setSearch ] = useState([])
   const [ arrList, setArrList ] = useState([
      {
         provider: "Pessoa Jurídica",
         numeroFatura: "Lorem, ipsum",
         emission: "Juros",
         dueDate: "15/05/2012",
         value: "500",
         select: false,
         id: 1
      },
      {
         provider: "Pessoa Jurídica",
         numeroFatura: "Lorem, ipsum",
         emission: "Juros",
         dueDate: "03/05/2012",
         value: "500",
         select: false,
         id: 2
      },
      {
         provider: "Pessoa Jurídica",
         numeroFatura: "Lorem, ipsum",
         emission: "Juros",
         dueDate: "21/05/2012",
         value: "500",
         select: false,
         id: 3
      },
      {
         provider: "Pessoa Jurídica",
         numeroFatura: "Lorem, ipsum",
         emission: "Juros",
         dueDate: "17/05/2012",
         value: "500",
         select: false,
         id: 4
      },
      {
         provider: "Pessoa Jurídica",
         numeroFatura: "Lorem, ipsum",
         emission: "Juros",
         dueDate: "02/05/2012",
         value: "500",
         select: false,
         id: 5
      },
      {
         provider: "Física",
         numeroFatura: "Lorem, ipsum",
         emission: "Juros",
         dueDate: "15/05/2012",
         value: "500",
         select: false,
         id: 6
      },
   ]);
  const formik = useFormik({
   initialValues: {
      dateOfdown: '',
      provider: ''
   },
   validationSchema: schema,
   onSubmit: values => {
      const { dateOfdown, provider } = values;

      if(dateOfdown == '' && provider == '') return setSearch(arrList)

      let arr = reducedFilterArray(arrList, dateOfdown, "dueDate");
      arr = reducedFilterArray(arr, provider, 'provider')

      setSearch(arr)
  }});

  useEffect(() => {
   setSearch(arrList)
  }, [])

   return (
      <ContainerMain>
         <Title>Baixa pagamentos</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle search={true}  colSpan={6}>
                        <Form>
                           <ContainerInput>
                              <label htmlFor="dateOfdown">Data de baixa:</label>
                              <InputCamp
                                 type="text"
                                 id="dateOfdown"
                                 name="dateOfdown"
                                 values={formik.values.dateOfdown}
                                 onChange={formik.handleChange}
                              />
                           </ContainerInput>
                           <ContainerInput>
                              <label>Fornecedor:</label>
                              <InputCamp
                                 type="text"
                                 id="provider"
                                 name="provider"
                                 values={formik.values.provider}
                                 onChange={formik.handleChange}
                              />
                           </ContainerInput>
                        </Form>
                     </ColumnTitle>
                  </Titles>
               </ContainerTitles>
               <Content>
                  <SubTitles bgColor="#CDD1F4">
                     <ColumnTitle>Fornecedor</ColumnTitle>
                     <ColumnTitle>Número da fatura</ColumnTitle>
                     <ColumnTitle>Emissão</ColumnTitle>
                     <ColumnTitle>Vencimento</ColumnTitle>
                     <ColumnTitle>Valor</ColumnTitle>
                     <ColumnTitle>Baixa</ColumnTitle>
                  </SubTitles>
                  {search.map(list => (
                        <tr key={list.id}>
                           <ColumnTitle>{list.provider}</ColumnTitle>
                           <ColumnTitle>{list.numeroFatura}</ColumnTitle>
                           <ColumnTitle>{list.emission}</ColumnTitle>
                           <ColumnTitle>{list.dueDate}</ColumnTitle>
                           <ColumnTitle>R${list.value}</ColumnTitle>
                           <ColumnIcon>
                              {arrList ? (
                                 <BiCheckboxChecked size="24px" id={list.id}/>
                              ) : (
                                 <BiCheckbox size="24px" id={list.id}/>
                              )}
                           </ColumnIcon>
                        </tr>
                     ))}
               </Content>
            </Table>
         </ContainerTable>

         <ContainerRegister>
            <Register type="submit" onClick={formik.handleSubmit}>Buscar pasta</Register>
            <Register>Baixar pagamentos selecionados</Register>
            <Register>Cancelar</Register>
         </ContainerRegister>
      </ContainerMain>
   )
}
