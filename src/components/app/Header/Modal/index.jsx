/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  const { onClose } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Connexion</h2>
        <form>
          <label htmlFor="username">Nom d&apos;utilisateur:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
