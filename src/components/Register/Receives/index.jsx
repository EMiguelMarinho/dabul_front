import PropTypes from 'prop-types';

import { TiDeleteOutline } from 'react-icons/ti';

import * as Styles from './styles';

import { useFormik } from 'formik'

import { schema } from './schemaValidator';

import { useState } from 'react';

import api from '../../../services/api';
import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

export const RegisterReceives = ({ setStateRegister, setReceipts }) => {
   const [ search, setSearch ] = useState(false);
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         searchInput: '',
         of: '',
         untill:'',
         client: '',
         numberOfFolder: '',
         nf: '',
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         try {
            const { searchInput, of, untill, client, numberOfFolder, nf } = values;

            if(search){
               const reqSearch = await api.get(`/ExtraRecebimentosGet/${searchInput}/pesquisar`)
               setReceipts(reqSearch.data)
               setStateRegister(false)
            } else {
               const data = {
                  de: of,
                  ate: untill,
                  cliente: client,
                  pasta: numberOfFolder,
                  NF: nf,
               }
               await api.post(`/ExtraRecebimentos/${searchInput}/cadastrar`, data)
               const reqSearch = await api.get(`/getAllRecebimentos`)
               setReceipts(reqSearch.data)
               setPopUp({
                  ...popUp,
                  state: true,
                  success: true,
               })
            }
         } catch (error) {
            if(error.response.config.url === "/ExtraRecebimentosGet//pesquisar") return setPopUp({
               state: true,
               success: false,
               txt: "Escolha uma opção para pesquisa",
            })
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
            setSearch(false)
            setLoad(false)
         }
      }
   });

   const handleSearch = (e) => {
      e.preventDefault()
      setSearch(true)
      return formik.handleSubmit()
   }

   return (
      <Styles.Container>
         <Styles.ContainerForm>
            <Styles.HeaderForm>
               <Styles.Title>
                  Cadastro de Recebimento
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegister(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form">
               <Styles.Input>
                  <h1></h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>Número da pasta</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Tipo de honorário</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1></h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>NF</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Cliente</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Recebimento</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Vencimento</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Emissão</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Valor Bruto</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Juros</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Multas</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Pis/Confins</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1>Call</h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput>
                        <label>De:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                     <Styles.ContainerInput>
                        <label>Até:</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.InputCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.Input>
                  <h1></h1>
                  <Styles.DivInput>
                     <Styles.ContainerInput width="100%">
                        <label>Detalhes</label>
                        {formik.touched.of && formik.errors.of ? (
                           <>
                              <Styles.TextAreaCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="red"
                              />
                           </>
                        ) : (
                           <>
                              <Styles.TextAreaCamp
                                 type="text"
                                 name="of"
                                 id="of"
                                 placeholder=""
                                 values={formik.values.of}
                                 onChange={formik.handleChange}
                                 color="black"
                              />
                           </>
                        )}
                        {<p>{formik.errors.of}</p>}
                     </Styles.ContainerInput>
                  </Styles.DivInput>
               </Styles.Input>

               <Styles.ContainerBtn>
                  {load ? (
                     <Styles.BtnLoad>
                        <Loader height="30px" width="30px" />
                     </Styles.BtnLoad>
                  ) : (
                     <>
                        <Styles.BtnRegister type="submit"  onClick={formik.handleSubmit}>
                           Cadastrar Recebimento
                        </Styles.BtnRegister>
                        <Styles.BtnRegister type="submit" onClick={(e) => handleSearch(e)}>
                           Pesquisar recebimento
                        </Styles.BtnRegister>
                     </>
                  )}
               </Styles.ContainerBtn>
            </form>

         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} />}
      </Styles.Container>
   );
}


RegisterReceives.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setReceipts: PropTypes.func.isRequired
}
