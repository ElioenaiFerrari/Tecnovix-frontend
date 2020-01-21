import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2px 0;

  input {
    padding: 10px 30px;
    text-align: center;
    width: ${props => props.props.width};
    background: #fff;
    border: 1px solid lightgray;
    color: #666;
    ::placeholder {
      color: #999;
    }
  }
`;
