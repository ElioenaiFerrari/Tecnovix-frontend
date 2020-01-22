import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

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

  .validate {
    margin-top: 20px;
    margin-left: 310px;
    position: absolute;
    transition: opacity 0.3s ease-in;
  }

  label {
    color: ${primaryColor};
    font-weight: bold;
    font-size: 12px;
  }

  p {
    color: #999;
    font-weight: bold;
    font-size: 12px;
    margin-left: 2px;
  }
`;
