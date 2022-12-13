import { ContainerMain } from "../../components/ContainerMain";

import { Title } from '../Clients/styles';

import * as Styles from './styles';

import { useFormik } from 'formik';

import { schema } from './validationSchema';

import api from "../../services/api";

import { Loader } from '../../components/FormLogin/styles';

import { useState } from 'react';

import { popUp } from '../../components/popUp'

export const ReceiptsMult = () => {
   const [ load, setLoad ] = useState(false)
   const [ statePopUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: '',
   })

   const formik = useFormik({
      initialValues: {
         folder: '',
         form: '',
         date: '',
         type: '',
         fees: '',
         value: '',
         honorary: '',
         iprem: '',
         heirs: '',
         irrf: '',
         hspmp: '',
         others: ''
      },
      validationSchema: schema,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            pasta: values.folder,
            forma: values.form,
            data: values.date,
            tipo: values.type,
            juros: values.fees,
            valor: values.value,
            honorarios: values.honorary,
            iprem: values.iprem,
            herdeiros: values.heirs,
            irrf: values.irrf,
            hspmp: values.hspmp,
            outros: values.others
         }

         try {
            const resPost = await api.post('/cadastraMultiplosRecebimentos', data)
            setPopUp({
               state: true,
               success: true
            })
         } catch (error) {
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
   });

   return (
      <ContainerMain>
         <Title>Cadastro de Recebimentos e Recebimentos Multi</Title>

         <Styles.Container>
            <Styles.ContainerRegisterAndRegisterMulti>
               <Styles.ContainerInput>
                  <Styles.Input>
                     <label htmlFor="folder">Pasta:</label>
                     {formik.errors.folder ? (
                        <Styles.InputCamp
                           type="text"
                           color="red"
                           id="folder"
                           name="folder"
                           onChange={formik.handleChange}
                           values={formik.values.folder}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           color="black"
                           id="folder"
                           name="folder"
                           onChange={formik.handleChange}
                           values={formik.values.folder}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.folder}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="type">Tipo:</label>
                     {formik.touched.type && formik.errors.type ? (
                        <Styles.InputCamp
                           type="text"
                           color="red"
                           id="type"
                           name="type"
                           onChange={formik.handleChange}
                           values={formik.values.type}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           color="black"
                           id="type"
                           name="type"
                           onChange={formik.handleChange}
                           values={formik.values.type}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.type}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="form">Forma:</label>
                     {formik.touched.form && formik.errors.form ? (
                        <Styles.InputCamp
                           color="red"
                           id="form"
                           name="form"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.form}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="form"
                           name="form"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.form}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.form}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="fees">Juros:</label>
                     {formik.touched.fees && formik.errors.fees ? (
                        <Styles.InputCamp
                           color="red"
                           id="fees"
                           name="fees"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.fees}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="fees"
                           name="fees"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.fees}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.fees}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="date">Data:</label>
                     {formik.touched.date && formik.errors.date ? (
                        <Styles.InputCamp
                           color="red"
                           id="date"
                           name="date"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.date}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="date"
                           name="date"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.date}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.date}</p>
                  </Styles.Input>
               </Styles.ContainerInput>

               <Styles.SpaceInput />

               <Styles.ContainerInput>
                  <Styles.Input>
                        <label htmlFor="value">Valor:</label>
                        {formik.touched.value && formik.errors.value ? (
                           <Styles.InputCamp
                              color="red"
                              id="value"
                              name="value"
                              onChange={formik.handleChange}
                              values={formik.values.value}>
                           </Styles.InputCamp>
                        ) : (
                           <Styles.InputCamp
                              color="black"
                              id="value"
                              name="value"
                              onChange={formik.handleChange}
                              values={formik.values.value}>
                           </Styles.InputCamp>
                        )}
                        <p>{formik.errors.value}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="honorary">Honorários:</label>
                     {formik.touched.honorary && formik.errors.honorary ? (
                        <Styles.InputCamp
                           color="red"
                           id="honorary"
                           name="honorary"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.honorary}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="honorary"
                           name="honorary"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.honorary}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.honorary}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="irrf">IRRF:</label>
                     {formik.touched.irrf && formik.errors.irrf ? (
                        <Styles.InputCamp
                           color="red"
                           id="irrf"
                           name="irrf"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.irrf}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="irrf"
                           name="irrf"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.irrf}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.irrf}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="iprem">IPREM:</label>
                     {formik.touched.iprem && formik.errors.iprem ? (
                        <Styles.InputCamp
                           color="red"
                           id="iprem"
                           name="iprem"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.iprem}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="iprem"
                           name="iprem"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.iprem}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.iprem}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="hspmp">HSPMP:</label>
                     {formik.touched.hspmp && formik.errors.hspmp ? (
                        <Styles.InputCamp
                           color="red"
                           id="hspmp"
                           name="hspmp"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.hspmp}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="hspmp"
                           name="hspmp"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.hspmp}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.hspmp}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="heirs">Herdeiros:</label>
                     {formik.touched.heirs && formik.errors.heirs ? (
                        <Styles.InputCamp
                           color="red"
                           id="heirs"
                           name="heirs"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.heirs}>
                        </Styles.InputCamp>
                     ) : (
                        <Styles.InputCamp
                           color="black"
                           id="heirs"
                           name="heirs"
                           onChange={formik.handleChange}
                           type="text"
                           values={formik.values.heirs}>
                        </Styles.InputCamp>
                     )}
                     <p>{formik.errors.heirs}</p>
                  </Styles.Input>

                  <Styles.Input>
                     <label htmlFor="others">Outros:</label>
                     {formik.touched.others && formik.errors.others ? (
                           <Styles.InputCamp
                              color="red"
                              id="others"
                              name="others"
                              onChange={formik.handleChange}
                              type="text"
                              values={formik.values.others}>
                           </Styles.InputCamp>
                        ) : (
                           <Styles.InputCamp
                              color="black"
                              id="others"
                              name="others"
                              onChange={formik.handleChange}
                              type="text"
                              values={formik.values.others}>
                           </Styles.InputCamp>
                        )}
                     <p>{formik.errors.others}</p>
                  </Styles.Input>
               </Styles.ContainerInput>
            </Styles.ContainerRegisterAndRegisterMulti>

            <Styles.ContainerBtn>
                  <Styles.BtnRegister type="submit" onClick={formik.handleSubmit}>
                     {load ? <Loader /> : "Inserir registros" }
                  </Styles.BtnRegister>
               </Styles.ContainerBtn>
         </Styles.Container>
      </ContainerMain>
   )
}
