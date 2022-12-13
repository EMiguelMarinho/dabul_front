import { ContainerMain } from "../../components/ContainerMain";
import { RegisterTypesReceives } from "../../components/Register/TypesReceives";
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


export const TypesReceipts = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ idEdit, setIdEdit ] = useState('');
   const [ typesReceipts, setTypesReceipts ] = useState([]);
   const [ load, setLoad ] = useState(false);

   useEffect(() => {
      const getAllTypesReceives = async () => {
         try {
            setLoad(true)
            const reqTypesReceipts = await api.get('/getAllTiposRecebimentos');
            setTypesReceipts(reqTypesReceipts.data);
         } catch (error) {
            if(error.response.status === 404) return setTypesReceipts([])
         } finally {
            setLoad(false)
         }
      }

      getAllTypesReceives();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteTipoRecebimento/${id}`);
         const reqTypesReceipts = await api.get('/getAllTiposRecebimentos');
         setTypesReceipts(reqTypesReceipts.data)
      } catch (error) {
         if(error.response.status === 404) return setTypesReceipts([]);
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
         <Title>Tipos de Recebimentos</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first>ID</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Status</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="3%" ></ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {typesReceipts.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.tipo}</ColumnTitle>
                        <ColumnTitle>{list.status}</ColumnTitle>
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
         {stateRegister && <RegisterTypesReceives setStateRegister={setStateRegister} setTypesReceipts={setTypesReceipts} id={idEdit} />}
      </ContainerMain>
   )
}
