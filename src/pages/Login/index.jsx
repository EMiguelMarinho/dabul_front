import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/index'
import { FormLogin } from '../../components/FormLogin';

import api from '../../services/api';

import * as Styles from './styles';

export const Login = () => {
   const [ users, setUsers ] = useState([])

   // useEffect(() => {
   //    api.get('/usuarios')
   //    .then((res) => {
   //       setUsers(res.data)
   //    }).catch((error) => {
   //       console.log(error)
   //    })
   // }, [])

   return (
      <Styles.Container>
         <Styles.ImgBackground_Container />

         <Styles.LogoTitle />

         <Styles.Container_Login>
            <h1>Bem vindo(a)!</h1>
            <FormLogin />
         </Styles.Container_Login>

         <Footer />
      </Styles.Container>
   )
}
