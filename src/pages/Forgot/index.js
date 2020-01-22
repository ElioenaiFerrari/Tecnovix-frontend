import React from 'react';
import { MdPerson } from 'react-icons/md';
import { Container } from './styles';
import { Input, Footer } from '../../components';
import { addEmail } from '../../actions/user';
import { primaryColor } from '../../styles/global';
import { useSelector } from 'react-redux';

export default function Forgot() {
  const [dialogEmail, setDialogEmail] = React.useState(false);
  const user = useSelector(state => state.user);

  const handleSubmit = () => {
    if (!user.email.length) {
      setDialogEmail(true);
    }

    return setTimeout(() => setDialogEmail(false), 1500);
  };

  const backLogin = () => (window.location.href = '/login');

  return (
    <>
      <Container>
        {/* <Header width='200px' height='50px' /> */}
        <Input
          action={addEmail}
          type='email'
          dialog={dialogEmail}
          placeholder='E-mail*'
          required
          fieldName='email'
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
          onClick={handleSubmit}
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
