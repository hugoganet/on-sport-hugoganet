import React from 'react';

import Logo from '../../../assets/OnSport_logo.png';
import './style.scss';

function Header() {
  return (
    <div className="header">

      <div className="ui small image">
        <img src={Logo} alt="logo" />
      </div>
      <button type="button" className="ui primary button">
        SignIn
      </button>
      <button type="button" className="ui primary button">
        LogIn
      </button>
    </div>
  );
}

export default Header;
