import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, Modal,
} from 'semantic-ui-react';

function DisconnectionModal({ isShowDisconnectionModal, toggleDisconnectionModal }) {
  const onConfirm = () => {
    toggleDisconnectionModal(false);
    localStorage.clear();
  };

  return (
    <Modal
      onClose={() => toggleDisconnectionModal(false)}
      onOpen={() => toggleDisconnectionModal(true)}
      open={isShowDisconnectionModal}
    >
      <Modal.Actions>
        <Button color="black" onClick={() => toggleDisconnectionModal(false)}>
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

DisconnectionModal.propTypes = {
  isShowDisconnectionModal: PropTypes.bool.isRequired,
  toggleDisconnectionModal: PropTypes.func.isRequired,
};

export default DisconnectionModal;
