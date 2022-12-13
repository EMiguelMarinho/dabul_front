import * as Styles from './styles.js'
import { useFormik } from 'formik';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { schema } from './validationSchema';
import api from '../../services/api.js';
import { EmailPopUp } from '../popUpEmail';
import { useNavigate } from 'react-router-dom';

export const FormNewPassword = () => {
   const [ isLoad, setIsLoad ] = useState(false);
   const { login } = useContext(AuthContext)
   const [ showPopUp, setShowPopUp ] = useState(false);
   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         password: '',
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setIsLoad(true)
         try {
            const post = await api.post('/login/recoverPassword', {
               senha: values.password
            });
            setShowPopUp(true);
         } catch (error) {
            if(error.response.status == 404) formik.setErrors({ email: error.response.data.message })
         }
         setIsLoad(false)
         if(post) return setTimeout(() => {
            navigate('/login')
         }, 3000)
      },
   });

   return (
      <Styles.Container>
         <Styles.SubTitle>Insira uma nova senha abaixo para sua conta</Styles.SubTitle>
         <form className="form" onSubmit={formik.handleSubmit}>
            {formik.touched.email && formik.errors.email ? (
               <>
                  <Styles.Input
                     type="email"
                     id='email'
                     name='email'
                     placeholder="Crie sua nova senha"
                     onChange={formik.handleChange}
                     values={formik.values.email}
                     color="red"
                  />
                  <Styles.P>{formik.errors.email}</Styles.P>
               </>
               ) : (
                  <>
                  <Styles.Input
                     type="email"
                     id='email'
                     name='email'
                     placeholder="Crie sua nova senha"
                     onChange={formik.handleChange}
                     values={formik.values.email}
                     color="black"
                  />
                  <Styles.P>{formik.errors.email}</Styles.P>
                  </>
               )}
            <Styles.P>{formik.errors.password}</Styles.P>
            <Styles.BtnLogin type="submit">
               {isLoad ? <Styles.Loader /> : "Finalizar"}
            </Styles.BtnLogin>
            {showPopUp && <EmailPopUp success="true" setSuccessRegister={setShowPopUp} />}
         </form>
      </Styles.Container>
   );
}
