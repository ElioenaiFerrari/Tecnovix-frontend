import styled from 'styled-components';
import { primaryColor } from '../../../styles/global';

export const Container = styled.div`
  display: grid;
  flex-direction: row;
  padding: 0 20px;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(2, 150px);
  grid-gap: 80px 0;

  div.card {
    min-width: 250px;
    padding: 10px;
    max-width: 250px;
    border-radius: 2px;
    min-height: 150px;
    max-height: 150px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.2s ease-out;
  }

  div.card:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  }

  div.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }

  div.header h1 {
    color: #999;
    margin-left: 5px;
  }

  img {
    width: 20px;
    height: 20px;
    border-radius: 50px;
  }

  div.content {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  div.content h1 {
    font-size: 12px;
    color: #999;
  }

  div.content p {
    font-size: 25px;
    color: ${primaryColor};
    font-weight: bold;
  }

  div.footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid ${primaryColor};
    padding: 10px;
  }

  div.footer div.action {
    color: #999;
  }
`;
