import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 300px;
  height: 250px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  z-index: 50;
  left: 40%;
  overflow: hidden;
  top: 150px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: none;
`;
