import { useState, useEffect } from 'react';
import { useFormik } from "formik";
import { ContainerMain } from "../../components/ContainerMain";
import { EmissionPDF } from '../../documents/PDF/NF-E';


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

import { reducedFilterArray } from '../../functions/reducedFilterArray';
import { transformDateStringOfDateUTC } from '../../functions/transformDateStringOfDateUTC';

export const EmissionNFS_E = () => {
   const [ search, setSearch ] = useState([])
   const arrList = [
      {
         option: "Lorem ipsum",
         title: "Lorem ipsum",
         code: "Lorem, ipsum",
         emission: "20/08/2010",
         dueDate: "30/05/2012",
         receipt: 'Lorem ipsum',
         folder: "21",
         clientName: 'Lorem ipsum',
         adress: 'Av. Lorem ipsum n° 2000 s1',
         email: 'exemplo@exemplo.com',
         fees: 'R$ 000,00',
         id: 1
      },
      {
         option: "Lorem ipsum",
         title: "Lorem ipsum",
         code: "Lorem, ipsum",
         emission: "20/08/2010",
         dueDate: "30/05/2012",
         receipt: 'Lorem ipsum',
         folder: "80",
         clientName: 'Lorem ipsum',
         adress: 'Av. Lorem ipsum n° 2000 s1',
         email: 'exemplo@exemplo.com',
         fees: 'R$ 000,00',
         id: 2
      },
      {
         option: "Lorem ipsum",
         title: "Lorem ipsum",
         code: "Lorem, ipsum",
         emission: "15/08/2010",
         dueDate: "30/05/2012",
         receipt: 'Lorem ipsum',
         folder: "Lore ipsum",
         clientName: 'Elias Gabriel',
         adress: 'Av. Lorem ipsum n° 2000 s1',
         email: 'exemplo@exemplo.com',
         fees: 'R$ 000,00',
         id: 3
      },
      {
         option: "Lorem ipsum",
         title: "Lorem ipsum",
         code: "Lorem, ipsum",
         emission: "20/08/2010",
         dueDate: "30/04/2012",
         receipt: 'Lorem ipsum',
         folder: "85",
         clientName: 'Eliseu Miguel',
         adress: 'Av. Lorem ipsum n° 2000 s1',
         email: 'exemplo@exemplo.com',
         fees: 'R$ 000,00',
         id: 4
      },
   ];

   const handleInputRadio = (e) => {
      formik.values.inputRadio = e.target.id
   }

   useEffect(() => {
      setSearch(arrList)
   }, []);

   const listFilterInputRadioFunc = () => {
      if( !formik.values.initialDate && !formik.values.finalyDate ) return arrList;

      const initialDateUTC = transformDateStringOfDateUTC(formik.values.initialDate);
      const finalyDateUTC = transformDateStringOfDateUTC(formik.values.finalyDate);
      const valueInputRadio = formik.values.inputRadio;

      const List = arrList.filter( list => {
         let listDateUTC = null;

         switch(valueInputRadio){
            case "emission":
               listDateUTC = transformDateStringOfDateUTC(list.emission);
               break
            case "dueDate":
               listDateUTC = transformDateStringOfDateUTC(list.dueDate);
               break
            case "receipt":
               listDateUTC = transformDateStringOfDateUTC(list.receipt);
               break
         }

         if(!initialDateUTC) return listDateUTC <= finalyDateUTC;
         if(!finalyDateUTC) return listDateUTC >= initialDateUTC;
         return listDateUTC <= finalyDateUTC && listDateUTC >= initialDateUTC;
      } )
      return List
   };

   const formik = useFormik({
      initialValues: {
         initialDate: '',
         finalyDate: '',
         inputRadio: '',
         client: '',
         numberFolder: '',
      },
      onSubmit: values => {
         const { client, numberFolder } = values;

         if(
            values.initialDate == '' &&
            values.finalyDate == '' &&
            values.inputRadio == '' &&
            values.client == '' &&
            values.numberFolder == ''
         ) return setSearch(arrList)

         let arr = listFilterInputRadioFunc();
         arr = reducedFilterArray(arr, client, "clientName");
         arr = reducedFilterArray(arr, numberFolder, "folder" )

         setSearch(arr);
      }
   })

   return (
      <ContainerMain>
         <Title>Emissão de NFS-e</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle search={true} colSpan={10}>
                        <Form>
                           <ContainerInput>
                                 <label htmlFor="initialDate">Data Inicial:</label>
                                 <InputCamp
                                    type="text"
                                    id="initialDate"
                                    values={formik.values.initialDate}
                                    onChange={formik.handleChange}
                                    placeholder="00/00/0000"
                                 />
                           </ContainerInput>
                           <ContainerInput>
                           <label htmlFor="finalyDate">Data Final:</label>
                                 <InputCamp
                                    type="text"
                                    id="finalyDate"
                                    values={formik.values.finalyDate}
                                    onChange={formik.handleChange}
                                    placeholder="00/00/0000"
                                 />
                           </ContainerInput>

                           <ContainerInputRadio>
                              <div>
                                 <label htmlFor="emission">Emissão</label>
                                 <InputCamp type="radio" id="emission" name="inputRadio" onClick={handleInputRadio}/>
                              </div>
                              <div>
                                 <label htmlFor="dueDate">Vencimento</label>
                                 <InputCamp type="radio" id="dueDate" name="inputRadio" onClick={handleInputRadio}/>
                              </div>
                              <div>
                                 <label htmlFor="receipt">Recebimento</label>
                                 <InputCamp type="radio" id="receipt" name="inputRadio" onClick={handleInputRadio}/>
                              </div>
                           </ContainerInputRadio>

                           <ContainerInput>
                              <label htmlFor="client">Cliente:</label>
                              <SelectCamp
                                 name="client"
                                 id="client"
                                 values={formik.values.client}
                                 onChange={formik.handleChange}>
                                    <option value='' selected>Selecione o cliente desejado</option>
                                    <option value='Eliseu Miguel'>Eliseu Miguel</option>
                                    <option value='Elias Gabriel'>Elias Gabriel</option>
                              </SelectCamp>
                           </ContainerInput>

                           <ContainerInput>
                              <label htmlFor="numberFolder">N° da pasta:</label>
                              <InputCamp
                                 type="text"
                                 id="numberFolder"
                                 values={formik.values.numberFolder}
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
                     <ColumnTitle>Opção</ColumnTitle>
                     <ColumnTitle>Título</ColumnTitle>
                     <ColumnTitle>Código</ColumnTitle>
                     <ColumnTitle>Emissão</ColumnTitle>
                     <ColumnTitle>Venc</ColumnTitle>
                     <ColumnTitle>Recebido</ColumnTitle>
                     <ColumnTitle>Pasta</ColumnTitle>
                     <ColumnTitle>Nome do Cliente</ColumnTitle>
                     <ColumnTitle>Endereço do Cliente</ColumnTitle>
                     <ColumnTitle>Email</ColumnTitle>
                     <ColumnTitle>Honorários</ColumnTitle>
                  </SubTitles>
                  {search.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.option}</ColumnTitle>
                        <ColumnTitle>{list.title}</ColumnTitle>
                        <ColumnTitle>{list.code}</ColumnTitle>
                        <ColumnTitle>{list.emission}</ColumnTitle>
                        <ColumnTitle>{list.dueDate}</ColumnTitle>
                        <ColumnTitle>{list.receipt}</ColumnTitle>
                        <ColumnTitle>{list.folder}</ColumnTitle>
                        <ColumnTitle>{list.clientName}</ColumnTitle>
                        <ColumnTitle>{list.adress}</ColumnTitle>
                        <ColumnTitle>{list.email}</ColumnTitle>
                        <ColumnTitle>{list.fees}</ColumnTitle>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister>
            <Register onClick={(() => EmissionPDF())}>Processar</Register>
         </ContainerRegister>
      </ContainerMain>
   )
}
