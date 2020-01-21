import React from 'react';
import { slide as Slide } from 'react-burger-menu';
import { Container } from './styles';
import { Header } from '../index';
import { MdSupervisorAccount, MdDashboard, MdWork } from 'react-icons/md';

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
        <Header
          light_logo
          width='200px'
          height='50px'
          style={{ marginLeft: 20 }}
        />
        <div className='menu-items'>
          <MdDashboard color='#FFF' size={15} />
          <a href='/dashboard'>Dashboard</a>
        </div>
        <div className='menu-items'>
          <MdSupervisorAccount color='#FFF' size={15} />
          <a href='/clients'>Clientes</a>
        </div>
        <div className='menu-items'>
          <MdWork color='#FFF' size={15} />
          <a href='/employee'>Funcionários</a>
        </div>
      </Slide>
    </Container>
  );
});

export default Menu;
