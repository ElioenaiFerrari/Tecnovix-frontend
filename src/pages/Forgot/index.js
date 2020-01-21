import React from 'react';
import { MdPerson } from 'react-icons/md';
import { Container } from './styles';
import { Input, Header, Footer } from '../../components';
import { addEmail } from '../../actions/user';
import { primaryColor } from '../../styles/global';

export default function Forgot() {
  const handleSubmit = () => {};

  return (
    <>
      <Container>
        <Header width='200px' height='50px' />
        <Input
          action={addEmail}
          type='email'
          placeholder='E-mail'
          Icon={MdPerson}
          IconSize={20}
          IconColor='rgba(0, 0, 0, 0.3)'
          width='300px'
          style={{
            margin: '20px 0',
            width: '300px'
          }}
        />
        <Input
          type='submit'
          value='Recuperar'
          onClick={handleSubmit}
          style={{
            width: '320px',
            backgroundColor: primaryColor,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
            cursor: 'pointer'
          }}
        />
      </Container>
      <Footer />
    </>
  );
}
