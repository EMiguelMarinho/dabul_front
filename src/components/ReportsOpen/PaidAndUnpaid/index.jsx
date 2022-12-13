import PropTypes from 'prop-types';

import { TiDeleteOutline } from 'react-icons/ti';

import * as Styles from './styles';

import api from '../../../services/api';

export const PaidAndUnpaid = ({ setStateRegisterPaidAndUnpaid }) => {
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
                  Relátio de Lançamentos Pagos e Não Pagos
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegisterPaidAndUnpaid(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form">
               <Styles.Input>
                  <Styles.TitleInput>
                     Pagamento
                  </Styles.TitleInput>

                  <Styles.ContainerDivDesc>
                     <Styles.ContainerInput>
                        <label>Status:</label>
                        <select>
                           <option value="ativo">Ativo</option>
                        </select>
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Fornecedor:</label>
                        <select>
                           <option value="todos">Todos</option>
                        </select>
                     </Styles.ContainerInput>
                  </Styles.ContainerDivDesc>

                  <Styles.ContainerDivDesc>
                     <Styles.ContainerInput>
                        <label>Cliente:</label>
                        <select>
                           <option value="todos">Todos</option>
                        </select>
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Contas:</label>
                        <select>
                           <option value="todos">Todos</option>
                        </select>
                     </Styles.ContainerInput>
                  </Styles.ContainerDivDesc>

                  <Styles.ContainerDivDesc>
                     <Styles.ContainerInput>
                        <label>Grupo de contas:</label>
                        <select>
                           <option value="todos">Todos</option>
                        </select>
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Pasta:</label>
                        <select>
                           <option value="todos">Todos</option>
                        </select>
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

PaidAndUnpaid.propTypes = {
   setStateRegisterPaidAndUnpaid: PropTypes.func.isRequired
}
