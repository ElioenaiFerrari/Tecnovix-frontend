import React from 'react';
import AnyChart from 'anychart-react';

import { Container } from './styles';

const Chart = React.memo(props => {
  return (
    <Container>
      <h2>{props.title}</h2>
      <AnyChart id='chart' {...props} />
    </Container>
  );
});

export default Chart;
