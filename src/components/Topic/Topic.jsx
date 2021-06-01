import React from 'react';

const Topic = ({ title, text, link = null, className }) => (
  <div className={className}>
    <h1 className="title">{title}</h1>
    <p className="text">{text}</p>
    <a className="webLink" href="FakeLink">
      {link}
    </a>
  </div>
);

export default Topic;
