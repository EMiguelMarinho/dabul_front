import PropTypes from 'prop-types';

import { TiDeleteOutline } from 'react-icons/ti';

import * as Styles from './styles';

import api from '../../../services/api';

export const BalanceBank = ({ setStateRegisterBank }) => {
   const arrList = [
      {
         bank: "Itaú Jurídica",
         value: "75.568.230,89",
         id: 1
      },
      {
         bank: "Banco Lorempson",
         value: "75.568.230,89",
         id: 2
      },
      {
         bank: "Itaú Jurídica",
         value: "75.568.230,89",
         id: 1
      },
      {
         bank: "Banco Lorempson",
         value: "75.568.230,89",
         id: 2
      },
      {
         bank: "Itaú Jurídica",
         value: "75.568.230,89",
         id: 1
      },
      {
         bank: "Banco Lorempson",
         value: "75.568.230,89",
         id: 2
      },
      {
         bank: "Itaú Jurídica",
         value: "75.568.230,89",
         id: 1
      },
      {
         bank: "Banco Lorempson",
         value: "75.568.230,89",
         id: 2
      },
      {
         bank: "Banco Lorempson",
         value: "75.568.230,89",
         id: 2
      },
      {
         bank: "Itaú Jurídica",
         value: "75.568.230,89",
         id: 1
      },
      {
         bank: "Banco Lorempson",
         value: "75.568.230,89",
         id: 2
      },
      {
         bank: "Itaú Jurídica",
         value: "75.568.230,89",
         id: 1
      },
      {
         bank: "Banco Lorempson",
         value: "75.568.230,89",
         id: 2
      }
   ];

   const handleSubmit = (e) => {
      e.preventDefault();

      api.post('/cadastraClientes')
      .then((res) => {
         if(res.body.status > 200 && res.body.status <= 299){
            console.log('Deu Certo')
         }
      })
      .catch((error) => {
         console.log(error)
      })
   }

   return (
      <Styles.Container>
         <Styles.ContainerForm>
            <Styles.HeaderForm>
               <Styles.Title>
                  Saldo dos Bancos
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegisterBank(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form">
               <Styles.Input>
                  <Styles.ContainerInput>
                     <label>Verificar Saldo em Data Anterior</label>
                     <input type="text"/>
                  </Styles.ContainerInput>
                  <button>Verificar</button>
               </Styles.Input>

               <Styles.ContainerContent>
                  <tbody>
                     <Styles.LineTitles>
                        <Styles.ColumnBank>Banco</Styles.ColumnBank>
                        <Styles.ColumnValue>Valor</Styles.ColumnValue>
                     </Styles.LineTitles>
                  </tbody>
               </Styles.ContainerContent>

               <Styles.ContainerDivDesc>
                  <Styles.Table>
                     <Styles.ContainerDesc>
                        {arrList.map(list => (
                           <tr key={list.id}>
                              <Styles.ColumnBankDesc>{list.bank}</Styles.ColumnBankDesc>
                              <Styles.ColumnValueDesc>{list.value}</Styles.ColumnValueDesc>
                           </tr>
                        ))}
                     </Styles.ContainerDesc>
                  </Styles.Table>
               </Styles.ContainerDivDesc>
            </form>
         </Styles.ContainerForm>
      </Styles.Container>
   );
}

BalanceBank.propTypes = {
   setStateRegisterBank: PropTypes.func.isRequired
}
