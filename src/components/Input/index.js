import React from 'react';
import { Container } from './styles';

const Input = React.memo(props => {
  return (
    <Container props={props}>
      {props.Icon && (
        <props.Icon
          size={props.IconSize}
          color={props.IconColor}
          style={{ position: 'absolute', alignSelf: 'center', marginLeft: 10 }}
        />
      )}
      <input {...props} />
    </Container>
  );
});

export default Input;
