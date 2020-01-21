import React from 'react';
import { slide as Slide } from 'react-burger-menu';
import { Container } from './styles';
import { Header } from '../index';

const Menu = React.memo(props => {
  return (
    <Container>
      <Slide
        {...props}
        id='menu'
        width={'250px'}
        pageWrapId={'elastic'}
        outerContainerId={'App'}
      >
        <Header light_logo width='150px' height='50px' />
        <a href='/'>Dashboard</a>
        <a href='/clients'>Clientes</a>
        <a href='/employee'>Funcionários</a>
      </Slide>
    </Container>
  );
});

export default Menu;
