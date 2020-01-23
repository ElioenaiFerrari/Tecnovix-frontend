import React from 'react';

import { Container } from './styles';
import Table from './Table';
import Add from './Add';
import Card from './Card';
import { FaTable, FaChartBar } from 'react-icons/fa';
import { primaryColor } from '../../styles/global';

export default function Clients() {
  const [layout, setLayout] = React.useState('table');

  const turnLayout = React.useCallback(() => {
    setLayout(c => (c === 'table' ? 'card' : 'table'));
  }, [setLayout]);
  /**
   * Modal is a card to add new client
   */
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <Container>
      {layout === 'table' && (
        <FaTable
          onClick={turnLayout}
          size={30}
          color={primaryColor}
          style={{
            position: 'fixed',
            right: 100,
            top: 50,
            cursor: 'pointer'
          }}
        />
      )}
      {layout === 'card' && (
        <FaChartBar
          onClick={turnLayout}
          size={30}
          color={primaryColor}
          style={{
            position: 'fixed',
            right: 100,
            top: 50,
            cursor: 'pointer'
          }}
        />
      )}
      <Add modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      {layout === 'table' && (
        <Table modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      )}
      {layout === 'card' && <Card />}
    </Container>
  );
}
