/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.scss';

function SignupModal(props) {
  const { onClose } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const modalRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Vérifier les informations de création de compte ici
    onClose();

    const firstname = event.target[0].value;
    const lastname = event.target[1].value;
    const email = event.target[2].value;
    const login = event.target[3].value;
    const password = event.target[4].value;

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await axios({
      method: 'post',
      url: 'http://ronaldfk-server.eddi.cloud:8080/api/auth/signup',
      headers: {
        headers,
      },
      data: {
        firstname,
        lastname,
        email,
        login,
        password,
      },
    });
    // eslint-disable-next-line no-console
    console.log(`SignupModal: ${response}`);
  };

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

  return (
    <div className="SignupModal">
      <div className="SignupModal__content" ref={modalRef}>
        <h2 className="SignupModal__title">Créer un compte</h2>
        <form className="SignupModal__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Prénom:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label htmlFor="lastName">Nom:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <label htmlFor="email">Adresse email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
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
