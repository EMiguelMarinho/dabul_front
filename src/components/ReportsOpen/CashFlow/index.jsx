import PropTypes from 'prop-types';

import { TiDeleteOutline } from 'react-icons/ti';

import * as Styles from './styles';

import api from '../../../services/api';

export const CashFlow = ({ setStateRegisterCashFlow }) => {
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
                  Fluxo de Caixa
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegisterCashFlow(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form">
               <Styles.Input>
                  <Styles.TitleInput>
                     Período de Fluxo de Caixas
                  </Styles.TitleInput>

                  <Styles.ContainerDivDesc>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        <input type="text"/>
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        <input type="text"/>
                     </Styles.ContainerInput>
                  </Styles.ContainerDivDesc>
               </Styles.Input>

               <Styles.ContainerBtn>
                  <Styles.BtnRegister type="submit" onClick={handleSubmit}>
                     Vizualizar
                  </Styles.BtnRegister>
               </Styles.ContainerBtn>
            </form>
         </Styles.ContainerForm>
      </Styles.Container>
   );
}

CashFlow.propTypes = {
   setStateRegisterCashFlow: PropTypes.func.isRequired
}
