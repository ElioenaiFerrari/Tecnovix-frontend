import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

export const Container = styled.div`
  button {
    border: none;
    background: transparent;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    background: ${primaryColor};
    color: #fff;
    cursor: pointer;
  }
`;
