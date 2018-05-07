import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import icons from '../assets/svgs';
import Container from './Container';

const Header = () => (
  <Fragment>
    <header className="header">
      <nav>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d={icons.social.rocket} />
          </svg>
          <span>
            Simple Starter
          </span>
        </a>
        <Link to="/" href="/">Home</Link>
        <Link to="/about" href="/about">About</Link>
        <Link to="/features" href="/features">Features</Link>
      </nav>
    </header>
  </Fragment>
);

export default Header;
