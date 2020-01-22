import React from 'react';

import { Container } from './styles';

const Progress = React.memo(props => {
  return (
    <Container>
      {props.data.map(item => (
        <div className='progress'>
          <h5>{item.title}</h5>
          <h1>{item.data}</h1>
        </div>
      ))}
    </Container>
  );
});

export default Progress;
