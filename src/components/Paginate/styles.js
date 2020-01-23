import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  right: 10px;
  padding: 5px;

  a.pages {
    padding: 5px 15px;
    color: ${primaryColor};
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #999;
    margin: 0 2px;
  }

  a.backNext {
    border: 1px solid #999;
    padding: 0px 10px;
    margin: 0 2px;
    color: ${primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
