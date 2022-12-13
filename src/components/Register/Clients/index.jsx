import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';
import api from '../../../services/api';
import * as Styles from './styles';
import { schema } from '../Clients/schemaValidation';

export const RegisterClients = ({ setStateRegister, setClients, id, groupBills }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      change: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         tipo: 'Física',
         conta: '',
         cpfCnpj: '',
         contaResultado: '',
         nome: '',
         telefone: '',
         endereco: '',
         email: '',
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            tipo: values.tipo,
            conta: values.conta,
            cpfCnpj: values.cpfCnpj,
            contaResultado: values.contaResultado,
            nome: values.nome,
            telefone: values.telefone,
         };

         try {
            await api.post('/cadastraClientes', data);
            const reqClients = await api.get('/getAllClientes');
            setClients(reqClients.data);
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            });
         } catch (error) {
            if(error.response.status === 404) return setClients([]);
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
         tipo: formik.values.tipo,
         nome: formik.values.nome,
         email: formik.values.email
      }
      try {
         await api.put(`/updateCliente/${id}`, data)
         const reqClients = await api.get('/getAllClientes');
         setClients(reqClients.data);
         setPopUp({
            state: true,
            success: true,
            change: true
         })
      } catch (error) {
         if(error.response.status === 404) return setClients([]);
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
                  {id ? "Alterar Cliente" : "Cadastro de Clientes"}
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
                           <label htmlFor='tipo'>Tipo:</label>
                           {formik.touched.tipo && formik.errors.tipo ? (
                              <>
                                 <Styles.SelectCamp name="tipo" id='tipo' color="red" values={formik.values.tipo} onChange={formik.handleChange}>
                                    <option value='Física' selected>Física</option>
                                    <option value='Jurídica'>Jurídica</option>
                                 </Styles.SelectCamp>
                              </>
                           ) : (
                              <>
                                 <Styles.SelectCamp name="tipo" id='tipo' color="black" values={formik.values.tipo} onChange={formik.handleChange}>
                                    <option value='Física' selected>Física</option>
                                    <option value='Jurídica'>Jurídica</option>
                                 </Styles.SelectCamp>
                              </>
                           )}
                           <p>{formik.errors.tipo}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='nome'>Nome:</label>
                           {formik.touched.nome && formik.errors.nome ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="Ex: José Carlos"
                                    id='nome'
                                    name='nome'
                                    color="red"
                                    values={formik.values.nome}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="Ex: José Carlos"
                                    id='nome'
                                    name='nome'
                                    color="black"
                                    values={formik.values.nome}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='email'>Email:</label>
                           {formik.touched.email && formik.errors.email ? (
                              <>
                                 <Styles.InputCamp
                                    type="email"
                                    id='email'
                                    name='email'
                                    values={formik.values.email}
                                    onChange={formik.handleChange}
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
                                    values={formik.values.email}
                                    onChange={formik.handleChange}
                                    color="black"
                                 />
                                 <p>{formik.errors.email}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad disabled>
                              <Loader />
                           </Styles.BtnLoad>
                        ) :
                           <Styles.BtnRegister type="submit" onClick={e => handleEdit(e)}>
                              Alterar Cliente
                           </Styles.BtnRegister>
                        }
                     </Styles.ContainerBtn>
                  </>
               ) : (
                  <>
                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='tipo'>Tipo:</label>
                           {formik.touched.tipo && formik.errors.tipo ? (
                              <>
                                 <Styles.SelectCamp name="tipo" id='tipo' color="red" values={formik.values.tipo} onChange={formik.handleChange}>
                                    <option value='Física' selected>Física</option>
                                    <option value='Jurídica'>Jurídica</option>
                                 </Styles.SelectCamp>
                              </>
                           ) : (
                              <>
                                 <Styles.SelectCamp name="tipo" id='tipo' color="black" values={formik.values.tipo} onChange={formik.handleChange}>
                                    <option value='Física' selected>Física</option>
                                    <option value='Jurídica'>Jurídica</option>
                                 </Styles.SelectCamp>
                              </>
                           )}
                           <p>{formik.errors.tipo}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor="group">Conta:</label>
                           {formik.touched.group && formik.errors.group ? (
                              <Styles.SelectCamp name="group" id="group" values={formik.values.group} onChange={formik.handleChange} color="red" >
                                 <option value='' selected>Selecione</option>
                                 {groupBills.map(group => {
                                    return <option key={group.id} value={group.nomeGrupo}>{group.nomeGrupo}</option>
                                 })}
                              </Styles.SelectCamp>
                           ) : (
                              <Styles.SelectCamp name="group" id="group" values={formik.values.group} onChange={formik.handleChange} color="black" >
                                 <option value='' selected>Selecione</option>
                                 {groupBills.map(group => {
                                    return <option key={group.id} value={group.nomeGrupo}>{group.nomeGrupo}</option>
                                 })}
                              </Styles.SelectCamp>
                           )}
                           <p>{formik.errors.group}</p>
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='cpfCnpj'>CPF ou CNPJ:</label>
                           {formik.touched.cpfCnpj && formik.errors.cpfCnpj ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    name="cpfCnpj"
                                    id="cpfCnpj"
                                    placeholder="XX.XXX.XXX/0001-XX"
                                    values={formik.values.cpfCnpj}
                                    onChange={formik.handleChange}
                                    color="red"
                                 />
                                 <p>{formik.errors.cpfCnpj}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    name="cpfCnpj"
                                    id="cpfCnpj"
                                    placeholder="XX.XXX.XXX/0001-XX"
                                    values={formik.values.cpfCnpj}
                                    onChange={formik.handleChange}
                                    color="black"
                                 />
                                 <p>{formik.errors.cpfCnpj}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='contaResultado'>Conta resultado:</label>
                           {formik.touched.contaResultado && formik.errors.contaResultado ? (
                              <>
                                 <Styles.SelectCamp name='contaResultado' id='contaResultado' color="red" values={formik.values.contaResultado}onChange={formik.handleChange}>
                                    <option value='' selected>Selecione</option>
                                 </Styles.SelectCamp>
                              </>
                           ) : (
                              <>
                                 <Styles.SelectCamp
                                    type="text"
                                    name='contaResultado'
                                    id='contaResultado'
                                    color="black"
                                    values={formik.values.contaResultado}
                                    onChange={formik.handleChange}>
                                 </Styles.SelectCamp>
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
                                    placeholder="Ex: José Carlos"
                                    id='nome'
                                    name='nome'
                                    color="red"
                                    values={formik.values.nome}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           ) : (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="Ex: José Carlos"
                                    id='nome'
                                    name='nome'
                                    color="black"
                                    values={formik.values.nome}
                                    onChange={formik.handleChange}
                                 />
                                 <p>{formik.errors.nome}</p>
                              </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.Input>
                        <Styles.ContainerInput>
                           <label htmlFor='telefone'>Telefone:</label>
                           {formik.touched.telefone && formik.errors.telefone ? (
                              <>
                                 <Styles.InputCamp
                                    type="text"
                                    placeholder="(99) 99999-9999"
                                    id='telefone'
                                    name='telefone'
                                    values={formik.values.telefone}
                                    onChange={formik.handleChange}
                                    color="red"
                                 />
                                 <p>{formik.errors.telefone}</p>
                              </>
                           ) : (
                              <>
                              <Styles.InputCamp
                                 type="text"
                                 placeholder="(99) 99999-9999"
                                 id='telefone'
                                 name='telefone'
                                 values={formik.values.telefone}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                              <p>{formik.errors.telefone}</p>
                           </>
                           )}
                        </Styles.ContainerInput>
                     </Styles.Input>

                     <Styles.ContainerBtn>
                        {load ? (
                           <Styles.BtnLoad disabled>
                              <Loader />
                           </Styles.BtnLoad>
                        ) :
                           <Styles.BtnRegister type="submit" onClick={formik.handleSubmit}>
                              Cadastrar cliente
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

RegisterClients.propTypes = {
   setStateRegister: PropTypes.func,
   setClients: PropTypes.func.isRequired,
   id: PropTypes.string,
   groupBills: PropTypes.array.isRequired,
}
