import React from 'react';

import Topic from '../../components/Topic/Topic';

import BillingHistory from '../../assets/BillingHistory.png';
import './Childcare.css';

const Childcare = () => (
  <section className="childcare">
    <Topic
      className="topic -childcare"
      title="A framework built for the long term"
      text="Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
      link="Read how Hapu’s tribal background defines our app"
    />
    <img src={BillingHistory} alt="Billing History" />
  </section>
);

export default Childcare;
