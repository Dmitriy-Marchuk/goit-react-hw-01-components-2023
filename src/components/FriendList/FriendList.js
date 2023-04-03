import FriendListItem from './FriendListItem';
import { FriendListUl } from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          status={friend.isOnline}
          avatar={friend.avatar}
        ></FriendListItem>
      ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
