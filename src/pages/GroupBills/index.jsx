import { ContainerMain } from "../../components/ContainerMain";
import { RegisterGroupBills } from "../../components/Register/GroupBills";
import { Load } from '../Load';

import { useEffect, useState } from 'react';

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


export const GroupBills = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ idEdit, setIdEdit ] = useState('');
   const [ groupBills, setGroupBills ] = useState([]);
   const [ load, setLoad ] = useState(false);

   useEffect(() => {
      const getAllGroupBills = async () => {
         try {
            setLoad(true)
            const reqGroupBills = await api.get('/getAllGrupoContas');
            setGroupBills(reqGroupBills.data);
         } catch (error) {
            if(error.response.status === 404) return setGroupBills([])
         } finally {
            setLoad(false)
         }
      }

      getAllGroupBills();
   }, [])

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteGrupoConta/${id}`);
         const reqGroupBills = await api.get('/getAllGrupoContas');
         setGroupBills(reqGroupBills.data);
      } catch (error) {
         if(error.response.status === 404) return setGroupBills([]);
      } finally {
         setLoad(false)
      }
   };

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
         <Title>Grupos de contas</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first={true}>ID</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Ordem</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="3%" ></ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {groupBills.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.nomeGrupo}</ColumnTitle>
                        <ColumnTitle>{list.ordem}</ColumnTitle>
                        <ColumnTitle cursor="true"><FiEdit onClick={() => handleEdit(list.id)}  size="20px"/></ColumnTitle>
                        <ColumnIcon cursor="true" onClick={() => handleDelete(list.id)}><BiTrash size="20px"/></ColumnIcon>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>

         <ContainerRegister>
            <Register onClick={handleRegister}>Cadastrar</Register>
         </ContainerRegister>

         {load && <Load />}
         {stateRegister && <RegisterGroupBills setStateRegister={setStateRegister} setGroupBills={setGroupBills} id={idEdit} />}
      </ContainerMain>
   )
}
