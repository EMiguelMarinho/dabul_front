import * as Styles from './styles';

import { Link } from 'react-router-dom';

export const SubMenuReceiveBills = () => {
   return (
      <Styles.SubMenu>
         <Link to="/home/clients">
            <Styles.List>
               Clientes
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/receipts">
            <Styles.List>
               Recebimentos
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/receiptsMult">
            <Styles.List>
               Recebimentos - multi
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/typesReceipts">
            <Styles.List>
               Tipos de recebimento
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/emissionNFS_E">
            <Styles.List>
               Emissão de NFS-E
            </Styles.List>
         </Link>
   </Styles.SubMenu>
   );
}
