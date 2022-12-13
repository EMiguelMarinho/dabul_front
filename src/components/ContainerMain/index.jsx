import PropTypes from 'prop-types';

import { Header } from '../Header';
import { Footer } from '../Footer';

import * as Styles from './styles';

export const ContainerMain = ({children}) => {
   return(
      <Styles.Container>
         <Header />
         <Styles.Container_Children>
            {children}
         </Styles.Container_Children>
         <Styles.Logo_background />
         <Footer />
      </Styles.Container>
   );
}

ContainerMain.propTypes = {
   children: PropTypes.node
}
