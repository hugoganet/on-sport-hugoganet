import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ConfirmModal({ setShowConfirmModal }) {
  const modalRef = useRef(null);
  const onConfirm = () => {
    setShowConfirmModal(false);
    localStorage.clear();
    // setIsLogged(false);
  };

  const onCancel = () => {
    setShowConfirmModal(false);
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
        <h2 className="ConfirmModal__title">Confirmation de déconnexion</h2>
        <p className="ConfirmModal__title__confirm">Êtes-vous sûr de vouloir vous déconnecter ?</p>
        <div className="ConfirmModal__buttons">
          <button className="ConfirmModal__button" type="button" onClick={onConfirm}>Oui</button>
          <button className="ConfirmModal__button" type="button" onClick={onCancel}>Non</button>
        </div>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  setShowConfirmModal: PropTypes.bool.isRequired,
};

export default ConfirmModal;
