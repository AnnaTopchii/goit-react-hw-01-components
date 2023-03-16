import styled from 'styled-components';

export const ProfileCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
  width: 250px;
  margin: 30px auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`;

export const Decsription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 32px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const UserText = styled.p`
  color: #5d7791;
`;

export const UserStats = styled.ul`
  display: flex;
  background-color: #e6eaee;
  border-top: 1px solid #5d7791;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StatsBlock = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  padding: 20px 12px;
  border-right: 1px solid #5d7791;
  :last-child {
    border-right: none;
  }
`;

export const UserLabel = styled.p`
  color: #5d7791;
  font-size: 12px;
`;

export const UserQuantity = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
