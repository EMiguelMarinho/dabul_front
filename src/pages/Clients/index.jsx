import { ContainerMain } from "../../components/ContainerMain";
import { RegisterClients } from "../../components/Register/Clients";
import { Load } from '../Load';

import { useEffect, useState } from 'react'

import { BiTrash } from 'react-icons/bi';

import { FiEdit } from 'react-icons/fi';

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
} from './styles';

export const Clients = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ idEdit, setIdEdit ] = useState('');
   const [ load, setLoad ] = useState(false);
   const [ clients, setClients ] = useState([]);
   const [ groupBills, setGroupBills ] = useState([]);

   useEffect(() => {
      const getAllClients = async () => {
         try {
            setLoad(true)
            const reqClients = await api.get('/getAllClientes');
            setClients(reqClients.data);
         } catch (error) {
            console.log(error)
            if(error.response.status === 404) return setClients([])
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

      getAllClients();
      getAllGroupBills();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteCliente/${id}`);
         const reqClients = await api.get('/getAllClientes');
         setClients(reqClients.data)
      } catch (error) {
         if(error.response.status === 404) return setClients([])
      } finally {
         setLoad(false)
      }
   }

   const handleEdit = (id) => {
      setIdEdit(id)
      setStateRegister(true)
   }


   const handleRegister = () => {
      setIdEdit('')
      setStateRegister(true)
   }

   return (
      <ContainerMain>
         <Title>Clientes</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first="true">Tipo</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="46%">Email</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="3%" ></ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {clients.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.tipo}</ColumnTitle>
                        <ColumnTitle>{list.nome}</ColumnTitle>
                        <ColumnTitle>{list.email}</ColumnTitle>
                        <ColumnTitle cursor="true"><FiEdit onClick={() => handleEdit(list.id)}  size="20px"/></ColumnTitle>
                        <ColumnIcon cursor="true"><BiTrash onClick={() => handleDelete(list.id)} size="20px"/></ColumnIcon>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister>
            <Register onClick={handleRegister}>Cadastrar</Register>
         </ContainerRegister>

         {load && <Load />}
         {stateRegister && <RegisterClients setStateRegister={setStateRegister} setClients={setClients} id={idEdit} groupBills={groupBills} />}
      </ContainerMain>
   )
}
