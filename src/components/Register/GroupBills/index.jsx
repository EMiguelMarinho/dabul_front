import { useFormik } from 'formik';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './validationSchema';

export const RegisterGroupBills = ({ setStateRegister, setGroupBills, id }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         nameOfAccountGroups: '',
         order: ''
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true);

         const data = {
            nomeGrupo: values.nameOfAccountGroups,
            ordem: values.order
         }

         try {
            await api.post('/cadastraGrupoContas', data)
            const reqGroupBills = await api.get('/getAllGrupoContas');
            setGroupBills(reqGroupBills.data)
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            })
         } catch (error) {
            if(error.response.status === 404) return setGroupBills([]);
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

      setLoad(true);

      const data = {
         nomeGrupo: formik.values.nameOfAccountGroups,
         ordem: formik.values.order
      }

      try {
         await api.put(`/updateGrupoConta/${id}`, data)
         const reqGroupBills = await api.get('/getAllGrupoContas');
         setGroupBills(reqGroupBills.data)
         setPopUp({
            ...popUp,
            state: true,
            success: true,
         })
      } catch (error) {
         if(error.response.status === 404) return setGroupBills([]);
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
               {id ? "Alterar Grupo de Conta" : "Cadastro do Grupo de Contas"}
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
                     <label htmlFor="nameOfAccountGroups">Nome do grupo de contas:</label>
                     {formik.touched.nameOfAccountGroups && formik.errors.nameOfAccountGroups ? (
                        <Styles.InputCamp
                           type="text"
                           id="nameOfAccountGroups"
                           values={formik.values.nameOfAccountGroups}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="nameOfAccountGroups"
                           values={formik.values.nameOfAccountGroups}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.nameOfAccountGroups}</p>
                  </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="order">Ordem:</label>
                           {formik.touched.order && formik.errors.order ? (
                              <Styles.InputCamp
                                 type="text"
                                 id="order"
                                 name="order"
                                 values={formik.values.order}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 id="order"
                                 name="order"
                                 values={formik.values.order}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           )}
                           <p>{formik.errors.order}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) : (
                           <Styles.BtnRegister type="submit" onClick={handleEdit}>
                              Alterar conta
                           </Styles.BtnRegister>
                        )}
                     </Styles.ContainerBtn>
                  </>
               ) : (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="nameOfAccountGroups">Nome do grupo de contas:</label>
                           {formik.touched.nameOfAccountGroups && formik.errors.nameOfAccountGroups ? (
                              <Styles.InputCamp
                                 type="text"
                                 id="nameOfAccountGroups"
                                 values={formik.values.nameOfAccountGroups}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 id="nameOfAccountGroups"
                                 values={formik.values.nameOfAccountGroups}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           )}
                           <p>{formik.errors.nameOfAccountGroups}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="order">Ordem:</label>
                           {formik.touched.order && formik.errors.order ? (
                              <Styles.InputCamp
                                 type="text"
                                 id="order"
                                 name="order"
                                 values={formik.values.order}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           ) : (
                              <Styles.InputCamp
                                 type="text"
                                 id="order"
                                 name="order"
                                 values={formik.values.order}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           )}
                           <p>{formik.errors.order}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) : (
                           <Styles.BtnRegister type="submit" onClick={formik.handleSubmit}>
                              Cadastrar conta
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

RegisterGroupBills.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setGroupBills: PropTypes.func.isRequired,
   id: PropTypes.string
}
