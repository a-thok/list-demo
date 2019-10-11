import React from 'react';
import './Notification.css';

export default function Notification({ content }) {
  return (
    <div className="notification">{ content }</div>
  );
}
