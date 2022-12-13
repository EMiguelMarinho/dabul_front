import * as Styles from './styles';

import { SubMenuReceiveBills } from '../SubMenu/ReceiveBills';
import { SubMenuPaysBills } from '../SubMenu/PaysBills';
import { SubMenuGeneral } from '../SubMenu/General';
import { SubMenuOthers } from '../SubMenu/Others';

import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';

import { VscTriangleDown } from 'react-icons/vsc';
import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom'

export const Header = () => {
   const { logout } = useContext(AuthContext);

   return (
      <Styles.Container id="container">
         <Styles.Logo />
         <Styles.Container_Navigation>
            <Styles.Nav>
               <Styles.Home>
                  <Link to="/home">
                     <Styles.LinkHome>
                        Inicio
                        <span />
                     </Styles.LinkHome>
                  </Link>
               </Styles.Home>
               <Styles.ReceiveBills>
                  <Styles.TitleList>
                     Contas a receber
                     <Styles.LogoTriagle>
                        <VscTriangleDown />
                     </Styles.LogoTriagle>
                  </Styles.TitleList>
                  <div className='menu'>
                     <SubMenuReceiveBills/>
                  </div>
               </Styles.ReceiveBills>
               <Styles.PaysBills>
                  <Styles.TitleList>
                     Contas a pagar
                     <Styles.LogoTriagle>
                        <VscTriangleDown />
                     </Styles.LogoTriagle>
                  </Styles.TitleList>
                  <div className="menu">
                     <SubMenuPaysBills />
                  </div>
               </Styles.PaysBills>
               <Styles.General>
                  <Styles.TitleList>
                     Geral
                     <Styles.LogoTriagle>
                        <VscTriangleDown />
                     </Styles.LogoTriagle>
                  </Styles.TitleList>
                  <div className='menu'>
                     <SubMenuGeneral />
                  </div>
               </Styles.General>
               <Styles.Others>
                  <Styles.TitleList>
                     Outros
                     <Styles.LogoTriagle>
                        <VscTriangleDown />
                     </Styles.LogoTriagle>
                  </Styles.TitleList>
                  <div className='menu'>
                     <SubMenuOthers />
                  </div>
               </Styles.Others>
               <Styles.LoginOut>
                  <div onClick={logout}>
                     Sair
                     <FiLogIn size="20px"/>
                  </div>
               </Styles.LoginOut>
            </Styles.Nav>
         </Styles.Container_Navigation>
      </Styles.Container>
   );
}
