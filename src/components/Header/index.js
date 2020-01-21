import React from 'react';
import { isSigned } from '../../services/auth';
import logo from '../../assets/image/logo.png';

import { Container } from './styles';

const Header = React.memo(props => {
  const mainPage = async () => {
    if (await isSigned()) {
      return (window.location.href = '/dashboard');
    }
    return (window.location.href = '/login');
  };
  return (
    <Container props={props}>
      <img src={logo} onClick={mainPage} />
    </Container>
  );
});

export default Header;
