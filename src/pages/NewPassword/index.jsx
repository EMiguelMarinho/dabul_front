import { useState } from 'react';
import { Footer } from '../../components/Footer/index'
import { FormNewPassword} from '../../components/FormNewPassword';

import * as Styles from './styles';

export const NewPassword = () => {
   const [ users, setUsers ] = useState([])

   return (
      <Styles.Container>
         <Styles.ImgBackground_Container />

         <Styles.LogoTitle />

         <Styles.Container_Login>
            <h1>Crie uma nova senha</h1>
            <FormNewPassword />
         </Styles.Container_Login>

         <Footer />
      </Styles.Container>
   )
}
