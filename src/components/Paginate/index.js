import React from 'react';

import { Container } from './styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { primaryColor } from '../../styles/global';

const Paginate = React.memo(({ setPage, pages }) => {
  const pagesLength = [];

  for (let i = 1; i <= pages; i++) pagesLength.push(i);

  const paginate = React.useCallback(
    page => {
      setPage(page);
    },
    [setPage]
  );

  const nextPage = React.useCallback(() => {
    return setPage(c => (c === pagesLength.length ? c : c + 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPage]);
  const backPage = React.useCallback(() => {
    setPage(c => (c === 1 ? c : c - 1));
  }, [setPage]);

  return (
    <Container>
      <a className='backNext' onClick={backPage}>
        <MdKeyboardArrowLeft size={20} />
      </a>
      {pagesLength.map(page => (
        <a className='pages' onClick={() => paginate(page)}>
          <p>{page}</p>
        </a>
      ))}
      <a className='backNext' onClick={nextPage}>
        <MdKeyboardArrowRight size={20} />
      </a>
    </Container>
  );
});

export default Paginate;
