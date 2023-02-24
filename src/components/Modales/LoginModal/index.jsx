/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.scss';

function LoginModal(props) {
  const { onClose, onLogin } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Vérifier les informations de connexion ici
    onLogin();
    onClose();
    // console.log(event.target[0].value);

    const login = event.target[0].value;
    // eslint-disable-next-line no-shadow
    const password = event.target[1].value;

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await axios({
      method: 'post',
      url: 'http://ronaldfk-server.eddi.cloud:8080/api/auth/signin',
      headers: {
        headers,
      },
      data: {
        login,
        password,
      },

    });
    console.log(response.data);
  };

  return (
    <div className="LoginModal">
      <div className="LoginModal__content" ref={modalRef}>
        <h2 className="LoginModal__title">Connexion</h2>
        <form className="LoginModal__form" onSubmit={handleSubmit}>
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
