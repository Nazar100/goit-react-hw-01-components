import PropTypes from 'prop-types';

export default function Friend({ avatar, name, isOnline }) {
  let status = isOnline ? 'green' : 'red';

  return (
    <li className="item">
      <span className={status}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
