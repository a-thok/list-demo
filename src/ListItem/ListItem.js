import React from 'react';
import './ListItem.css';
import Notification from './Notification';
import Message from './Message';
import * as contentComponents from './contentComponents';

export default function ListItem({ isFromCurrentUser, type, avatar, content }) {
  // 通知类型：具有特殊的展示形式
  if (type === 'notification') {
    return <Notification content={content} />
  }

  // 普通消息类型：具有共通的展示形式；不同之处只在于内容，这部分使用各子类型对应的内容组件来渲染。
  const [firstLetter, ...otherLetters] = type;
  const ComponentName = firstLetter.toUpperCase() + otherLetters.join('');
  const ContentComponent = contentComponents[ComponentName];

  return (
    <Message
      isFromCurrentUser={isFromCurrentUser}
      avatar={avatar}
    >
      <ContentComponent content={content} />
    </Message>
  );
}
