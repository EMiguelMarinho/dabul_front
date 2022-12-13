import { ContainerMain } from "../../components/ContainerMain";
import { RegisterReceives } from "../../components/Register/Receives";
import { Load } from '../Load';
import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import api from "../../services/api";
import {
   Title,
   ContainerTable,
   Table,
   ContainerTitles,
   Content,
   Titles,
   ColumnTitle,
   ColumnIcon,
   ContainerRegister,
   Register,
   SubTitles,
   Form
} from '../Clients/styles';
import { ContainerInput } from './styles';
import { MenuFilter } from "../../components/MenuFilter";


export const ReceiptsOfficial = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ receipts, setReceipts ] = useState([]);
   const [ load, setLoad ] = useState(false);

   useEffect(() => {
      const getAllReceipts = async () => {
         try {
            setLoad(true)
            const reqReceipts = await api.get('/getAllRecebimentos');
            setReceipts(reqReceipts.data);
            console.log(reqReceipts.data)
         } catch (error) {
            if(error.response.status === 404) return
         } finally {
            setLoad(false)
         }
      }

      getAllReceipts();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteRecebimento/${id}`);
         const reqReceipts = await api.get('/getAllRecebimentos');
         setReceipts(reqReceipts.data)
      } catch (error) {
         if(error.response.status === 404) return setReceipts([]);
         console.log(error)
      } finally {
         setLoad(false)
      }
   }

   return (
      <ContainerMain>
         <Title>Recebimentos</Title>
         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                  <ColumnTitle search={true} colSpan={6}>
                        <Form>
                           <ContainerInput cursor='true'>
                              Filtrar por:
                              <MenuFilter />
                           </ContainerInput>
                        </Form>
                     </ColumnTitle>
                  </Titles>
               </ContainerTitles>
               <Content>
                  <SubTitles bgColor="#CDD1F4">
                     <ColumnTitle>Cliente</ColumnTitle>
                     <ColumnTitle>Pasta</ColumnTitle>
                     <ColumnTitle>Detalhes</ColumnTitle>
                     <ColumnTitle>Valor</ColumnTitle>
                     <ColumnTitle>Data de Emissão</ColumnTitle>
                     <ColumnIcon bdRadiusRight="0"></ColumnIcon>
                  </SubTitles>
                  {receipts.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.cliente}</ColumnTitle>
                        <ColumnTitle>{list.pasta}</ColumnTitle>
                        <ColumnTitle>{list.detalhes}</ColumnTitle>
                        <ColumnTitle>R${list.value}</ColumnTitle>
                        <ColumnTitle>{list.dataDeEmissão}</ColumnTitle>
                        <ColumnIcon cursor="true"><BiTrash size="20px" onClick={() => handleDelete(list.id)}/></ColumnIcon>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>

         <ContainerRegister>
            <Register onClick={() => setStateRegister(true)}>
               Cadastrar
            </Register>
         </ContainerRegister>

         {load && <Load />}
         {stateRegister && <RegisterReceives setStateRegister={setStateRegister} setReceipts={setReceipts}/>}
      </ContainerMain>
   )
}

