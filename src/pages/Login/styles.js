import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  div.row {
    width: 330px;
    margin-left: 35px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`;
