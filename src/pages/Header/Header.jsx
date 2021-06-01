import React, { useEffect, useState } from 'react';

import AvailableCare from '../../components/AvailableCare/AvailableCare';
import Button from '../../components/Button/Button';

import Badge from '../../assets/Badge.svg';
import NannyShare from '../../assets/NannyShare.png';
import PlayButton from '../../assets/Playbutton.svg';
import ProfileImage from '../../assets/ProfileImage.png';

import './Header.css';

const Header = () => {
  const [hero, setHero] = useState(false);

  const Hero1 = {
    title: 'Create the childcare you need at a price you can afford',
    description:
      'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.',
  };

  const Hero2 = {
    title: 'Easily create or join a local nanny share with Hapu',
    description:
      'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
  };

  useEffect(() => {
    const changeHero = setTimeout(() => {
      setHero(!hero);
    }, 8000);
    return changeHero;
  }, [hero]);

  return (
    <section>
      <div className="wrapperHeader">
        <nav className="menu">
          <ul className="list">
            <img className="badge" src={Badge} alt="Badge" />
            <li>
              <a href="FakeLink">Create Your Nanny Share</a>
            </li>
            <li>
              <a href="FakeLink">Browse Share</a>
            </li>
            <li>
              <a href="FakeLink">Our Story</a>
            </li>
          </ul>
          <div className="wrapperButton">
            <Button className="shareButton">Become a Nanny Share Host</Button>
            <Button className="signIn">Sign In</Button>
          </div>
        </nav>

        <div className="wrapperContent">
          <section className="nannyContent">
            <h1 id="heroTitle">{hero ? Hero1.title : Hero2.title}</h1>
            <p id="heroDescription">
              {hero ? Hero1.description : Hero2.description}
            </p>
            <a href="FakeLink">
              <picture>
                <img
                  className="playButton"
                  src={PlayButton}
                  alt="Play Button"
                />
              </picture>
              See hapu in action (27 seconds)
            </a>
          </section>
          <picture>
            <img className="nannyShare" src={NannyShare} alt="Nanny Share" />
          </picture>
        </div>
      </div>

      <AvailableCare
        avatar={ProfileImage}
        alt="Profile"
        link="Sarah’s day care available now in North Sydney"
        text="Wednesday, Thursday, Friday - 7:30 - 5:30"
      />
    </section>
  );
};
export default Header;
