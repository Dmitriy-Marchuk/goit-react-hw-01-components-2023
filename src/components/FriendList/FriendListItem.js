import { FriendItem, Active, NoActive } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export default function FriendListItem({ name, status, avatar }) {
  return (
    <FriendItem>
      {status ? <Active /> : <NoActive />}
      <img src={avatar} alt="User avatar" width="100"></img>
      <p>{name}</p>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  status: PropTypes.bool,
  name: PropTypes.string,
};
