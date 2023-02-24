/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';
import axios from 'axios';

import {
  Button, Icon, Form, Modal,
} from 'semantic-ui-react';

function ModaleSignin({ isLogged, setLogin }) {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setOpen(false);
    setLogin(true);

    const firstname = event.target.form[0].value;
    const lastname = event.target.form[1].value;
    const email = event.target.form[2].value;
    const login = event.target.form[3].value;
    const password = event.target.form[4].value;

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

    console.log(response.data);
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
          <Icon name="pencil alternate" color="blue" />
          Créer un compte
        </Button>
)}
    >
      <Modal.Header>Créer mon compte</Modal.Header>
      <Modal.Content image>

        <Modal.Description>
          <Form.Group widths="equal">
            <Form.Input fluid name="firstname" label="Prénom" placeholder="Prénom" />
            <Form.Input fluid name="lastname" label="Nom" placeholder="Nom" />
          </Form.Group>

          <Form.Input fluid name="mail" label="E-mail" placeholder="Mail" />
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

ModaleSignin.propTypes = {
  isLogged: Proptypes.bool.isRequired,
  setLogin: Proptypes.func.isRequired,

};

export default ModaleSignin;
