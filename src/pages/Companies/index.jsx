import { ContainerMain } from "../../components/ContainerMain";
import { RegisterCompanies } from "../../components/Register/Companies";
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

export const Companies = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ companies, setCompanies ] = useState([]);
   const [ load, setLoad ] = useState(false);

   useEffect(() => {
      const getAllCompanies = async () => {
         try {
            setLoad(true)
            const reqCompanies = await api.get('/getAllEmpresas');
            setCompanies(reqCompanies.data);
         } catch (error) {
            if(error.response.status === 404) return setCompanies([])
         } finally {
            setLoad(false)
         }
      }

      getAllCompanies();
   }, []);

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteEmpresa/${id}`);
         const reqCompanies = await api.get('/getAllEmpresas');
         setCompanies(reqCompanies.data)
      } catch (error) {
         if(error.response.status === 404) return setCompanies([]);
      } finally {
         setLoad(false)
      }
   }

   return (
      <ContainerMain>
         <Title>Empresas</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first={true}>ID</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Nome</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >CNPJ</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Telefone</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" >Email</ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {companies.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.nome}</ColumnTitle>
                        <ColumnTitle>{list.cnpj}</ColumnTitle>
                        <ColumnTitle>{list.telefone}</ColumnTitle>
                        <ColumnTitle>{list.email}</ColumnTitle>
                        <ColumnIcon cursor="true"><BiTrash onClick={() => handleDelete(list.id)} size="20px"/></ColumnIcon>
                     </tr>
                  ))}
               </Content>
            </Table>
         </ContainerTable>
         <ContainerRegister>
            <Register onClick={() => setStateRegister(true)}>Cadastrar</Register>
         </ContainerRegister>

         {load && <Load />}
         {stateRegister && <RegisterCompanies setStateRegister={setStateRegister} setCompanies={setCompanies} />}
      </ContainerMain>
   )
}
