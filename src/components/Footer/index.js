import React from 'react';

import { Container } from './styles';
import { Input } from '../index';

import { primaryColor } from '../../styles/global';

const Footer = React.memo(props => {
  return (
    <Container props={props}>
      <div className='row'>
        <Input
          type='button'
          value='Ajuda'
          style={{
            border: 'none',
            background: 'none',
            color: primaryColor,
            fontSize: '12px',
            cursor: 'pointer'
          }}
        />
        <Input
          type='button'
          value='Política de privacidade'
          style={{
            border: 'none',
            background: 'none',
            color: primaryColor,
            fontSize: '12px',
            cursor: 'pointer'
          }}
        />
        <Input
          type='button'
          value='Termos de serviço'
          style={{
            border: 'none',
            background: 'none',
            color: primaryColor,
            fontSize: '12px',
            cursor: 'pointer'
          }}
        />
      </div>
      <div className='row'>
        <p>
          Todos os direitos reservados &copy; 2019 Desenvolvido por
          <a href='https://www.tecnovix.com.br/'>&nbsp;Tecnovix</a>
        </p>
      </div>
    </Container>
  );
});

export default Footer;
