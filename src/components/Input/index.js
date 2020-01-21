import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';

const Input = React.memo(props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const onChange = React.useCallback(
    ({ target }) => {
      console.log(state.user);

      return dispatch(props.action(target.value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.user]
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
      <input
        type={props.type}
        onChange={onChange}
        placeholder={props.placeholder}
      />
    </Container>
  );
});

export default Input;
