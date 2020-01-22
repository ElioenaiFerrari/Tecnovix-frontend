import styled from 'styled-components';
import { primaryColor } from '../../../styles/global';

export const Container = styled.div`
  display: block;
  flex: 1;
  flex-direction: column;

  div.ag-theme-material {
    display: flex;
    width: 100%;
    height: 400px;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    font-weight: bold;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .ag-header-cell {
    background: #fff;
    color: ${primaryColor};
  }

  .ag-header-cell:hover {
    background: ${primaryColor} !important;
    color: #fff !important;
  }

  .ag-icon {
    color: #fff !important;
    transition: transform 0.2s ease-in;
  }

  .ag-icon:hover {
    transform: rotate(180deg);
  }
`;
