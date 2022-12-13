import * as Styles from './styles.js'
import { useFormik } from 'formik';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { schema } from './validationSchema';
import api from '../../services/api.js';
import { EmailPopUp } from '../popUpEmail';

export const FormRecoverPassword = () => {
   const [ isLoad, setIsLoad ] = useState(false);
   const { login } = useContext(AuthContext)
   const [ showPopUp, setShowPopUp ] = useState(false);

   const formik = useFormik({
      initialValues: {
         email: '',
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setIsLoad(true)
         try {
            await api.post('/login/recoverPassword', {
               email: values.email
            });
            setShowPopUp(true);
         } catch (error) {
            console.log(error)
            if(error.response.status == 404) formik.setErrors({ email: "Email não existente" })
         }
         setIsLoad(false)
      },
   });

   return (
      <Styles.Container>
         <Styles.SubTitle>Para recuperar a senha basta inserir sei email cadastradoabaixo e enviaremos o link de recuperação da senha</Styles.SubTitle>
         <form className="form" onSubmit={formik.handleSubmit}>
            {formik.touched.email && formik.errors.email ? (
               <>
                  <Styles.Input
                     type="email"
                     id='email'
                     name='email'
                     placeholder="exemplo@exemplo.com"
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
                     placeholder="exemplo@exemplo.com"
                     onChange={formik.handleChange}
                     values={formik.values.email}
                     color="black"
                  />
                  <Styles.P>{formik.errors.email}</Styles.P>
                  </>
               )}
            <Styles.P>{formik.errors.password}</Styles.P>
            <Styles.BtnLogin type="submit">
               {isLoad ? <Styles.Loader /> : "Enviar link de recuperação"}
            </Styles.BtnLogin>
            {showPopUp && <EmailPopUp success="true" setSuccessRegister={setShowPopUp} />}
         </form>
      </Styles.Container>

   );
}
