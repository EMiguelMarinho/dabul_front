import PropTypes from 'prop-types';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import * as Styles from './styles';

import { useFormik } from 'formik';

import { useState } from 'react';

import { schema } from './validationSchema';

import api from '../../../services/api';

export const RegisterBills = ({ setStateRegister, setBills, groupBills }) => {
   const [ load, setLoad ] = useState(false)
   const [ inputOrder, setInputOrder ] = useState('');
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         numberAccount: '',
         name: '',
         reducedAccountNumber: '',
         group: '',
         order: '',
         patternHistory: '',
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            numeroConta: values.numberAccount,
            nome: values.name,
            numeroContaReduzida: values.reducedAccountNumber,
            grupo: values.group,
            ordem: values.order,
            historicoPadrao: values.patternHistory,
         };

         try {
            await api.post('/cadastraContas', data)
            const reqBills = await api.get('/getAllContas')
            setBills(reqBills.data)
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            })
         } catch (error) {
            if(error.status === 404) return setBills([]);
            if(error.response.status === 422) return setPopUp({
               state: true,
               success: false,
               txt: `${error.response.data.message}`
            });

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

   const handleInputOrder = () => {
      if(formik.values.group === '') return setInputOrder('')
      const bill = groupBills.filter( bill => {
         return bill.nomeGrupo === formik.values.group
      })

      const input = bill[0].ordem

      formik.values.order = input;
      return setInputOrder(input)
   }

   return (
      <Styles.Container>
         <Styles.ContainerForm>
            <Styles.HeaderForm>
               <Styles.Title>
                  Cadastro de Contas
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegister(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form" onSubmit={formik.handleSubmit}>
               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="numberAccount">Número da conta:</label>
                     {formik.touched.numberAccount && formik.errors.numberAccount ? (
                        <Styles.InputCamp
                           type="text"
                           id="numberAccount"
                           values={formik.values.numberAccount}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="numberAccount"
                           values={formik.values.numberAccount}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.numberAccount}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="name">Nome:</label>
                     {formik.touched.name && formik.errors.name ? (
                        <Styles.InputCamp
                           type="text"
                           id="name"
                           values={formik.values.name}
                           onChange={formik.handleChange}
                           placeholder="Ex: José Carlos"
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="name"
                           values={formik.values.name}
                           onChange={formik.handleChange}
                           placeholder="Ex: José Carlos"
                           color="black"
                        />
                     )}
                     <p>{formik.errors.name}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="reducedAccountNumber">N° da conta reduzida:</label>
                     {formik.touched.reducedAccountNumber && formik.errors.reducedAccountNumber ? (
                        <Styles.InputCamp
                           type="text"
                           id="reducedAccountNumber"
                           values={formik.values.reducedAccountNumber}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="reducedAccountNumber"
                           values={formik.values.reducedAccountNumber}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.reducedAccountNumber}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="group">Grupo:</label>
                     {formik.touched.group && formik.errors.group ? (
                        <Styles.SelectCamp name="group" id="group" values={formik.values.group} onChange={formik.handleChange} color="red" >
                           <option value='' selected>Selecione</option>
                           {groupBills.map(group => {
                              return <option key={group.id} value={group.nomeGrupo}>{group.nomeGrupo}</option>
                           })}
                        </Styles.SelectCamp>
                     ) : (
                        <Styles.SelectCamp name="group" id="group" onClick={handleInputOrder} values={formik.values.group} onChange={formik.handleChange} color="black" >
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
                     <label htmlFor="order">Ordem:</label>
                     {formik.touched.order && formik.errors.order ? (
                        <Styles.InputCamp
                           type="text"
                           id="order"
                           value={inputOrder}
                           color="red"
                           disabled
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="order"
                           value={inputOrder}
                           color="black"
                           disabled
                        />
                     )}
                     <p>{formik.errors.order}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="patternHistory">Histórico padrão:</label>
                     {formik.touched.patternHistory && formik.errors.patternHistory ? (
                        <Styles.InputCamp
                           type="text"
                           id="patternHistory"
                           name="patternHistory"
                           values={formik.values.patternHistory}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="patternHistory"
                           name="patternHistory"
                           values={formik.values.patternHistory}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.patternHistory}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.ContainerBtn>
                     {load ? (
                        <Styles.BtnLoad>
                           <Loader />
                        </Styles.BtnLoad>
                     ) : (
                        <Styles.BtnRegister type="submit">
                           Cadastrar Conta
                        </Styles.BtnRegister>
                     )}
               </Styles.ContainerBtn>
            </form>
         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} />}
      </Styles.Container>
   );
}

RegisterBills.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setBills: PropTypes.func.isRequired,
   groupBills: PropTypes.array.isRequired,
}
