/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function LoginModal(props) {
  const { onClose, onLogin } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vérifier les informations de connexion ici
    onLogin();
  };

  return (
    <div className="LoginModal">
      <div className="LoginModal__content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nom d&apos;utilisateur:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginModal;
