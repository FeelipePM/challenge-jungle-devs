import React from 'react';

import './AvailableCare.css';

const AvailableCare = ({ avatar, alt, link, text }) => (
  <section>
    <div className="availableCare">
      <picture>
        <img src={avatar} alt={alt} />
      </picture>
      <a href="FakeLink">{link}</a>
      <p>{text}</p>
    </div>
  </section>
);

export default AvailableCare;
