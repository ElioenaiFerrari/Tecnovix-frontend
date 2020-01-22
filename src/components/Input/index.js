import React from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';

const Input = React.memo(props => {
  /**
   * Redux
   */
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  /**
   * Ref input and label => validate function
   */

  const action = React.useCallback(
    ({ target }) => {
      console.log(state);
      dispatch(props.action(target.value));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  // const validate = React.useCallback(({ target }) => {
  //   if (target.type === 'email') {
  //     const filter = /^([\w-]+(?:.[\w-]+))@((?:[\w-]+.)\w[\w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i;
  //     if (filter.test(String(target.value).toLowerCase())) {
  //       return target.required;
  //     }
  //   }
  // }, []);

  return (
    <Container props={props}>
      {props.Icon && (
        <props.Icon
          size={props.IconSize}
          color={props.IconColor}
          style={{
            position: 'fixed',
            alignSelf: 'center',
            marginLeft: 10
          }}
        />
      )}
      <input {...props} onChange={props.action ? action : null} />
      {props.label && <p>{props.label}</p>}

      {props.required && (
        <div className='validate ' style={{ opacity: props.dialog ? 1 : 0 }}>
          <label>O campo {props.fieldName.toLowerCase()} é obrigatório!</label>
        </div>
      )}
    </Container>
  );
});

export default Input;

/**
 * Input propertys
 * Icon => If have icon in props => Show the icon left to input
 * div validate => If field to required and field equals null =>
 * show label say "O campo {field} é obrigatório!"
 */
