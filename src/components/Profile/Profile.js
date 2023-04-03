import {
  Wrapper,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatsElement,
  Description,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  user: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt="avatar"></Avatar>
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatsList>
        <StatsElement>
          <p>Followers:</p>
          <span>{followers}</span>
        </StatsElement>
        <StatsElement>
          <p>Views:</p>
          <span>{views}</span>
        </StatsElement>
        <StatsElement>
          <p>Likes:</p>
          <span>{likes}</span>
        </StatsElement>
      </StatsList>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
