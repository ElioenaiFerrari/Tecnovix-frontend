import React from 'react';
import logo from '../../assets/image/logo.png';

import { Container } from './styles';

const Header = React.memo(props => {
  return (
    <Container props={props}>
      <img src={logo} />
    </Container>
  );
});

export default Header;
