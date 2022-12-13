import { useFormik } from 'formik';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './schemaValidate';

export const RegisterProvider = ({ setStateRegister, setProviders, groupBills }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         cpfCnpj: '',
         nome: '',
         telefone: '',
         group: '',
         contaResultado: ''
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            cpfCnpj: values.cpfCnpj,
            nome: values.nome,
            telefone: values.telefone,
            conta: values.group,
            contaResultado: values.contaResultado
         }

         try {
            await api.post('/cadastraFornecedores', data);
            const reqProviders = await api.get('/getAllFornecedores');
            setProviders(reqProviders.data)
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            });
         } catch (error) {
            if(error.response.status === 404) return setProviders([]);
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

   return (
      <Styles.Container>
         <Styles.ContainerForm>
            <Styles.HeaderForm>
               <Styles.Title>
                  Cadastrar fornecedor
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegister(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form" onSubmit={formik.handleSubmit}>
               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor='cpfCnpj'>CPF ou CNPJ:</label>
                     {formik.touched.cpfCnpj && formik.errors.cpfCnpj ? (
                        <>
                           <Styles.InputCamp
                              type="text"
                              id="cpfCnpj"
                              name="cpfCnpj"
                              placeholder="XX.XXX.XXX/0001-XX"
                              color="red"
                              values={formik.values.cpfCnpj}
                              onChange={formik.handleChange}
                           />
                           <p>{formik.errors.cpfCnpj}</p>
                        </>
                     ) : (
                        <>
                           <Styles.InputCamp
                              type="text"
                              id="cpfCnpj"
                              name="cpfCnpj"
                              placeholder="XX.XXX.XXX/0001-XX"
                              color="black"
                              values={formik.values.cpfCnpj}
                              onChange={formik.handleChange}
                           />
                           <p>{formik.errors.cpfCnpj}</p>
                        </>
                     )}
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor='nome'>Nome:</label>
                     {formik.touched.nome && formik.errors.nome ?(
                        <>
                           <Styles.InputCamp
                              type="text"
                              placeholder="Amazon S.A.X"
                              id="nome"
                              name="nome"
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
                              placeholder="Amazon S.A.X"
                              id="nome"
                              name="nome"
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
                     <label htmlFor="telefone">Telefone:</label>
                     {formik.touched.telefone && formik.errors.telefone ? (
                        <>
                           <Styles.InputCamp
                              type="text"
                              placeholder="(99) 99999-9999"
                              id="telefone"
                              name="telefone"
                              color="red"
                              values={formik.values.telefone}
                              onChange={formik.handleChange}
                           />
                           <p>{formik.errors.telefone}</p>
                        </>
                     ) : (
                        <>
                           <Styles.InputCamp
                              type="text"
                              placeholder="(99) 99999-9999"
                              id="telefone"
                              name="telefone"
                              color="black"
                              values={formik.values.telefone}
                              onChange={formik.handleChange}
                           />
                           <p>{formik.errors.telefone}</p>
                        </>
                     )}
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
                     <label htmlFor='contaResultado'>Conta Resultado:</label>
                     {formik.touched.contaResultado && formik.errors.contaResultado ? (
                        <>
                           <Styles.InputCamp
                              type="text"
                              name="contaResultado"
                              id="contaResultado"
                              color="red"
                              onChange={formik.handleChange}
                              values={formik.values.contaResultado}>
                           </Styles.InputCamp>
                           <p>{formik.errors.contaResultado}</p>
                        </>
                     ) : (
                        <>
                           <Styles.InputCamp
                              type="text"
                              name="contaResultado"
                              id="contaResultado"
                              color="black"
                              onChange={formik.handleChange}
                              values={formik.values.contaResultado}>
                           </Styles.InputCamp>
                           <p>{formik.errors.contaResultado}</p>
                        </>
                     )}
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.ContainerBtn>
                     {load ? (
                        <Styles.BtnLoad>
                           <Loader />
                        </Styles.BtnLoad>
                     ) : (
                        <Styles.BtnRegister type='submit'>
                           Cadastrar fornecedor
                        </Styles.BtnRegister>
                     )}
               </Styles.ContainerBtn>
            </form>
         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} />}
      </Styles.Container>
   );
}

RegisterProvider.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setProviders: PropTypes.func.isRequired,
   groupBills: PropTypes.array.isRequired,
}
