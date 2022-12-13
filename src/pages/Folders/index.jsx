import { ContainerMain } from "../../components/ContainerMain";
import { RegisterFolders } from "../../components/Register/Folders";
import { Load } from '../Load';

import { useState, useEffect } from 'react';

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
} from '../Clients/styles';

export const Folders = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ idEdit, setIdEdit ] = useState('');
   const [ folders, setFolders ] = useState([]);
   const [ load, setLoad ] = useState(false);

   useEffect(() => {
      const getAllFolders = async () => {
         try {
            setLoad(true)
            const reqFolders = await api.get('/getAllPastas');
            setFolders(reqFolders.data);
         } catch (error) {
            if(error.response.status === 404) return setFolders([])
         } finally {
            setLoad(false)
         }
      }

      getAllFolders();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deletePasta/${id}`);
         const reqFolders = await api.get('/getAllPastas');
         setFolders(reqFolders.data)
      } catch (error) {
         if(error.response.status === 404) return setFolders([]);
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
         <Title>Pastas</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first="true">Id</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Número</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Detalhe</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="3%" ></ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {folders.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.numero}</ColumnTitle>
                        <ColumnTitle>{list.nome}</ColumnTitle>
                        <ColumnTitle>{list.detalhes}</ColumnTitle>
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
         {stateRegister && <RegisterFolders setStateRegister={setStateRegister} setFolders={setFolders} id={idEdit} />}
      </ContainerMain>
   )
}
