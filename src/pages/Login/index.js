import React from 'react';
import { Container } from './styles';
import { primaryColor } from '../../styles/global';
import { MdPerson, MdVpnKey } from 'react-icons/md';
import { addEmail, addPassword, addRemember } from '../../actions/user';
import { Header, Input, Footer } from '../../components';

export default function Login() {
  const [remember, setRemember] = React.useState(false);

  /**
   * Remember?
   * yes => next time open in Main page
   * no => next time open in Login page
   */
  const handleRemember = React.useCallback(() => setRemember(c => !c), [
    setRemember
  ]);
  /**
   * On click submit button
   */
  const handleSubmit = React.useCallback(event => {
    event.preventDefault();
    alert('oLa');
  }, []);

  const forgotPassword = () => {
    window.location.href = '/forgot';
  };

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
          action={addPassword}
          type='password'
          placeholder='Senha'
          Icon={MdVpnKey}
          IconSize={20}
          IconColor='rgba(0, 0, 0, 0.3)'
          style={{ width: '300px' }}
        />

        <div className='row'>
          <Input
            type='checkbox'
            id='remember'
            label='Lembrar-me'
            onClick={handleRemember}
            action={addRemember}
            value={remember}
          />
          <Input
            type='button'
            value='Esqueceu a senha?'
            style={{
              border: 'none',
              background: 'none',
              color: primaryColor,
              fontSize: '12px',
              cursor: 'pointer'
            }}
            onClick={forgotPassword}
          />
        </div>

        <Input
          value='Entrar'
          type='submit'
          onClick={handleSubmit}
          style={{
            width: '300px',
            marginTop: '20px',
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
