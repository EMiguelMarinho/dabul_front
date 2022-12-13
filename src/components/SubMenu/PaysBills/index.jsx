import * as Styles from './styles';

import { Link } from 'react-router-dom';

export const SubMenuPaysBills = () => {
   return (
      <Styles.SubMenu>
         <Link to="/home/providers">
            <Styles.List>
               Forncedores
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/payments">
            <Styles.List>
               Pagamentos
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/downPayment">
            <Styles.List>
               Baixa de pagamento
            </Styles.List>
         </Link>
   </Styles.SubMenu>
   );
}
