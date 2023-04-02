import FriendListItem from './FriendListItem';
import { FriendListUl } from './FriendList.styled';

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
