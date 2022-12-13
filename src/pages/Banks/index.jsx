import { ContainerMain } from "../../components/ContainerMain";
import { RegisterBanks } from "../../components/Register/Banks";
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

export const Banks = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ edit, setEdit ] = useState({});
   const [ banks, setBanks ] = useState([]);
   const [ load, setLoad ] = useState(false);

   useEffect(() => {
      const getAllBanks = async () => {
         try {
            setLoad(true)
            const reqBanks = await api.get('/getAllBancos');
            setBanks(reqBanks.data);
         } catch (error) {
            if(error.response.status === 404) return setFolders([])
         } finally {
            setLoad(false)
         }
      }

      getAllBanks();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteBanco/${id}`);
         const reqBanks = await api.get('/getAllBancos');
         setBanks(reqBanks.data)
      } catch (error) {
         if(error.response.status === 404) return setBanks([]);
      } finally {
         setLoad(false)
      }
   }

   const handleEdit = (bank) => {
      setEdit(bank)
      setStateRegister(true)
   }


   const handleRegister = () => {
      setEdit('')
      setStateRegister(true)
   }

   return (
      <ContainerMain>
         <Title>Bancos</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first="true">ID</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Nome da conta</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Num. Banco</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Agência</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Conta corrente</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="3%" ></ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {banks.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.nomeConta}</ColumnTitle>
                        <ColumnTitle>{list.numeroBanco}</ColumnTitle>
                        <ColumnTitle>{list.agencia}</ColumnTitle>
                        <ColumnTitle>{list.contaCorrente}</ColumnTitle>
                        <ColumnTitle cursor="true"><FiEdit onClick={() => handleEdit(list)}  size="20px"/></ColumnTitle>
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
         {stateRegister && <RegisterBanks setStateRegister={setStateRegister} setBanks={setBanks} edit={edit} />}
      </ContainerMain>
   )
}
