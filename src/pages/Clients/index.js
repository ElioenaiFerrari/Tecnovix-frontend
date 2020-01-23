import React from 'react';

import { Container } from './styles';
import Table from './Table';
import Add from './Add';

export default function Clients() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  return (
    <Container>
      <Add modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Table modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </Container>
  );
}
