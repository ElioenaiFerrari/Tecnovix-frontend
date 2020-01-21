import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.props.width};
  height: ${props => props.props.height};
  margin-bottom: 30px;

  img {
    width: ${props => props.props.width};
    height: ${props => props.props.height};
    margin-top: 50px;
  }
`;