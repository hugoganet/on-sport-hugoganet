/* eslint-disable unicode-bom */
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.scss';

function DeleteProfilModal({ toggleDeleteProfilModal }) {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const onConfirm = () => {
    axios.delete(`http://ronaldfk-server.eddi.cloud:8080/api/user/profil/${userId}`);
    toggleDeleteProfilModal(false);
    localStorage.clear();
    navigate('/');
  };

  const onCancel = () => {
    toggleDeleteProfilModal(false);
  };
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onCancel();
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="ConfirmModal ConfirmModal--show">
      <div className="ConfirmModal__content ConfirmModal__content--show" ref={modalRef}>
        <h2 className="ConfirmModal__title">Confirmation de suppression</h2>
        <p className="ConfirmModal__title__confirm">Êtes-vous sûr de vouloir supprimer votre compte ?</p>
        <div className="ConfirmModal__buttons">
          <button className="ConfirmModal__button" type="button" onClick={onConfirm}>Oui</button>
          <button className="ConfirmModal__button" type="button" onClick={onCancel}>Non</button>
        </div>
      </div>
    </div>
  );
}

DeleteProfilModal.propTypes = {
  toggleDeleteProfilModal: PropTypes.func.isRequired,
};

export default DeleteProfilModal;
