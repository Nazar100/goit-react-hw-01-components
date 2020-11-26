import Friend from './Friend/Friend';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={s.item}>
            <Friend
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
