import { ContainerMain } from "../../components/ContainerMain";
import { RegisterBills } from "../../components/Register/Bills";
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

export const Bills = () => {
   const [ stateRegister, setStateRegister ] = useState(false)
   const [ bills, setBills ] = useState([]);
   const [ load, setLoad ] = useState(false);
   const [ groupBills, setGroupBills ] = useState([]);

   useEffect(() => {
      const getAllBills = async () => {
         try {
            setLoad(true)
            const reqBills = await api.get('/getAllContas');
            setBills(reqBills.data);
         } catch (error) {
            if(error.response.status === 404) return setBills([]);
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

      getAllBills();
      getAllGroupBills();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteConta/${id}`);
         const reqBills = await api.get('/getAllContas');
         setBills(reqBills.data)
      } catch (error) {
         if(error.response.status === 404) return setBills([]);
      } finally {
         setLoad(false)
      }
   }

   return (
      <ContainerMain>
         <Title>Contas</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first={true}>ID</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Numero</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Reduzida</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Grupo</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Ordem</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" ></ColumnTitle>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {bills.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.numeroConta}</ColumnTitle>
                        <ColumnTitle>{list.numeroContaReduzida}</ColumnTitle>
                        <ColumnTitle>{list.grupo}</ColumnTitle>
                        <ColumnTitle>{list.nome}</ColumnTitle>
                        <ColumnTitle>{list.ordem}</ColumnTitle>
                        <ColumnIcon cursor={true}><BiTrash onClick={() => handleDelete(list.id)} size="20px"/></ColumnIcon>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister>
            <Register onClick={() => setStateRegister(true)}>Cadastrar</Register>
         </ContainerRegister>

         {load && <Load />}
         {stateRegister && <RegisterBills setStateRegister={setStateRegister} setBills={setBills} groupBills={groupBills}/>}
      </ContainerMain>
   )
}

