import { useFormik } from 'formik';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './validationSchema';

export const RegisterPaymentMethods = ({ setStateRegister, setPaymentMethods, id }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         paymentsMethods: '',
         status: 'ativo'
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            metodo: values.paymentsMethods,
            status: values.status,
         }

         try {
            await api.post('/cadastraFormaPagamento', data)
            const reqPaymentMethods = await api.get('/getAllFormaPagamento');
            setPaymentMethods(reqPaymentMethods.data);
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            });
         } catch (error) {
            if(error.status === 404) return setPaymentMethods([]);
            if(error.response.status === 422) return setPopUp({
               state: true,
               success: false,
               txt: `${error.response.data.message}`
            })

            if(error) return setPopUp({
               state:true,
               success: false,
               txt: "Erro no sistema"
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
         metodo: formik.values.paymentsMethods,
         status: formik.values.status,
      }

      try {
         await api.put(`/updateFormaPagamento/${id}`, data)
         const reqPaymentMethods = await api.get('/getAllFormaPagamento');
         setPaymentMethods(reqPaymentMethods.data);
         setPopUp({
            ...popUp,
            state: true,
            success: true,
         });
      } catch (error) {
         if(error.status === 404) return setPaymentMethods([]);
         if(error.response.status === 422) return setPopUp({
            state: true,
            success: false,
            txt: `${error.response.data.message}`
         })

         if(error) return setPopUp({
            state:true,
            success: false,
            txt: "Erro no sistema"
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
                  {id ? "Alterar Forma de pagamento" : "Cadastro de Formas de pagamento"}
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegister(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form" onSubmit={formik.handleSubmit}>
               {id ? (
                  <>
                     <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="paymentsMethods">Formas de pagamento:</label>
                     {formik.touched.paymentsMethods && formik.errors.paymentsMethods ? (
                        <Styles.InputCamp
                           type="text"
                           id="paymentsMethods"
                           values={formik.values.paymentsMethods}
                           onChange={formik.handleChange}
                           color="red"
                           placeholder="Digite a forma de pagamento"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="paymentsMethods"
                           values={formik.values.paymentsMethods}
                           onChange={formik.handleChange}
                           color="black"
                           placeholder="Digite a forma de pagamento"
                        />
                     )}
                     <p>{formik.errors.paymentsMethods}</p>
                  </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="status">Status:</label>
                           {formik.touched.status && formik.errors.status ? (
                                 <Styles.SelectCamp name="status" id="status" values={formik.values.status} onChange={formik.handleChange} color="red">
                                    <option value='ativo' selected>Ativo</option>
                                    <option value='inativo'>Inativo</option>
                                 </Styles.SelectCamp>

                           ) : (
                              <Styles.SelectCamp name="status" id="status" values={formik.values.status} onChange={formik.handleChange} color="black">
                                 <option value='ativo' selected>Ativo</option>
                                 <option value='inativo'>Inativo</option>
                              </Styles.SelectCamp>

                           )}
                           <p>{formik.errors.status}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                           {load ? (
                              <Styles.BtnLoad>
                                 <Loader />
                              </Styles.BtnLoad>
                           ) : (
                              <Styles.BtnRegister type="submit" onClick={handleEdit}>
                                 Alterar forma de pagamento
                              </Styles.BtnRegister>
                           )}
                     </Styles.ContainerBtn>
                  </>
               ) : (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="paymentsMethods">Formas de pagamento:</label>
                           {formik.touched.paymentsMethods && formik.errors.paymentsMethods ? (
                              <Styles.InputCamp
                                 type="text"
                                 id="paymentsMethods"
                                 values={formik.values.paymentsMethods}
                                 onChange={formik.handleChange}
                                 color="red"
                                 placeholder="Digite a forma de pagamento"
                              />
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 id="paymentsMethods"
                                 values={formik.values.paymentsMethods}
                                 onChange={formik.handleChange}
                                 color="black"
                                 placeholder="Digite a forma de pagamento"
                              />
                           )}
                           <p>{formik.errors.paymentsMethods}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="status">Status:</label>
                           {formik.touched.status && formik.errors.status ? (
                                 <Styles.SelectCamp name="status" id="status" values={formik.values.status} onChange={formik.handleChange} color="red">
                                    <option value='ativo' selected>Ativo</option>
                                    <option value='inativo'>Inativo</option>
                                 </Styles.SelectCamp>

                           ) : (
                              <Styles.SelectCamp name="status" id="status" values={formik.values.status} onChange={formik.handleChange} color="black">
                                 <option value='ativo' selected>Ativo</option>
                                 <option value='inativo'>Inativo</option>
                              </Styles.SelectCamp>

                           )}
                           <p>{formik.errors.status}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                           {load ? (
                              <Styles.BtnLoad>
                                 <Loader />
                              </Styles.BtnLoad>
                           ) : (
                              <Styles.BtnRegister type="submit">
                                 Cadastrar tipo de pagamento
                              </Styles.BtnRegister>
                           )}
                     </Styles.ContainerBtn>
                  </>
               )}
            </form>
         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} />}
      </Styles.Container>
   );
}

RegisterPaymentMethods.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setPaymentMethods: PropTypes.func.isRequired,
   id: PropTypes.string
}
