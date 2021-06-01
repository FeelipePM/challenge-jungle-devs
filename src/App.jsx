import React from 'react';

import './styles/global.css';

import Divider from './components/Divider/Divider';

import Header from './pages/Header/Header';
import Costs from './pages/Costs/Costs';
import LookingToShare from './pages/LookingToShare/LookingToShare';
import Payments from './pages/Payments/Payments';
import Childcare from './pages/Childcare/Childcare';
import DailyDiary from './pages/DailyDiary/DailyDiary';
import Footer from './pages/Footer/Footer';

const App = () => (
  <>
    <Header />
    <Costs />
    <Divider />
    <LookingToShare />
    <Divider />
    <Payments />
    <Divider />
    <Childcare />
    <Divider />
    <DailyDiary />
    <Footer />
  </>
);

export default App;
