import React, { Fragment } from 'react';

const github = 'https://www.github.com/patemeryfl';
const Footer = () => (
  <Fragment>
    <header className="footer">
      Created and maintained by <a href={github}>Pat Emery</a><br />
      - <a href={`${github}/react-simple-starter/blob/master/docs/index.md`}>Docs</a>
      - <a href={`${github}/react-simple-starter`}>Github</a>
      - <a href={`${github}/react-simple-starter`}>FAQ</a> - <br />
      Copyright 2018 &copy;
    </header>
  </Fragment>
);

export default Footer;
