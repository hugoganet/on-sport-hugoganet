import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoginModal from '../../Modales/LoginModal';
import SignupModal from '../../Modales/SignupModal';
import ConfirmModal from '../../Modales/ConfirmModal';

import Logo from '../../../assets/OnSport_logo.png';
import './style.scss';

function Header({ onLoginSuccess, userId }) {
  const [isLogged, setIsLogged] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogout = () => {
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    setIsLogged(false);
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
  };

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleSignup = () => {
    setShowSignupModal(true);
  };

  const handleLoginClose = () => {
    setShowLoginModal(false);
  };

  const handleSignupClose = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      {isLogged ? (
        <>
          <button className="header__button" type="button">
            {' '}
            <NavLink
              to={`/profile/${userId}`}
              className="menu-link"
            >
              Mon profil
            </NavLink>
          </button>
          <button className="header__button" type="button" onClick={handleLogout}>Déconnexion</button>
        </>
      ) : (
        <>
          <button className="header__button" type="button" onClick={handleLogin}>Connexion</button>
          <button className="header__button" type="button" onClick={handleSignup}>Créer un compte</button>
        </>
      )}
      {showConfirmModal && (
      <ConfirmModal onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
      {showLoginModal && (
      <LoginModal
        onClose={handleLoginClose}
        onLogin={() => setIsLogged(true)}
        onLoginSuccess={onLoginSuccess}
        userId={userId}
      />
      )}
      {showSignupModal && <SignupModal onClose={handleSignupClose} />}
    </div>
  );
}

Header.propTypes = {
  onLoginSuccess: Proptypes.func.isRequired,
  userId: Proptypes.number,
};

Header.defaultProps = {
  userId: null,
};

export default Header;
