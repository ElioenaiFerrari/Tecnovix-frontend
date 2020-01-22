import React from 'react';

import { Container } from './styles';
import Table from './Table';
import Add from './Add';

export default function Clients() {
  return (
    <Container>
      <Add />
      <Table />
    </Container>
  );
}
