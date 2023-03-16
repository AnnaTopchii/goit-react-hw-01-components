import PropTypes from 'prop-types';
import {
  ProfileCard,
  Decsription,
  Avatar,
  UserName,
  UserText,
  UserStats,
  StatsBlock,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Decsription>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </Decsription>

      <UserStats>
        <StatsBlock>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{numberWithCommas(stats.followers)}</UserQuantity>
        </StatsBlock>
        <StatsBlock>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{numberWithCommas(stats.views)}</UserQuantity>
        </StatsBlock>
        <StatsBlock>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{numberWithCommas(stats.likes)}</UserQuantity>
        </StatsBlock>
      </UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
