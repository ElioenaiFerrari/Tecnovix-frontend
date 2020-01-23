import React from 'react';

import { Container } from './styles';

import { Input } from '../../../components';
import {
  addEmail,
  addName,
  addProjects,
  addEnterprise,
  addConclused,
  addWorks
} from '../../../actions/client';
import { primaryColor } from '../../../styles/global';
import { MdClose } from 'react-icons/md';
import api from '../../../services/api';
import { useSelector } from 'react-redux';

const Add = React.memo(({ modalIsOpen, setModalIsOpen }) => {
  /**
   * Store client
   */
  const client = useSelector(state => state.client);
  /**
   * Function to add new client after filling in the information
   */
  const addClient = React.useCallback(async () => {
    try {
      const { data } = await api.post('/clients', {
        id: Math.random() * 50,
        name: client.name,
        email: client.email,
        projects: Number(client.projects),
        created_at: new Date().toDateString()
      });

      if (data.id) {
        alert('Cliente adicionado com sucesso!');
        return window.location.reload();
      }
      return alert('Erro');
    } catch (e) {
      console.log(e);
    }
  }, [client.email, client.name, client.projects]);

  const closeModal = React.useCallback(() => setModalIsOpen(false), [
    setModalIsOpen
  ]);

  return (
    <Container style={{ display: modalIsOpen ? null : 'none' }}>
      <MdClose
        onClick={closeModal}
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
        autoFocus
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
        required
        // dialog={dialogEmail}
        action={addEnterprise}
        type='text'
        fieldName='empresa'
        placeholder='Empresa*'
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
        action={addConclused}
        type='text'
        fieldName='concluídos'
        placeholder='Concluídos*'
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
        action={addWorks}
        type='text'
        fieldName='Qtd. trabalhos'
        placeholder='Qtd. trabalhos*'
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
        id='btn-add-client'
        value='Adicionar'
        type='button'
        onClick={addClient}
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
