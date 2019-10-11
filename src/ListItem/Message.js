import React from 'react';
import './Message.css';

export default function Message({ isFromCurrentUser, avatar, children }) {
  let className = 'message';
  if (isFromCurrentUser) {
    className += ' is-current-user'
  }

  return (
    <div className={className}>
      <img
        className="avatar"
        src={avatar}
        alt=""
      />
      { children }
    </div>
  );
}
