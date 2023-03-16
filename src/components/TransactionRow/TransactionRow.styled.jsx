import styled from 'styled-components';

export const Text = styled.td`
  padding: 8px;
  text-align: center;
  color: #5d7791;
  text-transform: capitalize;
  width: 200px;
  border-right: 1px solid #66c4d0;

  :last-child {
    border-right: none;
  }
`;
