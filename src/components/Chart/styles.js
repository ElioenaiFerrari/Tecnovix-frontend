import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  position: absolute;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  bottom: 50px;
  background: #eee;

  h2 {
    text-align: left;
    margin-left: 40px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    color: ${primaryColor};
  }
`;
