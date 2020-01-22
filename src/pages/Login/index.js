import React from 'react';
import { Container } from './styles';
import { primaryColor } from '../../styles/global';
import { MdPerson, MdVpnKey } from 'react-icons/md';
import { addEmail, addPassword, addRemember } from '../../actions/user';
import { Input, Footer } from '../../components';
import { useSelector } from 'react-redux';
import { onSignIn } from '../../services/auth';
import api from '../../services/api';

export default function Login() {
  /**
   * All 'attributes' of user
   */
  const user = useSelector(state => state.user);

  const [remember, setRemember] = React.useState(true);

  /**
   * Remember?
   * yes => next time open in Main page
   * no => next time open in Login page
   */
  const handleRemember = React.useCallback(() => {
    setRemember(!remember);
    console.log(remember);
  }, [remember]);
  /**
   * On click submit button
   */
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      /**
       * Validate form
       */
      if (user.email.length && user.password.length) {
        const { data } = await api.get('/authenticate', {
          email: user.email,
          password: user.password
        });

        /**
         * Run all array and compare attributes=>
         * if true => user login in Sys
         * if not => user try again
         */
        let auth = false;
        data.map(item => {
          if (item.email === user.email && item.password === user.password) {
            auth = true;
          }
        });
        /**
         * if auth => redirect to dashboard
         * if not => nothing else
         */
        if (auth) {
          onSignIn('Token');
          return (window.location.href = '/');
        }
        return alert('Email ou senha incorretos!');
      }
    } catch (error) {
      console.log(error);
    }

    return alert(new Error('O campo email e senha são obrigatórios!'));
  }
  /**
   * Case forgot password
   */
  const forgotPassword = () => {
    window.location.href = '/forgot';
  };

  return (
    <>
      <Container>
        <Input
          action={addEmail}
          type='email'
          placeholder='E-mail*'
          Icon={MdPerson}
          IconSize={20}
          IconColor='rgba(0, 0, 0, 0.3)'
          width='300px'
          style={{
            margin: '20px 0',
            width: '300px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
          }}
        />
        <Input
          action={addPassword}
          type='password'
          placeholder='Senha*'
          Icon={MdVpnKey}
          IconSize={20}
          IconColor='rgba(0, 0, 0, 0.3)'
          style={{
            width: '300px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
          }}
        />

        <div className='row'>
          <Input
            type='checkbox'
            id='remember'
            label='Lembrar-me'
            onClick={handleRemember}
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
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={forgotPassword}
          />
        </div>

        <Input
          value='Entrar'
          type='submit'
          onClick={handleSubmit}
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
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
