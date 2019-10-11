import React from 'react';
import ReactDOM from 'react-dom';

import './demo.css';
import ListItem from './ListItem/ListItem';

// 虚拟状态
const state = {
  user: '大雄',

  listItems: [
    {
      type: 'notification',
      content: '以上是打招呼的内容',
    },
    {
      type: 'notification',
      content: '你已添加了胖虎，现在可以开始聊天了。',
    },
    {
      type: 'text',
      from: '胖虎',
      avatar: 'https://picsum.photos/50?random=1',
      content: '把你的漫画书全部送过来本大爷家里'
    },
    {
      type: 'text',
      from: '大雄',
      avatar: 'https://picsum.photos/50?random=2',
      content: '凭什么啊😨',
    },
    {
      type: 'image',
      from: '大雄',
      avatar: 'https://picsum.photos/50?random=2',
      content: 'https://picsum.photos/100',
    },
    {
      type: 'text',
      from: '胖虎',
      avatar: 'https://picsum.photos/50?random=1',
      content: '我们不是朋友吗！朋友之间就是：我的东西是我的东西，你的东西还是我的东西！'
    },
    {
      type: 'notification',
      content: '大雄撤回了一条消息',
    },
    {
      type: 'text',
      from: '胖虎',
      avatar: 'https://picsum.photos/50?random=1',
      content: '你是想让本大爷揍扁吗？😠'
    },
    {
      type: 'money',
      from: '大雄',
      avatar: 'https://picsum.photos/50?random=2',
      content: '饶了我吧😭',
    },
    {
      type: 'text',
      from: '胖虎',
      avatar: 'https://picsum.photos/50?random=1',
      content: '大雄，你真不愧是我的好朋友！感动😹',
    },
  ]
};

function Demo() {
  const { user, listItems } = state;

  return (
    <ol className="list">
      {
        listItems.map((item, index) => (
           <li key={index}>
             <ListItem
              isFromCurrentUser={item.from === user}
              {...item}
             />
           </li>
        ))
      }
    </ol>
  );
}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo'),
);
