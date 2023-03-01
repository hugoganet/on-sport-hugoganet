/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';

import {
  Button, Form, Modal, Icon,
} from 'semantic-ui-react';

function ModaleLogin({ isLogged, setLogin }) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    setOpen(false);
    setLogin(true);
  };

  return (

    <Modal
      as={Form}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      isLogged={isLogged}
      trigger={(
        <Button icon labelPosition="left">
          {' '}
          <Icon name="user secret" color="blue" />
          Se connecter
        </Button>
)}
    >
      <Modal.Header>Se connecter</Modal.Header>
      <Modal.Content image>

        <Modal.Description>

          <Form.Input fluid name="identifiant" label="Identifiant" placeholder="Veuillez choisir un identifiant" />
          <Form.Input fluid name="password" label="Mot de passe" placeholder="Veuillez choisir un mot de passe" />
          <Form.Input fluid name="passwordConfirm" label="Confirmation Mot de passe" placeholder="Confirmer votre mot de passe" />

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>

        <Button
          type="submit"
          content="Valider"
          labelPosition="right"
          icon="checkmark"
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>

  );
}

ModaleLogin.propTypes = {
  isLogged: Proptypes.bool.isRequired,
  setLogin: Proptypes.func.isRequired,
};

export default ModaleLogin;
