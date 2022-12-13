import * as Styles from './styles';

import { Link } from 'react-router-dom';

export const SubMenuOthers = () => {
   return (
      <Styles.SubMenu>
         <Link to="/home/banks">
            <Styles.List>
               Bancos
            </Styles.List>
         </Link>
         <Styles.Space />
         <Link to="/home/folders">
            <Styles.List>
               Pastas
            </Styles.List>
         </Link>
   </Styles.SubMenu>
   );
}
