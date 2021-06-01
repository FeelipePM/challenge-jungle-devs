import React from 'react';

import Topic from '../../components/Topic/Topic';

import dailyDiary from '../../assets/DailyDiary.png';
import './DailyDiary.css';

const DailyDiary = () => (
  <section className="dailyDiary">
    <img src={dailyDiary} alt="Daily Diary" />
    <Topic
      className=" topic -diary"
      title="Coming soon: Nanny Share Daily Diary!"
      text="With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!"
    />
  </section>
);

export default DailyDiary;
