import React from 'react';
import { Container } from './styles';
import { Input } from '../../../components';
import { primaryColor } from '../../../styles/global';
import { MdAdd } from 'react-icons/md';

const Header = React.memo(({ modalIsOpen, setModalIsOpen }) => {
  const openModal = React.useCallback(() => {
    setModalIsOpen(true);
  }, [setModalIsOpen]);

  return (
    <Container>
      <Input
        value='Adicionar'
        type='button'
        Icon={MdAdd}
        onClick={openModal}
        IconSize={15}
        IconColor='#fff'
        style={{
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
          width: '100px',
          height: '30px',
          backgroundColor: primaryColor,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 13,
          padding: 0,
          cursor: 'pointer',
          marginLeft: '5px'
        }}
      />
      {/* <div className='search'>
        <Input
          value='Nome'
          type='button'
          onClick={() => {}}
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '50px',
            height: '30px',
            backgroundColor: '#fff',
            color: primaryColor,
            fontWeight: 'bold',
            fontSize: 13,
            padding: 0,
            cursor: 'pointer'
          }}
        />
        <Input
          value='Email'
          type='button'
          onClick={() => {}}
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '50px',
            height: '30px',
            backgroundColor: '#fff',
            color: primaryColor,
            fontWeight: 'bold',
            fontSize: 13,
            padding: 0,
            cursor: 'pointer',
            margin: '0 5px'
          }}
        />
        <Input
          placeholder='Informe o termo de pesquisa...'
          type='text'
          Icon={MdSearch}
          IconSize={15}
          IconColor='rgba(0, 0, 0, 0.3)'
          onClick={() => {}}
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '250px',
            height: '30px',
            backgroundColor: '#fff',
            color: '#999',
            fontWeight: 'bold',
            fontSize: 13,
            padding: 0,
            margin: '0 5px'
          }}
        />
        <Input
          value='Filtrar'
          type='submit'
          onClick={() => {}}
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '50px',
            height: '30px',
            backgroundColor: primaryColor,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 13,
            padding: 0,
            cursor: 'pointer'
          }}
        />
        <Input
          value='Limpar'
          type='button'
          onClick={() => {}}
          style={{
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            width: '50px',
            height: '30px',
            backgroundColor: '#fff',
            color: primaryColor,
            fontWeight: 'bold',
            fontSize: 13,
            padding: 0,
            cursor: 'pointer',
            margin: '0 5px'
          }}
        />
      </div> */}
    </Container>
  );
});

export default Header;
