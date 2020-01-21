import React from 'react';
import { isSigned } from '../../services/auth';
import logo from '../../assets/image/logo.png';
import light_logo from '../../assets/image/light_logo.svg';

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
      {props.light_logo && (
        <img src={light_logo} {...props} onClick={mainPage} />
      )}
      {!props.light_logo && <img src={logo} {...props} onClick={mainPage} />}
    </Container>
  );
});

export default Header;
