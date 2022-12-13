import { useFormik } from 'formik';
import PropTypes from 'prop-types'
import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './schemaValidation';

export const RegisterUsers = ({ setStateRegister, setUsers, id }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         login: '',
         nome: '',
         senha: '',
         confirmSenha: '',
         email: ''
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            login: values.login,
            nome: values.nome,
            senha: values.senha,
            email: values.email
         };

         try {
            await api.post('/cadastraUsuarios', data);
            const reqUsers = await api.get('/getAllUsuarios');
            setUsers(reqUsers.data);
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            });
         } catch (error) {
            if(error.response.status === 404) return setUsers([]);
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
      },
   });

   const handleEdit = async (e) => {
      e.preventDefault()

      setLoad(true)

      const data = {
         login: formik.values.login,
         nome: formik.values.nome,
         senha: formik.values.senha,
      }
      try {
         await api.put(`/updateUsuario/${id}`, data);
         const reqUsers = await api.get('/getAllUsuarios');
         setUsers(reqUsers.data);
         setPopUp({
            state: true,
            success: true,
            change: true
         })
      } catch (error) {
         if(error.response.status === 404) return setUsers([]);
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
                  {id ? "Alterar usuário" : "Cadastro de usuário" }
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
                           <label htmlFor='login'>Login:</label>
                           {formik.touched.login && formik.errors.login ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='login'
                                    name='login'
                                    placeholder="Inserir um login"
                                    onChange={formik.handleChange}
                                    values={formik.values.login}
                                    color="red"
                                 />
                                 <p>{formik.errors.login}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='login'
                                    name='login'
                                    placeholder="Inserir um login"
                                    onChange={formik.handleChange}
                                    values={formik.values.login}
                                    color="black"
                                 />
                                 <p>{formik.errors.login}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='nome'>Nome:</label>
                           {formik.touched.nome && formik.errors.nome ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='nome'
                                    name='nome'
                                    placeholder="Inserir um nome"
                                    onChange={formik.handleChange}
                                    values={formik.values.nome}
                                    color="red"
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='nome'
                                    name='nome'
                                    placeholder="Inserir um nome"
                                    onChange={formik.handleChange}
                                    values={formik.values.nome}
                                    color="black"
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='senha'>Senha:</label>
                           {formik.touched.senha && formik.errors.senha ? (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='senha'
                                    name='senha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.senha}
                                    color="red"
                                 />
                                 <p>{formik.errors.senha}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='senha'
                                    name='senha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.senha}
                                    color="black"
                                 />
                                 <p>{formik.errors.senha}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='confirmSenha'>Confirmação de senha:</label>
                           {formik.touched.confirmSenha && formik.errors.confirmSenha ? (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='confirmSenha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.confirmSenha}
                                    color="red"
                                 />
                                 <p>{formik.errors.confirmSenha}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='confirmSenha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.confirmSenha}
                                    color="black"
                                 />
                                 <p>{formik.errors.confirmSenha}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) :
                        <Styles.BtnRegister type="submit" onClick={handleEdit}>
                           Alterar usuário
                        </Styles.BtnRegister>
                        }
                     </Styles.ContainerBtn>
                  </>
               ) : (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='login'>Login:</label>
                           {formik.touched.login && formik.errors.login ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='login'
                                    name='login'
                                    placeholder="Inserir um login"
                                    onChange={formik.handleChange}
                                    values={formik.values.login}
                                    color="red"
                                 />
                                 <p>{formik.errors.login}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='login'
                                    name='login'
                                    placeholder="Inserir um login"
                                    onChange={formik.handleChange}
                                    values={formik.values.login}
                                    color="black"
                                 />
                                 <p>{formik.errors.login}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='nome'>Nome:</label>
                           {formik.touched.nome && formik.errors.nome ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='nome'
                                    name='nome'
                                    placeholder="Inserir um nome"
                                    onChange={formik.handleChange}
                                    values={formik.values.nome}
                                    color="red"
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    id='nome'
                                    name='nome'
                                    placeholder="Inserir um nome"
                                    onChange={formik.handleChange}
                                    values={formik.values.nome}
                                    color="black"
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='senha'>Senha:</label>
                           {formik.touched.senha && formik.errors.senha ? (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='senha'
                                    name='senha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.senha}
                                    color="red"
                                 />
                                 <p>{formik.errors.senha}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='senha'
                                    name='senha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.senha}
                                    color="black"
                                 />
                                 <p>{formik.errors.senha}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='confirmSenha'>Confirmação de senha:</label>
                           {formik.touched.confirmSenha && formik.errors.confirmSenha ? (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='confirmSenha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.confirmSenha}
                                    color="red"
                                 />
                                 <p>{formik.errors.confirmSenha}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="password"
                                    id='confirmSenha'
                                    placeholder="***************"
                                    onChange={formik.handleChange}
                                    values={formik.values.confirmSenha}
                                    color="black"
                                 />
                                 <p>{formik.errors.confirmSenha}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label>Email:</label>
                           {formik.touched.email && formik.errors.email ? (
                              <>
                                 <Styles.InputCamp
                                    type="email"
                                    id='email'
                                    name='email'
                                    placeholder="exemplo@exemplo.com"
                                    onChange={formik.handleChange}
                                    values={formik.values.email}
                                    color="red"
                                 />
                                 <p>{formik.errors.email}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="email"
                                    id='email'
                                    name='email'
                                    placeholder="exemplo@exemplo.com"
                                    onChange={formik.handleChange}
                                    values={formik.values.email}
                                    color="black"
                                 />
                                 <p>{formik.errors.email}</p>
                              </>
                           )}
                           </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad>
                              <Loader />
                           </Styles.BtnLoad>
                        ) :
                        <Styles.BtnRegister type="submit" onClick={formik.handleSubmit}>
                           Cadastrar usuário
                        </Styles.BtnRegister>
                        }
                     </Styles.ContainerBtn>
                  </>
               )}
            </form>
         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} />}
      </Styles.Container>
   );
}

RegisterUsers.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setUsers: PropTypes.func.isRequired,
   id: PropTypes.string
}
