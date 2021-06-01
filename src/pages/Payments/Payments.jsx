import React from 'react';

import Topic from '../../components/Topic/Topic';

import payments from '../../assets/Payments.png';
import './Payments.css';

const Payments = () => (
  <section className="payments">
    <img src={payments} alt="Payments" />
    <Topic
      className="topic -payments"
      title="Shared payments made simple"
      text="Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
      link="Read how Bridget’s share (without Hapu) ended over $15"
    />
  </section>
);

export default Payments;
