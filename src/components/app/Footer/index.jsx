import React from 'react';

import Logo from '../../../assets/OnSport_logo.png';

import './style.scss';

function Footer() {
  return (
    <div className="footer">

      <div className="footer__img--div">
        <img className="footer__img" src={Logo} alt="logo" />
      </div>
      <button type="button" className="footer__button">
        À propos
      </button>
      <button type="button" className="footer__button">
        Contact
      </button>
    </div>
  );
}

export default Footer;
