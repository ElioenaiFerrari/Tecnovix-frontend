import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 120px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  .progress {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    min-width: 250px;
    max-width: 250px;
    height: 100px;
    margin: 0 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .progress h1 {
    color: ${primaryColor};
    font-size: 28px;
  }

  .progress h5 {
    color: #999;
    font-size: 13px;
  }
`;
