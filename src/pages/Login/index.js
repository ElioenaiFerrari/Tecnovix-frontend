import React from 'react';
import { Container } from './styles';
import { MdPerson, MdVpnKey } from 'react-icons/md';

import { addEmail, addPassword, addRemember } from '../../actions/user';

import { Header, Input } from '../../components';

export default function Login() {

  return (
    <Container>
      <Header width='300px' height='80px' />
      <Input
        type='email'
        placeholder='E-mail'
        Icon={MdPerson}
        IconSize={25}
        IconColor='#999'
        width='250px'
      />
      <Input
        type='password'
        placeholder='Senha'
        Icon={MdVpnKey}
        IconSize={25}
        IconColor='#999'
        width='250px'
      />
      <Input
        type='checkbox'
        onBlur={() => }
        action={addRemember}
      />
    </Container>
  );
}
