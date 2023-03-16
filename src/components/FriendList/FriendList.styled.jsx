import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  width: 250px;
  border-radius: 4px;
  padding: 8px 16px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`;
