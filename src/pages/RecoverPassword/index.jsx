import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/index'
import { FormRecoverPassword} from '../../components/FormRecoverPassword';

import api from '../../services/api';

import * as Styles from './styles';

export const RecoverPassword = () => {
   const [ users, setUsers ] = useState([])

   return (
      <Styles.Container>
         <Styles.ImgBackground_Container />

         <Styles.LogoTitle />

         <Styles.Container_Login>
            <h1>Esqueceu a senha ?</h1>
            <FormRecoverPassword />
         </Styles.Container_Login>

         <Footer />
      </Styles.Container>
   )
}
