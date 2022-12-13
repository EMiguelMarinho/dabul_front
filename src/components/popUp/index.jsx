import { AiOutlineClose } from 'react-icons/ai';

import * as PropTypes from 'prop-types';

import { Container, Icon } from './styles';

export const ResponsePopUp = ({ success, setSuccessRegister, txt="Erro no cadastro", popUp, change }) => {
   return (
      <Container success={success}>
         {change ? (
            <div>
               Usuário alterado
               <Icon>
                  <AiOutlineClose onClick={() => setSuccessRegister({ ...popUp, state: false })} size="15px" />
               </Icon>
            </div>
         ) : (
            <div>
               {success ? "Cadastro realizado" : txt}
               <Icon>
                  <AiOutlineClose onClick={() => setSuccessRegister({ ...popUp, state: false })} size="15px" />
               </Icon>
            </div>
         )}
      </Container>
   )
}

ResponsePopUp.propTypes = {
   success: PropTypes.bool.isRequired,
   setSuccessRegister: PropTypes.func.isRequired,
   txt: PropTypes.string,
   popUp: PropTypes.object.isRequired,
   change: PropTypes.bool,
}
