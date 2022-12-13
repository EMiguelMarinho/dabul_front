import * as Styles from './styles';

import { Link } from 'react-router-dom';

export const SubMenuGeneral = () => {
   return (
      <Styles.SubMenu>
         <Link to="/home/reports">
            <Styles.List>
               Relatórios
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/users">
            <Styles.List>
               Usuários
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/paymentMethods">
            <Styles.List>
               Formas de pagamento
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/companies">
            <Styles.List>
               Empresas
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/bills">
            <Styles.List>
               Contas
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/groupBills">
            <Styles.List>
               Grupo de contas
            </Styles.List>
         </Link>
   </Styles.SubMenu>
   );
}
