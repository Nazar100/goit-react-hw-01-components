import PropTypes from 'prop-types';
import React from 'react';
import s from './Friend.module.css';

export default function Friend({ avatar, name, isOnline }) {
  let status = isOnline ? 'green' : 'red';

  return (
    <>
      <span className={s.stat} style={{ backgroundColor: status }}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
