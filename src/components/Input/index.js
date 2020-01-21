import React from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';

const Input = React.memo(props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const action = React.useCallback(
    ({ target }) => {
      console.log(state);

      dispatch(props.action(target.value));
    },
    [dispatch, props, state]
  );

  return (
    <Container props={props}>
      {props.Icon && (
        <props.Icon
          size={props.IconSize}
          color={props.IconColor}
          style={{ position: 'absolute', alignSelf: 'center', marginLeft: 10 }}
        />
      )}
      <input {...props} onChange={action} />
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
    </Container>
  );
});

export default Input;
