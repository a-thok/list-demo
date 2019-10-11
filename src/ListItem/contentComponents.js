// 各消息自类型的内容组件，实际项目中这些组件可能需要拆分到单独的文件里

import React from 'react';
import './contentComponents.css';

export function Text({ content }) {
  return (
    <div className="text">{ content }</div>
  );
}

export function Image({ content }) {
  return (
    <img
      className="image"
      src={content}
      alt=""
    />
  );
}

export function Money({ content }) {
  return (
    <div className="money">
      <div className="money-body">{ content }</div>
      <div className="money-footer">红包</div>
    </div>
  );
}
