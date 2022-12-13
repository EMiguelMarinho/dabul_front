import { useFormik } from 'formik';

import PropTypes from 'prop-types';

import { useState } from 'react';

import { TiDeleteOutline } from 'react-icons/ti';

import { Loader } from '../../FormLogin/styles';
import { ResponsePopUp } from '../../popUp';

import api from '../../../services/api';

import * as Styles from './styles';

import { schema } from './validationSchema';

export const RegisterCompanies = ({ setStateRegister, setCompanies }) => {
   const [ load, setLoad ] = useState(false);
   const [ popUp, setPopUp ] = useState({
      state: false,
      success: false,
      txt: "",
   });

   const formik = useFormik({
      initialValues: {
         name: '',
         municipalRegistration: '',
         crc: '',
         cnpj: '',
         cep: '',
         city: '',
         state: '',
         adress: '',
         district: '',
         complement: '',
         number: '',
         banckNumber: '',
         agency: '',
         checkingAccount: '',
         email: '',
         cell: ''
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setLoad(true)

         const data = {
            nome: values.name,
            inscricaoMunicipal: values.municipalRegistration,
            cnpj: values.cnpj,
            cidade: values.city,
            endereco: values.adress,
            complemento: values.complement,
            numeroBanco: values.banckNumber,
            contaCorrente: values.checkingAccount,
            telefone: values.cell,
            crc: values.crc,
            estado: values.state,
            cep: values.cep,
            bairro: values.district,
            numero: values.number,
            agencia: values.agency,
            email: values.email,
         }

         try {
            await api.post('/cadastraEmpresa', data)
            const reqCompanies = await api.get('/getAllEmpresas');
            setCompanies(reqCompanies.data)
            setPopUp({
               ...popUp,
               state: true,
               success: true,
            })
         } catch (error) {
            if(error.response.status === 404) return setCompanies([]);
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
                  Cadastro de Empresas
               </Styles.Title>
               <Styles.ContainerLogo>
                  <TiDeleteOutline color="red" size="25px" onClick={() => setStateRegister(false)}/>
               </Styles.ContainerLogo>
            </Styles.HeaderForm>

            <form className="form" onSubmit={formik.handleSubmit}>
               <Styles.InputName>
                  <Styles.ContainerInput>
                     <label htmlFor="name">Nome:</label>
                     {formik.touched.name && formik.errors.name ? (
                        <>
                           <Styles.InputCamp
                              type="text"
                              id="name"
                              values={formik.values.name}
                              color="red"
                              onChange={formik.handleChange}
                              placeholder="Ex: José Carlos"
                           />
                        </>
                     ) : (
                        <>
                           <Styles.InputCamp
                              type="text"
                              id="name"
                              values={formik.values.name}
                              onChange={formik.handleChange}
                              color="black"
                              placeholder="Ex: José Carlos"
                           />
                        </>
                     )}
                     <p>{formik.errors.name}</p>
                  </Styles.ContainerInput>
               </Styles.InputName>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="municipalRegistration">Inscrição municipal:</label>
                     {formik.touched.municipalRegistration && formik.errors.municipalRegistration ? (
                        <>
                           <Styles.InputCamp
                              type="text"
                              id="municipalRegistration"
                              values={formik.values.municipalRegistration}
                              onChange={formik.handleChange}
                              color="red"
                           />
                        </>
                     ) : (
                        <>
                           <Styles.InputCamp
                              type="text"
                              id="municipalRegistration"
                              values={formik.values.municipalRegistration}
                              onChange={formik.handleChange}
                              color="black"
                           />
                        </>
                     )}
                     <p>{formik.errors.municipalRegistration}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="crc">CRC:</label>
                     {formik.touched.crc && formik.errors.crc ? (
                        <Styles.InputCamp
                           name="crc"
                           id="crc"
                           values={formik.values.crc}
                           onChange={formik.handleChange}
                           color="red"
                           type="text"
                        />
                     ) : (

                        <Styles.InputCamp
                           name="crc"
                           id="crc"
                           values={formik.values.crc}
                           onChange={formik.handleChange}
                           color="black"
                           type="text"
                        />
                     )}
                     <p>{formik.errors.crc}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="cnpj">CNPJ:</label>
                     {formik.touched.cnpj && formik.errors.cnpj ? (
                        <Styles.InputCamp
                           type="text"
                           name="cnpj"
                           id="cnpj"
                           onChange={formik.handleChange}
                           values={formik.values.cnpj}
                           placeholder="XX.XXX.XXX/0001-XX"
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           name="cnpj"
                           id="cnpj"
                           onChange={formik.handleChange}
                           values={formik.values.cnpj}
                           color="black"
                           placeholder="XX.XXX.XXX/0001-XX"
                        />
                     )}
                     <p>{formik.errors.cnpj}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="cep">CEP:</label>
                     {formik.touched.cep && formik.errors.cep ? (
                        <Styles.InputCamp
                           type="text"
                           id="cep"
                           name="cep"
                           values={formik.values.cep}
                           onChange={formik.handleChange}
                           placeholder="XXXXX-XXX"
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="cep"
                           name="cep"
                           values={formik.values.cep}
                           onChange={formik.handleChange}
                           placeholder="XXXXX-XXX"
                           color="black"
                        />
                     )}
                     <p>{formik.errors.cep}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="city">Cidade:</label>
                     {formik.touched.city && formik.errors.city ? (
                        <Styles.InputCamp
                           type="text"
                           id="city"
                           values={formik.values.city}
                           onChange={formik.handleChange}
                           color="red"
                        />
                        ) : (
                        <Styles.InputCamp
                           type="text"
                           id="city"
                           values={formik.values.city}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.city}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="state">Estado:</label>
                     {formik.touched.state && formik.errors.state ? (
                        <Styles.SelectCamp name="state" id="state" values={formik.values.state} onChange={formik.handleChange} color="red">
                           <option value="" selected>Selecionar conta</option>
                           <option value="AC">Acre</option>
                           <option value="AL">Alagoas</option>
                           <option value="AP">Amapá</option>
                           <option value="AM">Amazonas</option>
                           <option value="BA">Bahia</option>
                           <option value="CE">Ceará</option>
                           <option value="DF">Distrito Federal</option>
                           <option value="ES">Espírito Santo</option>
                           <option value="GO">Goiás</option>
                           <option value="MA">Maranhão</option>
                           <option value="MT">Mato Grosso</option>
                           <option value="MS">Mato Grosso do Sul</option>
                           <option value="MG">Minas Gerais</option>
                           <option value="PA">Pará</option>
                           <option value="PB">Paraíba</option>
                           <option value="PR">Paraná</option>
                           <option value="PE">Pernambuco</option>
                           <option value="PI">Piauí</option>
                           <option value="RJ">Rio de Janeiro</option>
                           <option value="RN">Rio Grande do Norte</option>
                           <option value="RS">Rio Grande do Sul</option>
                           <option value="RO">Rondônia</option>
                           <option value="RR">Roraima</option>
                           <option value="SC">Santa Catarina</option>
                           <option value="SP">São Paulo</option>
                           <option value="SE">Sergipe</option>
                           <option value="TO">Tocantins</option>
                        </Styles.SelectCamp>
                        ) : (
                        <Styles.SelectCamp name="state" id="state" values={formik.values.state} onChange={formik.handleChange} color="black">
                           <option value="" selected>Selecionar conta</option>
                           <option value="AC">Acre</option>
                           <option value="AL">Alagoas</option>
                           <option value="AP">Amapá</option>
                           <option value="AM">Amazonas</option>
                           <option value="BA">Bahia</option>
                           <option value="CE">Ceará</option>
                           <option value="DF">Distrito Federal</option>
                           <option value="ES">Espírito Santo</option>
                           <option value="GO">Goiás</option>
                           <option value="MA">Maranhão</option>
                           <option value="MT">Mato Grosso</option>
                           <option value="MS">Mato Grosso do Sul</option>
                           <option value="MG">Minas Gerais</option>
                           <option value="PA">Pará</option>
                           <option value="PB">Paraíba</option>
                           <option value="PR">Paraná</option>
                           <option value="PE">Pernambuco</option>
                           <option value="PI">Piauí</option>
                           <option value="RJ">Rio de Janeiro</option>
                           <option value="RN">Rio Grande do Norte</option>
                           <option value="RS">Rio Grande do Sul</option>
                           <option value="RO">Rondônia</option>
                           <option value="RR">Roraima</option>
                           <option value="SC">Santa Catarina</option>
                           <option value="SP">São Paulo</option>
                           <option value="SE">Sergipe</option>
                           <option value="TO">Tocantins</option>
                        </Styles.SelectCamp>
                     )}
                     <p>{formik.errors.state}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="adress">Endereço:</label>
                     {formik.touched.adress && formik.errors.adress ? (
                        <Styles.InputCamp
                           type="text"
                           id="adress"
                           values={formik.values.adress}
                           onChange={formik.handleChange}
                           placeholder="Ex: Avenida Princesa Isabel, N° 78"
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="adress"
                           values={formik.values.adress}
                           onChange={formik.handleChange}
                           placeholder="Ex: Avenida Princesa Isabel, N° 78"
                           color="black"
                        />
                     )}
                     <p>{formik.errors.adress}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="district">Bairro:</label>
                     {formik.touched.district && formik.errors.district ? (
                        <Styles.InputCamp
                           type="text"
                           id="district"
                           values={formik.values.district}
                           onChange={formik.handleChange}
                           color="red"
                        />
                        ) : (
                        <Styles.InputCamp
                           type="text"
                           id="district"
                           values={formik.values.district}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.district}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="complement">Complemento:</label>
                     {formik.touched.complement && formik.errors.complement ? (
                        <Styles.InputCamp
                           type="text"
                           id="complement"
                           values={formik.values.complement}
                           onChange={formik.handleChange}
                           color="red"
                        />
                        ) : (
                        <Styles.InputCamp
                           type="text"
                           id="complement"
                           values={formik.values.complement}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.complement}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.InputNum>
                  <Styles.ContainerInput>
                     <label htmlFor="number">Número:</label>
                     {formik.touched.number && formik.errors.number ? (
                        <Styles.InputCamp
                           type="text"
                           id="number"
                           values={formik.values.number}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="number"
                           values={formik.values.number}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.number}</p>
                  </Styles.ContainerInput>
               </Styles.InputNum>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor='banckNumber'>N° do banco:</label>
                     {formik.errors.banckNumber ? (
                        <Styles.InputCamp
                           type="text"
                           id="banckNumber"
                           name="banckNumber"
                           values={formik.values.banckNumber}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="banckNumber"
                           name="banckNumber"
                           values={formik.values.banckNumber}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.banckNumber}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor='agency'>Agência:</label>
                     {formik.touched.agency && formik.errors.agency ? (
                        <Styles.InputCamp
                           type="text"
                           id="agency"
                           values={formik.values.agency}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="agency"
                           values={formik.values.agency}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.agency}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="checkingAccount">Conta corrente:</label>
                     {formik.touched.checkingAccount && formik.errors.checkingAccount ? (
                        <Styles.InputCamp
                           type="text"
                           id="checkingAccount"
                           values={formik.values.checkingAccount}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="checkingAccount"
                           values={formik.values.checkingAccount}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.checkingAccount}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="email">Email:</label>
                     {formik.touched.email && formik.errors.email ? (
                        <Styles.InputCamp
                           type="email"
                           id="email"
                           values={formik.values.email}
                           onChange={formik.handleChange}
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="email"
                           id="email"
                           values={formik.values.email}
                           onChange={formik.handleChange}
                           color="black"
                        />
                     )}
                     <p>{formik.errors.email}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.Input>
                  <Styles.ContainerInput>
                     <label htmlFor="cell">Telefone:</label>
                     {formik.touched.cell && formik.errors.cell ? (
                        <Styles.InputCamp
                           type="text"
                           id="cell"
                           values={formik.values.cell}
                           onChange={formik.handleChange}
                           placeholder="(99) 99999-9999"
                           color="red"
                        />
                     ) : (
                        <Styles.InputCamp
                           type="text"
                           id="cell"
                           values={formik.values.cell}
                           onChange={formik.handleChange}
                           placeholder="(99) 99999-9999"
                           color="black"
                        />
                     )}
                     <p>{formik.errors.cell}</p>
                  </Styles.ContainerInput>
               </Styles.Input>

               <Styles.ContainerBtn>
                  {load ? (
                     <Styles.BtnLoad>
                        <Loader />
                     </Styles.BtnLoad>
                  ) :
                     <Styles.BtnRegister type="submit">
                        Cadastrar Empresa
                     </Styles.BtnRegister>
                  }
               </Styles.ContainerBtn>
            </form>
         </Styles.ContainerForm>
         {popUp.state && <ResponsePopUp success={popUp.success} setSuccessRegister={setPopUp} txt={popUp.txt} popUp={popUp} />}
      </Styles.Container>
   );
}

RegisterCompanies.propTypes = {
   setStateRegister: PropTypes.func.isRequired,
   setCompanies: PropTypes.func.isRequired,
}
