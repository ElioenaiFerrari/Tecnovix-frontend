import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import { Container } from './styles';
import Header from '../Header';
import api from '../../../services/api';

const Table = React.memo(() => {
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    async function loadClients() {
      const { data } = await api.get('/clients');

      /**
       * Columns
       */
      const columnDefs = [
        {
          headerName: 'Nome',
          field: 'name',
          sortable: true,
          filter: true
          // checkboxSelection: true
        },
        {
          headerName: 'Email',
          field: 'email',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Qtd. projetos',
          field: 'projects',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Data de cadastro',
          field: 'created_at',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Ações',
          field: 'actions',
          sortable: true,
          filter: true
        }
      ];
      /**
       * Rows pick data in API and generate items
       */
      const rowData = data.map(client => ({
        name: client.name,
        email: client.email,
        projects: client.projects,
        created_at: client.created_at,
        actions: ''
      }));

      setClients({ columnDefs, rowData });
    }
    loadClients();
  }, []);

  return (
    <Container>
      <Header />
      <div className='ag-theme-material'>
        <AgGridReact
          headerHeight={40}
          rowStyle={{ color: 'rgba(0, 0, 0, 0.6)' }}
          columnDefs={clients.columnDefs}
          rowData={clients.rowData}
        ></AgGridReact>
      </div>
    </Container>
  );
});

export default Table;
