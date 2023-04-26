import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px 20px;
  background-color: rgba(17, 17, 17, 0.067);
  box-shadow: rgba(104, 104, 104, 0.15) 5px 5px;
  :not(:first-child) {
    margin-top: 10px;
  }

  img {
    margin: 0 20px 0 10px;
    border-radius: 25px;
    background-color: #fff;
  }
`;

export const Active = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: #008000;
`;

export const NoActive = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: red;
`;
