import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

export const Container = styled.div`
  position: fixed;
  width: 50px;
  top: 0;
  left: 0;
  z-index: 1;

  #menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #2f3c48;
    position: fixed;
    z-index: 1;
    text-decoration: none;
    color: #fff;
  }

  .menu-items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 20px 10px;
  }

  .menu-items:hover {
    background: ${primaryColor};
  }

  .menu-items a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
    width: 100%;
  }
`;
