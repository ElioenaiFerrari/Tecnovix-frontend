import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;

  .row {
    display: flex;
    flex-direction: row;
  }

  p {
    color: #999;
    margin-top: 0;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
    font-size: 13px;
    cursor: pointer;
  }
`;
