import React from 'react';

import './Toast.css';

const Toast = ({ description, className }) => (
  <div id="toast" className={className}>
    <span id="spanDescriptiton">{description}</span>
  </div>
);

export default Toast;
