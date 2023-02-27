import React from 'react';

import Logo from '../../../assets/OnSport_logo.png';
<NavLink to="/profile" className="menu-link">Mon profil</NavLink>

import './style.scss';

function Footer() {
  return (
    <div className="footer">

      <div className="footer__img--div">
        <img className="footer__img" src={Logo} alt="logo" />
      </div>
      <button type="button" className="footer__button">
      <NavLink to="/about" className="menu-link">A propos</NavLink>
      </button>
      <button type="button" className="footer__button">
      <NavLink to="/contact" className="menu-link">Contact</NavLink>
      </button>
    </div>
  );
}

export default Footer;
