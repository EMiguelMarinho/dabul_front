import { AiOutlineClose } from 'react-icons/ai';

import * as PropTypes from 'prop-types';

import { Container, Icon } from './styles';

export const EmailPopUp = ({ success, setSuccessRegister }) => {
   return (
      <Container success={success}>
         <div>
            Email enviado
            <Icon>
               <AiOutlineClose onClick={() => setSuccessRegister(false)} size="15px" />
            </Icon>
         </div>
      </Container>
   )
}

EmailPopUp.propTypes = {
   success: PropTypes.bool.isRequired,
   setSuccessRegister: PropTypes.func.isRequired,
   txt: PropTypes.string,
   popUp: PropTypes.object.isRequired,
   change: PropTypes.bool,
}
