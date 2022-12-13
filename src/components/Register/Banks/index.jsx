import { useFormik } from 'formik';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './validationSchema';
import { useEffect } from 'react';

export const RegisterBanks = ({ setStateRegister, setBanks, edit = {
   nomeConta: '',
   numeroBanco: '',
   contaCorrente: '',
   numeroConta: '',
   agencia: ''
} }) => {
   const [ load, setLoad ] = useState(false)
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const data = {
      nameOfAccount: edit.nomeConta,
      banckNumber: edit.numeroBanco,
      checkingAccount: edit.contaCorrente,
      numberAccount: edit.numeroConta,
      agency: edit.agencia,
   }

   const formik = useFormik({
      initialValues: data,
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            nomeConta: values.nameOfAccount,
            numeroBanco: values.banckNumber,
            contaCorrente: values.checkingAccount,
            numeroConta: values.numberAccount,
            agencia: values.agency,
         };

         try {
            await api.post('/cadastraBancos', data);
            const reqBanks = await api.get('/getAllBancos');
            setBanks(reqBanks.data)
            setPopUp({
               ...popUp,
               state: true,
               success: true,
               change: false
            })
         } catch (error) {
            if(error.response.status === 404) return setBanks([]);
            if(error.response.status) return setPopUp({
               state: true,
               success: false,
               txt: `${error.response.data.message}`
            })

            if(error) return setPopUp({
               state:true,
               success: false,
               txt:"Erro no sistema"
            })
         } finally {
            setLoad(false)
         }
      }
   });

   const handleEdit = async (e) => {
      e.preventDefault()

      setLoad(true)

      const data = {
         nomeConta: formik.values.nameOfAccount,
         numeroBanco: formik.values.banckNumber,
         contaCorrente: formik.values.checkingAccount,
         numeroConta: formik.values.numberAccount,
         agencia: formik.values.agency,
      };
      try {
         await api.put(`/updateBanco/${edit.id}`, data);
         const reqBanks = await api.get('/getAllBancos');
         setBanks(reqBanks.data)
         setPopUp({
            ...popUp,
            state: true,
            success: true,
            change: true
         })
      } catch (error) {
         if(error.response.status === 404) return setBanks([]);
         if(error.response.status) return setPopUp({
            state: true,
            success: false,
            txt: `${error.response.data.message}`
         })

         if(error) return setPopUp({
            state:true,
            success: false,
            txt:"Erro no sistema"
         })
      } finally {
         setLoad(false)
      }
   }

   return (
      <Styles.Container>
         <Styles.ContainerForm>
            <Styles.HeaderForm>
               <Styles.Title>
               {edit ? "Alterar Banco" : "Cadastro de Bancos"}
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegister(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form">
               {edit ? (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="nameOfAccount">Nome de conta:</label>
                           {formik.touched.nameOfAccount && formik.errors.nameOfAccount ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="nameOfAccount"
                                    values={formik.values.nameOfAccount}
                                    onChange={formik.handleChange}
                                    color="red"
                                    value={formik.values.nameOfAccount}
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="nameOfAccount"
                                    values={formik.values.nameOfAccount}
                                    onChange={formik.handleChange}
                                    color="black"
                                    value={formik.values.nameOfAccount}
                                 />
                              </>
                           )}
                           <p>{formik.errors.nameOfAccount}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="banckNumber">Número do banco:</label>
                           {formik.touched.banckNumber && formik.errors.banckNumber ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="banckNumber"
                                    values={formik.values.banckNumber}
                                    onChange={formik.handleChange}
                                    color="red"
                                    value={formik.values.banckNumber}
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="banckNumber"
                                    values={formik.values.banckNumber}
                                    onChange={formik.handleChange}
                                    color="black"
                                    value={formik.values.banckNumber}
                                 />
                              </>
                           )}
                           <p>{formik.errors.banckNumber}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="checkingAccount">Conta corrente:</label>
                           {formik.touched.checkingAccount && formik.errors.checkingAccount ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="checkingAccount"
                                    values={formik.values.checkingAccount}
                                    onChange={formik.handleChange}
                                    color="red"
                                    value={formik.values.checkingAccount}
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="checkingAccount"
                                    values={formik.values.checkingAccount}
                                    onChange={formik.handleChange}
                                    color="black"
                                    value={formik.values.checkingAccount}
                                 />
                              </>
                           )}
                           <p>{formik.errors.checkingAccount}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="numberAccount">Número da conta reduzido:</label>
                           {formik.touched.numberAccount && formik.errors.numberAccount ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="numberAccount"
                                    values={formik.values.numberAccount}
                                    onChange={formik.handleChange}
                                    color="red"
                                    value={formik.values.numberAccount}
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="numberAccount"
                                    values={formik.values.numberAccount}
                                    onChange={formik.handleChange}
                                    color="black"
                                    value={formik.values.numberAccount}
                                 />
                              </>
                           )}
                           <p>{formik.errors.numberAccount}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) : (
                           <Styles.BtnRegister type="submit" onClick={e => handleEdit(e)}>
                              Alterar bancos
                           </Styles.BtnRegister>
                        )}
                     </Styles.ContainerBtn>
                  </>
               ) : (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="nameOfAccount">Nome de conta:</label>
                           {formik.touched.nameOfAccount && formik.errors.nameOfAccount ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="nameOfAccount"
                                    values={formik.values.nameOfAccount}
                                    onChange={formik.handleChange}
                                    color="red"
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="nameOfAccount"
                                    values={formik.values.nameOfAccount}
                                    onChange={formik.handleChange}
                                    color="black"
                                 />
                              </>
                           )}
                           <p>{formik.errors.nameOfAccount}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="numberAccount">Número da conta reduzido:</label>
                           {formik.touched.numberAccount && formik.errors.numberAccount ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="numberAccount"
                                    values={formik.values.numberAccount}
                                    onChange={formik.handleChange}
                                    color="red"
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="numberAccount"
                                    values={formik.values.numberAccount}
                                    onChange={formik.handleChange}
                                    color="black"
                                 />
                              </>
                           )}
                           <p>{formik.errors.numberAccount}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="banckNumber">Número do banco:</label>
                           {formik.touched.banckNumber && formik.errors.banckNumber ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="banckNumber"
                                    values={formik.values.banckNumber}
                                    onChange={formik.handleChange}
                                    color="red"
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="banckNumber"
                                    values={formik.values.banckNumber}
                                    onChange={formik.handleChange}
                                    color="black"
                                 />
                              </>
                           )}
                           <p>{formik.errors.banckNumber}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="agency">Agência</label>
                           {formik.touched.agency && formik.errors.agency ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="agency"
                                    values={formik.values.agency}
                                    onChange={formik.handleChange}
                                    color="red"
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="agency"
                                    values={formik.values.agency}
                                    onChange={formik.handleChange}
                                    color="black"
                                 />
                              </>
                           )}
                           <p>{formik.errors.agency}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="checkingAccount">Conta corrente:</label>
                           {formik.touched.checkingAccount && formik.errors.checkingAccount ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="checkingAccount"
                                    values={formik.values.checkingAccount}
                                    onChange={formik.handleChange}
                                    color="red"
                                 />
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="checkingAccount"
                                    values={formik.values.checkingAccount}
                                    onChange={formik.handleChange}
                                    color="black"
                                 />
                              </>
                           )}
                           <p>{formik.errors.checkingAccount}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                           {load ? (
                              <Styles.BtnLoad>
                                 <Loader />
                              </Styles.BtnLoad>
                           ) : (
                              <Styles.BtnRegister type="submit" onClick={formik.handleSubmit}>
                                 Cadastrar bancos
                              </Styles.BtnRegister>
                           )}
                     </Styles.ContainerBtn>
                  </>
               )}
            </form>
         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} change={popUp.change} />}
      </Styles.Container>
   );
}

RegisterBanks.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setBanks: PropTypes.func.isRequired,
   edit: PropTypes.array,
}
