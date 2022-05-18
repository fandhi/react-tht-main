import React from 'react';
import './dialog.css';

export default function Dialog({visible, onclose, data}) {
  return (
    <div className={`dialog ${visible ? 'dialog--visible' : ''}`}>
      <div className="dialog__header">
        <button onClick={onclose} className="dialog__close">x</button>
      </div>
      <div className="dialog__body">
        <div className="dialog__title">Success</div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
