import PropTypes from 'prop-types';
import { useEffect } from 'react';

import * as Styles from './styles';

export const IconMenu = ({ Logo, subTitle, onClick }) => {
   return (
      <Styles.Container onClick={onClick}>
         <Styles.Icon>
            <Logo size="80px" color="#210478" />
         </Styles.Icon>
         <Styles.SubTitle>
            {subTitle}
         </Styles.SubTitle>
      </Styles.Container>
   );
}

IconMenu.propTypes = {
   Logo: PropTypes.func,
   subTitle: PropTypes.string,
   onClick: PropTypes.func,
}
