import styled from 'styled-components';
import { primaryColor } from '../../styles/global';

export const Container = styled.div`
  position: fixed;
  width: 50px;

  #menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #2f3c48;
    position: fixed;
  }

  .menu-items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 250px;
    padding: 15px 5px;
  }

  .menu-items:hover {
    background: ${primaryColor};
  }

  .menu-items a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    margin-left: 10px;
  }
`;
