import React from 'react';
import { MdPerson } from 'react-icons/md';
import { Container } from './styles';
import { Input, Footer } from '../../components';
import { addEmail } from '../../actions/user';
import { primaryColor } from '../../styles/global';

export default function Forgot() {
  const backLogin = () => (window.location.href = '/login');

  return (
    <>
      <Container>
        {/* <Header width='200px' height='50px' /> */}
        <Input
          action={addEmail}
          type='email'
          placeholder='E-mail*'
          required
          fieldName='email'
          autoFocus
          Icon={MdPerson}
          IconSize={20}
          IconColor='rgba(0, 0, 0, 0.3)'
          width='300px'
          style={{
            margin: '10px 0',
            width: '300px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
          }}
        />
        <Input
          type='submit'
          value='Recuperar'
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '300px',
            backgroundColor: primaryColor,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
            cursor: 'pointer'
          }}
        />
        <Input
          type='button'
          value='Voltar ao login'
          onClick={backLogin}
          style={{
            border: 'none',
            background: 'none',
            color: primaryColor,
            fontSize: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '200px'
          }}
        />
      </Container>
      <Footer />
    </>
  );
}
