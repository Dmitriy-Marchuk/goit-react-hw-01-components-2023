import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: rgba(104, 104, 104, 0.15) 5px 5px;
`;

export const TransactionHead = styled.thead`
  background-color: rgba(17, 17, 17, 0.067);

  th {
    padding: 20px 40px;
    width: calc(100% / 3);
  }
`;
