import * as Styles from './styles.js'
import { useFormik } from 'formik';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { schema } from './validationSchema';
import { useNavigate, Link } from 'react-router-dom';

export const FormLogin = () => {
   const [ isLoad, setIsLoad ] = useState(false);
   const { login } = useContext(AuthContext)

   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: async values => {
         setIsLoad(true)

         const log = await login(values)

         if(!log){
            if(log.password) return formik.setErrors({ password: "Senha não corresponde ao usuário" })
         } else {
            navigate('/home')
         }
      },
   });

   return (
      <Styles.Container>
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

            {formik.touched.password && formik.errors.password ?(
               <Styles.Input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={formik.handleChange}
                  values={formik.values.password}
                  color="red"
               />
            ) : (
               <Styles.Input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={formik.handleChange}
                  values={formik.values.password}
                  color="black"
               />
            )}
            <Styles.P>{formik.errors.password}</Styles.P>
            <Link to='/recoverPassword'>
               <Styles.LinkPassword>
                  Esqueci a senha
               </Styles.LinkPassword>
            </Link>
            <Styles.BtnLogin type="submit">
               {isLoad ? <Styles.Loader /> : "Entrar"}
            </Styles.BtnLogin>
         </form>
      </Styles.Container>

   );
}
