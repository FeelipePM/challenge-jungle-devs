import React from 'react';

import Topic from '../../components/Topic/Topic';
import costs from '../../assets/Costs.png';

import './Costs.css';

const Costs = () => (
  <section className="costs">
    <Topic
      className="topic -costs"
      title="Share your home, nanny and costs"
      text="You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."
      link="Ready to get started?"
    />
    <img src={costs} alt="Costs" />
    <p />
  </section>
);

export default Costs;
