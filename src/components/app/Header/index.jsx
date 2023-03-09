import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LoginModal from '../../Modales/LoginModal';
import SignupModal from '../../Modales/SignupModal';
import DisconnectionModal from '../../Modales/DisconnectionModal';

import Logo from '../../../assets/OnSport_logo.png';
import './style.scss';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isShowDisconnectionModal, toggleDisconnectionModal] = useState(false);
  const [isLogged, toggleIsLogged] = useState(false);
  const userId = localStorage.getItem('userId');

  return (
    <div className="Header">
      <Link to="/"><img className="Header__logo" src={Logo} alt="logo" /></Link>
      {isLogged ? (
        <>
          <button className="Header__button" type="button">
            {' '}
            <NavLink
              to={`/profile/${userId}`}
              className="menu-link"
            >
              Mon profil
            </NavLink>
          </button>
          <button
            className="Header__button"
            type="button"
            onClick={() => toggleDisconnectionModal(true)}
          >
            Déconnexion
          </button>
        </>
      ) : (
        <>
          <button
            className="Header__button"
            type="button"
            onClick={() => setShowLoginModal(true)}
          >
            Connexion
          </button>
          <button
            className="Header__button"
            type="button"
            onClick={() => setShowSignupModal(true)}
          >
            Créer un compte
          </button>
        </>
      )}
      {isShowDisconnectionModal && (
      <DisconnectionModal
        toggleDisconnectionModal={toggleDisconnectionModal}
        isShowDisconnectionModal={isShowDisconnectionModal}
      />
      )}
      {showLoginModal && (
      <LoginModal
        onClose={() => setShowLoginModal(false)}
        onLogin={() => console.log('tentative de connexion')}
        onLoginSuccess={() => toggleIsLogged(true)}
        userId={userId}
      />
      )}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
    </div>
  );
}

export default Header;
