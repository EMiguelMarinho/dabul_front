import { useFormik } from 'formik';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './validationSchema';

export const RegisterFolders = ({ setStateRegister, setFolders, id }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         number: '',
         name: '',
         details: '',
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            numero: values.number,
            nome: values.name,
            detalhes: values.details,
         }

         try {
            await api.post('/cadastraPastas', data);
            const reqFolders = await api.get('/getAllPastas')
            setFolders(reqFolders.data)
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            })
         } catch (error) {
            if(error.response.status === 404) return setFolders([]);
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
         numero: formik.values.number,
         nome: formik.values.name,
         detalhes: formik.values.details,
      }

      try {
         await api.put(`/updatePasta/${id}`, data);
         const reqFolders = await api.get('/getAllPastas')
         setFolders(reqFolders.data)
         setPopUp({
            ...popUp,
            state: true,
            success: true,
         })
      } catch (error) {
         if(error.response.status === 404) return setFolders([]);
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
               {id ? "Alterar Pasta" : "Cadastro de Pastas"}
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegister(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form">
               {id ? (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='number'>Número:</label>
                           {formik.touched.number && formik.errors.number ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="number"
                                    name="number"
                                    placeholder="000000"
                                    color="red"
                                    values={formik.values.number}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.number}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="number"
                                    name="number"
                                    placeholder="000000"
                                    color="black"
                                    values={formik.values.number}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.number}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='name'>Nome:</label>
                           {formik.touched.name && formik.errors.name ?(
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="Amazon S.A.X"
                                    id="name"
                                    name="name"
                                    color="red"
                                    values={formik.values.name}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.name}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="Amazon S.A.X"
                                    id="name"
                                    name="name"
                                    color="black"
                                    values={formik.values.name}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.name}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.TextArea>
                        <Styles.ContainerInput>
                           <label htmlFor='details'>Detalhes:</label>
                           {formik.touched.details && formik.errors.details ? (
                              <>
                                 <Styles.TextAreaCamp
                                    id='details'
                                    name='details'
                                    color="red"
                                    values={formik.values.details}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.details}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.TextAreaCamp
                                    id='details'
                                    name='details'
                                    color="black"
                                    values={formik.values.details}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.details}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.TextArea>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) : (
                           <Styles.BtnRegister type="submit" onClick={handleEdit}>
                              Alterar pasta
                           </Styles.BtnRegister>
                        )}
                     </Styles.ContainerBtn>
                  </>
               ) : (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='number'>Número:</label>
                           {formik.touched.number && formik.errors.number ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="number"
                                    name="number"
                                    placeholder="000000"
                                    color="red"
                                    values={formik.values.number}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.number}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id="number"
                                    name="number"
                                    placeholder="000000"
                                    color="black"
                                    values={formik.values.number}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.number}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='name'>Nome:</label>
                           {formik.touched.name && formik.errors.name ?(
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="Amazon S.A.X"
                                    id="name"
                                    name="name"
                                    color="red"
                                    values={formik.values.name}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.name}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="Amazon S.A.X"
                                    id="name"
                                    name="name"
                                    color="black"
                                    values={formik.values.name}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.name}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.TextArea>
                        <Styles.ContainerInput>
                           <label htmlFor='details'>Detalhes:</label>
                           {formik.touched.details && formik.errors.details ? (
                              <>
                                 <Styles.TextAreaCamp
                                    id='details'
                                    name='details'
                                    color="red"
                                    values={formik.values.details}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.details}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.TextAreaCamp
                                    id='details'
                                    name='details'
                                    color="black"
                                    values={formik.values.details}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.details}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.TextArea>

                     <Styles.ContainerBtn>
                           {load ? (
                              <Styles.BtnLoad>
                                 <Loader />
                              </Styles.BtnLoad>
                           ) : (
                              <Styles.BtnRegister type="submit" onClick={formik.handleSubmit}>
                                 Cadastrar pasta
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

RegisterFolders.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setFolders: PropTypes.func.isRequired,
   id: PropTypes.string,
}
