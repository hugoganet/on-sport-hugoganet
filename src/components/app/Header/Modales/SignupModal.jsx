/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function SignupModal(props) {
  const { onClose } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vérifier les informations de création de compte ici
    onClose();
  };

  return (
    <div className="SignupModal">
      <div className="SignupModal__content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nom d&apos;utilisateur:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="email">Adresse email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="confirm-password">Confirmer le mot de passe:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <button type="submit">Créer un compte</button>
        </form>
      </div>
    </div>
  );
}

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SignupModal;
