import { ContainerMain } from "../../components/ContainerMain";
import { RegisterUsers } from "../../components/Register/Users";
import { Load } from '../Load';

import { useState, useEffect } from 'react';

import { FiEdit } from 'react-icons/fi';

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

export const Users = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ idEdit, setIdEdit ] = useState('');
   const [ users, setUsers ] = useState([]);
   const [ load, setLoad ] = useState(false);

   useEffect(() => {
      const getAllUsers = async () => {
         try {
            setLoad(true)
            const reqUsers = await api.get('/getAllUsuarios');
            setUsers(reqUsers.data);
         } catch (error) {
            if(error.response.status === 404) return setUsers([])
         } finally {
            setLoad(false)
         }
      }

      getAllUsers();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteUsuario/${id}`);
         const reqUsers = await api.get('/getAllUsuarios');
         setUsers(reqUsers.data)
      } catch (error) {
         if(error.response.status === 404) return setUsers([]);
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
         <Title>Usuários</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                  <ColumnTitle color="white" BdColor="white" first="true">ID</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Login</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Email</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="3%" ></ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {users.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.login}</ColumnTitle>
                        <ColumnTitle>{list.nome}</ColumnTitle>
                        <ColumnTitle>{list.email}</ColumnTitle>
                        <ColumnTitle cursor="true"><FiEdit onClick={() => handleEdit(list.id)} size="20px"/></ColumnTitle>
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
         {stateRegister && <RegisterUsers setStateRegister={setStateRegister} setUsers={setUsers} id={idEdit} />}
      </ContainerMain>
   )
}
