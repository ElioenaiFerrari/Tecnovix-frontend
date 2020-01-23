import React from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';

const Input = React.memo(props => {
  const [dialog, setDialog] = React.useState(false);
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

  const validate = React.useCallback(
    ({ target }) => {
      if (props.required && target.value === '') {
        setDialog(true);
        target.focus();
      }

      setTimeout(() => {
        setDialog(false);
      }, 1500);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setDialog]
  );

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
      <input
        {...props}
        onChange={props.action ? action : null}
        onBlur={validate}
      />
      {props.label && <p>{props.label}</p>}

      {props.required && (
        <div className='validate ' style={{ opacity: dialog ? 1 : 0 }}>
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
