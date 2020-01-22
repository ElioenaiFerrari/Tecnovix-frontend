import React from 'react';

import { Container } from './styles';

import { Input } from '../../../components';
import { addEmail, addName, addProjects } from '../../../actions/client';
import { primaryColor } from '../../../styles/global';
import { MdClose } from 'react-icons/md';

const Add = React.memo(() => {
  return (
    <Container>
      <MdClose
        onClick={() => {}}
        size={25}
        color={primaryColor}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignSelf: 'flex-end',
          cursor: 'pointer'
        }}
      />
      <Input
        required
        // dialog={dialogEmail}
        action={addName}
        type='text'
        fieldName='nome'
        placeholder='Nome*'
        // Icon={MdPerson}
        // IconSize={20}
        // IconColor='rgba(0, 0, 0, 0.3)'
        style={{
          width: '250px',
          marginTop: '10px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
        }}
      />
      <Input
        required
        // dialog={dialogEmail}
        action={addEmail}
        type='email'
        fieldName='email'
        placeholder='E-mail*'
        // Icon={MdPerson}
        // IconSize={20}
        // IconColor='rgba(0, 0, 0, 0.3)'
        style={{
          width: '250px',
          marginTop: '10px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
        }}
      />
      <Input
        required
        // dialog={dialogEmail}
        action={addProjects}
        type='number'
        fieldName='projetos'
        placeholder='Qtd. projetos*'
        // Icon={MdPerson}
        // IconSize={20}
        // IconColor='rgba(0, 0, 0, 0.3)'
        style={{
          width: '250px',
          marginTop: '10px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
        }}
      />
      <Input
        value='Adicionar'
        type='button'
        onClick={() => {}}
        style={{
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
          width: '250px',
          marginTop: '20px',
          backgroundColor: primaryColor,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
          cursor: 'pointer'
        }}
      />
    </Container>
  );
});

export default Add;
