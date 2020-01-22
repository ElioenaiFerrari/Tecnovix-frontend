import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;

  div.search {
    display: flex;
    flex: 1;
    /* width: 200px; */
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 0 10px;
  }
`;
