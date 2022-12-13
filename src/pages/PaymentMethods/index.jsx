import { ContainerMain } from "../../components/ContainerMain";
import { RegisterPaymentMethods } from "../../components/Register/PaymentMethods";
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


export const PaymentMethods = () => {
   const [ stateRegister, setStateRegister ] = useState(false);
   const [ idEdit, setIdEdit ] = useState('');
   const [ load, setLoad ] = useState(false);
   const [ paymentMethods, setPaymentMethods ] = useState([]);

   useEffect(() => {
      const getAllPaymentsMethods = async () => {
         try {
            setLoad(true)
            const reqPaymentMethods = await api.get('/getAllFormaPagamento');
            setPaymentMethods(reqPaymentMethods.data);
         } catch (error) {
            if(error.response.status === 404) return setPaymentMethods([])
         } finally {
            setLoad(false)
         }
      }

      getAllPaymentsMethods();
   }, [])

   const handleDelete = async (id) => {
      try {
         setLoad(true)
         await api.delete(`/deleteFormaPagamento/${id}`);
         const reqPaymentMethods = await api.get('/getAllFormaPagamento');
         setPaymentMethods(reqPaymentMethods.data);
      } catch (error) {
         if(error.response.status === 404) return setPaymentMethods([])
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
         <Title>Formas de pagamento</Title>

         <ContainerTable>
            <Table>
               <ContainerTitles>
                  <Titles>
                     <ColumnTitle color="white" BdColor="white" first={true}>Id</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Metodo</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white">Status</ColumnTitle>
                     <ColumnTitle color="white" BdColor="white" width="3%" ></ColumnTitle>
                     <ColumnIcon></ColumnIcon>
                  </Titles>
               </ContainerTitles>
               <Content>
                  {paymentMethods.map(list => (
                     <tr key={list.id}>
                        <ColumnTitle>{list.id}</ColumnTitle>
                        <ColumnTitle>{list.metodo}</ColumnTitle>
                        <ColumnTitle>{list.status}</ColumnTitle>
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
         {stateRegister && <RegisterPaymentMethods setStateRegister={setStateRegister} setPaymentMethods={setPaymentMethods} id={idEdit} />}
      </ContainerMain>
   )
}
