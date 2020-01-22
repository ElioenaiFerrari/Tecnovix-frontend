import React from 'react';
import Slide from 'react-burger-menu/lib/menus/slide';
import { Container } from './styles';
import { Header } from '../index';
import {
  MdSupervisorAccount,
  MdDashboard,
  MdWork,
  MdMenu,
  MdClose
} from 'react-icons/md';
import { primaryColor } from '../../styles/global';

const Menu = React.memo(props => {
  return (
    <Container>
      <Slide
        {...props}
        id='menu'
        width={'300px'}
        pageWrapId={'elastic'}
        customBurgerIcon={<MdMenu color={primaryColor} />}
        customCrossIcon={<MdClose color={primaryColor} />}
        outerContainerId={'App'}
      >
        <Header
          light_logo
          width='200px'
          height='50px'
          style={{ marginLeft: 20 }}
        />
        <div className='menu-items' style={{ marginTop: 50 }}>
          <MdDashboard color='#FFF' size={15} />
          <a href='/'>Dashboard</a>
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
