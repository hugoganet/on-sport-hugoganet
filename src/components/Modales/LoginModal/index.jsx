import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Button, Input, Modal,
} from 'semantic-ui-react';

function LoginModal({ toggleLoginModal, isShowLoginModal }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // onLogin();
    // onClose();

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
        login: username,
        password,
      },

    });
    // eslint-disable-next-line no-console
    if (response.status === 200) {
      console.log(`connexion réussie - token enregistré : ${response.data.tokenUser.token}- userId enregistré : ${response.data.id}`);
      localStorage.setItem('token', response.data.tokenUser.token);
      localStorage.setItem('userId', response.data.id);
    }
    toggleLoginModal(false);
  };

  return (
    <Modal
      onClose={() => toggleLoginModal(false)}
      onOpen={() => toggleLoginModal(true)}
      open={isShowLoginModal}
    >
      <Modal.Header>Connexion</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Input
            placeholder="Nom d'utilisateur:"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          type="submit"
          content="Valider"
          labelPosition="right"
          icon="checkmark"
          positive
          onClick={handleSubmit}
        />
      </Modal.Actions>
    </Modal>
  );
}

LoginModal.propTypes = {
  toggleLoginModal: PropTypes.func.isRequired,
  isShowLoginModal: PropTypes.bool.isRequired,
};

export default LoginModal;
