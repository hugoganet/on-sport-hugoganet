import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function ConfirmModal(props) {
  const { onConfirm, onCancel } = props;
  const modalRef = useRef(null);

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
    <div className="ConfirmModal">
      <div className="ConfirmModal__content" ref={modalRef}>
        <h2 className="ConfirmModal__title">Confirmation de déconnexion</h2>
        <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
        <div className="ConfirmModal__buttons">
          <button className="ConfirmModal__button" type="button" onClick={onConfirm}>Oui</button>
          <button className="ConfirmModal__button" type="button" onClick={onCancel}>Non</button>
        </div>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmModal;
