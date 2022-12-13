import { useFormik } from 'formik';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './schemaValidation';

export const RegisterTypesReceives = ({ setStateRegister, setTypesReceipts, id }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      change: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         type: '',
         account: ''
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            tipo: values.type,
            status: values.account,
         };

         try {
            await api.post('/createTipoRecebimento', data);
            const reqTypesReceipts = await api.get('/getAllTiposRecebimentos');
            console.log(data)
            setTypesReceipts(reqTypesReceipts.data)
            setPopUp({
               state: true,
               success: true,
               change: false
            });
         } catch (error) {
            if(error.response.status === 404) return setBanks([]);
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
   })

   const handleEdit = async (e) => {
      e.preventDefault()

      setLoad(true)

      const data = {
         tipo: formik.values.type,
         status: formik.values.account,
      };

      try {
         await api.put(`/updateTipoRecebimento/${id}`, data);
         const reqTypesReceipts = await api.get('/getAllTiposRecebimentos');
         console.log(data)
         setTypesReceipts(reqTypesReceipts.data)
         setPopUp({
            state: true,
            success: true,
            change: false
         });
      } catch (error) {
         if(error.response.status === 404) return setBanks([]);
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
                  {id ? "Alterar Recebimento" : "Cadastro de Recebimento" }
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
                           <label htmlFor="type">Tipo:</label>
                           {formik.errors.type ? (
                              <Styles.InputCamp
                                 type="text"
                                 name="type"
                                 id="type"
                                 color="red"
                                 values={formik.values.type}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 name="type"
                                 id="type"
                                 color="black"
                                 values={formik.values.type}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           )}
                           <p>{formik.errors.type}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='account'>Conta:</label>
                           {formik.errors.account ? (
                              <Styles.InputCamp
                                 type="text"
                                 name="account"
                                 id="account"
                                 color="red"
                                 values={formik.values.account}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 name="account"
                                 id="account"
                                 color="black"
                                 values={formik.values.account}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           )}
                           <p>{formik.errors.account}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) :
                           <Styles.BtnRegister type="submit" onClick={e => handleEdit(e)}>
                              Alterar tipo de recebimento
                           </Styles.BtnRegister>
                        }
                     </Styles.ContainerBtn>
                  </>
               ) : (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="type">Tipo:</label>
                           {formik.errors.type ? (
                              <Styles.InputCamp
                                 type="text"
                                 name="type"
                                 id="type"
                                 color="red"
                                 values={formik.values.type}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 name="type"
                                 id="type"
                                 color="black"
                                 values={formik.values.type}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           )}
                           <p>{formik.errors.type}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='account'>Conta:</label>
                           {formik.errors.account ? (
                              <Styles.InputCamp
                                 type="text"
                                 name="account"
                                 id="account"
                                 color="red"
                                 values={formik.values.account}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 name="account"
                                 id="account"
                                 color="black"
                                 values={formik.values.account}
                                 onChange={formik.handleChange}
                              >
                              </Styles.InputCamp>
                           )}
                           <p>{formik.errors.account}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) :
                           <Styles.BtnRegister type="submit" onClick={formik.handleSubmit}>
                              Cadastrar tipo de recebimento
                           </Styles.BtnRegister>
                        }
                     </Styles.ContainerBtn>
                  </>
               )}
            </form>
         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} change={popUp.change} />}
      </Styles.Container>
   );
}


RegisterTypesReceives.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setTypesReceipts: PropTypes.func.isRequired,
   id: PropTypes.string
}
