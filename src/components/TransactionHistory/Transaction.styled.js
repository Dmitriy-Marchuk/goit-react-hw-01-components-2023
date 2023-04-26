import styled from 'styled-components';

export const TransactionItem = styled.tr`
  border-bottom: 1px solid black;
  td {
    padding: 5px 10px;
    :not(:nth-child(3n)) {
      border-right: 1px solid rgba(104, 104, 104, 0.15);
    }
  }
`;
