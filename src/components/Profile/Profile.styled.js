import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid rgb(104, 104, 104);
  border-radius: 25px;
  text-align: center;
  background-color: #1111;
  overflow: hidden;
  box-shadow: 5px 5px 5px rgba(104, 104, 104, 0.15);
`;

export const MainContainer = styled.div`
  padding: 70px 70px 0 70px;
`;

export const Avatar = styled.img`
  max-height: 250px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
`;

export const Username = styled.h2`
  font-size: 50px;
  margin-top: 30px;
`;

export const Tag = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

export const Location = styled.p`
  color: rgba(0, 0, 0, 0.7);
`;

export const StatsList = styled.ul`
  display: flex;
  margin-top: 30px;
`;

export const StatsElement = styled.li`
  padding: 10px;
  align-items: center;
  width: calc(100% / 3);
  font-size: 20px;
  font-weight: 700;
  border-top: 1px solid rgb(104, 104, 104);
  background-color: #fff;

  :not(:last-child) {
    border-right: 1px solid rgb(104, 104, 104);
  }
`;
