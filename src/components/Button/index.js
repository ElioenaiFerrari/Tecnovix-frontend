import React from 'react';

import { Container } from './styles';

const Button = React.memo(props => {
  return (
    <Container>
      <button {...props}>{props.text}</button>
    </Container>
  );
});

export default Button;
