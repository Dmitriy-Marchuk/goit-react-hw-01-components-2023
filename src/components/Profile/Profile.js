import {
  Wrapper,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatsElement,
  MainContainer,
} from './Profile.styled';

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
      <MainContainer>
        <Avatar src={avatar} alt="avatar"></Avatar>
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </MainContainer>
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

Profile.protoTypes = {};
