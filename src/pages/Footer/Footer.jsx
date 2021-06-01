import React from 'react';

import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';

import Logo from '../../assets/Logo.svg';
import Twitter from '../../assets/Twitter.svg';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';

import { FiCalendar } from 'react-icons/fi';

import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="createNannyShare">
      <h1>Become a nanny share host</h1>
      <p>Takes less than 5 minutes to get started</p>
      <Button>
        <FiCalendar className="calendar"/>
        <div className="wrapperTitle">
        <p className="buttonTitle">Create Your  Nanny Share</p>
        <span>Takes less than 5 minutes</span>
        </div>
      </Button>
      <a href="FakeLink">Or browse local nanny-shares</a>
      </div>
      <div className="wrapperMedia">
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li className="share">Share Your Nanny</li>
          <li className="story">Our Story</li>
          <li className="blog">Blog</li>
          <li>Terms & Privacy</li>
        </ul>
      </nav>
      <div className="social-media">
      <img src={Twitter} alt="Twitter" />
      <img src={Facebook} alt="Facebook" />
      <img src={Instagram} alt="Instagram" />
      </div>
      </div>
      <Divider />
      <footer className="copyright">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </footer>
    </section>
  )
}

export default Footer;
