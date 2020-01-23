import React from 'react';

import { Container } from './styles';
import api from '../../../services/api';
import { Paginate } from '../../../components';
import { FaDownload, FaEdit, FaShare, FaTree } from 'react-icons/fa';

const Card = React.memo(() => {
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState();
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    async function loadClients() {
      const response = await api.get(`/clients?_page=${page}&_limit=10`);

      const { data, headers } = await response;

      setPageCount(Math.round(headers['x-total-count'] / 10));
      setClients(data);
    }
    loadClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log(clients);

  return (
    <Container>
      {clients.map(client => (
        <div className='card'>
          <div className='header'>
            <img src={client.logo} alt='' />
            <h1>{client.enterprise}</h1>
          </div>
          <div className='content'>
            <div className='conclused'>
              <h1>Tarefas concluídas</h1>
              <p>{client.conclused}</p>
            </div>
            <div className='works'>
              <h1>Todos os trabalhos</h1>
              <p>{client.all_works}</p>
            </div>
          </div>
          <div className='footer'>
            <div className='action'>
              <FaDownload />
            </div>
            <div className='action'>
              <FaEdit />
            </div>
            <div className='action'>
              <FaShare />
            </div>
            <div className='action'>
              <FaTree />
            </div>
          </div>
        </div>
      ))}

      <Paginate setPage={setPage} pages={pageCount ? pageCount : 1} />
    </Container>
  );
});

export default Card;
