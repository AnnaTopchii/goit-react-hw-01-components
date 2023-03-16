import styled from 'styled-components';

export const StatisticsCard = styled.section`
  border-radius: 4px;
  background-color: #ffffff;
  width: 400px;
  margin: 0 auto 30px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`;

export const StatisticsTitle = styled.h2`
  display: block;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  text-transform: uppercase;
`;

export const StatisticsBlock = styled.ul`
  display: flex;
  color: #ffffff;
`;

export const StatisticsBlockItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5);
  padding: 8px;

  :first-child {
    border-bottom-left-radius: 4px;
  }

  :last-child {
    border-bottom-right-radius: 4px;
  }
`;
