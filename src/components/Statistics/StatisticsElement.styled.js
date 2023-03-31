import styled from 'styled-components';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: calc(100% / 4);
  font-size: 20px;
  font-weight: 700;

  :not(:last-child) {
    border-right: 1px solid black;
  }
`;
