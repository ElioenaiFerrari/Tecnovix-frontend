import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import { Container } from './styles';
import Header from '../Header';
import api from '../../../services/api';
import { Paginate } from '../../../components';

const Table = React.memo(({ modalIsOpen, setModalIsOpen }) => {
  const [page, setPage] = React.useState(1);
  const [clients, setClients] = React.useState({});
  const [pageCount, setPageCount] = React.useState(1);

  React.useEffect(() => {
    async function loadClients() {
      const response = await api.get(`/clients?_page=${page}&_limit=7`);

      const { data, headers } = await response;

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

      setPageCount(Math.round(headers['x-total-count'] / 7));
      setClients({ columnDefs, rowData });
    }
    loadClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <Header modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <div className='ag-theme-material'>
        <AgGridReact
          headerHeight={40}
          rowStyle={{ color: 'rgba(0, 0, 0, 0.6)' }}
          columnDefs={clients.columnDefs}
          colWidth={270}
          rowData={clients.rowData}
        ></AgGridReact>
      </div>
      <Paginate setPage={setPage} pages={pageCount ? pageCount : 1} />
    </Container>
  );
});

export default Table;
