import { ContainerMain } from "../../components/ContainerMain";
import { RegisterProvider } from "../../components/Register/Provider";
import { Load } from '../Load';

import { useState, useEffect } from 'react';

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
   Register
} from '../Clients/styles';


export const Providers = () => {
   const [ stateRegister, setStateRegister ] = useState(false)
   const [ providers, setProviders ] = useState([]);
   const [ load, setLoad ] = useState(false);
   const [ groupBills, setGroupBills ] = useState([]);

   useEffect(() => {
      const getAllProviders = async () => {
         try {
            setLoad(true)
            const reqProviders = await api.get('/getAllFornecedores');
            setProviders(reqProviders.data);
         } catch (error) {
            if(error.response.status === 404) return setProviders([])
         } finally {
            setLoad(false)
         }
      }

      const getAllGroupBills = async () => {
         try {
            const reqGroupBills = await api.get('/getAllGrupoContas');
            setGroupBills(reqGroupBills.data);
         } catch (error) {
            if(error.response.status === 404) return setGroupBills([]);
         } finally {
            setLoad(false)
         }
      }

      getAllProviders();
      getAllGroupBills();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteFornecedor/${id}`);
         const reqProviders = await api.get('/getAllFornecedores');
         setProviders(reqProviders.data)
      } catch (error) {
         if(error.response.status === 404) return setProviders([])
      } finally {
         setLoad(false)
      }
   }

   return (
      <ContainerMain>
         <Title>Fornecedores</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first={true}>Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Telefone</ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {providers.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.nome}</ColumnTitle>
                        <ColumnTitle>{list.telefone}</ColumnTitle>
                        <ColumnIcon cursor="true"><BiTrash onClick={() => handleDelete(list.id)} size="20px"/></ColumnIcon>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>

         <ContainerRegister>
            <Register>Vincular</Register>
            <Register onClick={() => setStateRegister(true)}>Cadastrar</Register>
         </ContainerRegister>

         {load && <Load />}
         {stateRegister && <RegisterProvider setStateRegister={setStateRegister} setProviders={setProviders} groupBills={groupBills} />}
      </ContainerMain>
   )
}
