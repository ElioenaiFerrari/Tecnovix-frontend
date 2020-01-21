import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  input {
    padding: 10px 30px;
    text-align: center;
    background: #fff;
    border: none;
    background: #fff;
    color: #666;
    border-radius: 4px;

    ::placeholder {
      color: #999;
    }
  }

  label {
    color: #888;
    font-size: 12px;
    margin-left: 5px;
  }
`;
