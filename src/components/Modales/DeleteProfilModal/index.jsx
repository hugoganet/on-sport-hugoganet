import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import {
  Button, Modal,
} from 'semantic-ui-react';

function DeleteProfilModal({ isShowDeleteProfilModal, toggleDeleteProfilModal }) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const onConfirm = () => {
    axios.delete(`http://ronaldfk-server.eddi.cloud:8080/api/user/profil/${userId}`);
    toggleDeleteProfilModal(false);
    localStorage.clear();
    navigate('/');
  };

  return (
    <Modal
      onClose={() => toggleDeleteProfilModal(false)}
      onOpen={() => toggleDeleteProfilModal(true)}
      open={isShowDeleteProfilModal}
    >
      <Modal.Actions>
        <Button color="black" onClick={() => toggleDeleteProfilModal(false)}>
          Non
        </Button>
        <Button
          content="Oui"
          labelPosition="right"
          icon="checkmark"
          onClick={onConfirm}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

DeleteProfilModal.propTypes = {
  isShowDeleteProfilModal: PropTypes.bool.isRequired,
  toggleDeleteProfilModal: PropTypes.func.isRequired,
};

export default DeleteProfilModal;
