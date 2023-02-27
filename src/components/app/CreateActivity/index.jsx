/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';

import { Button, Image, Form } from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';

<<<<<<< HEAD
import sports from '../../../datas/sportselect';
=======
import sport from '../../../datas/sports';
>>>>>>> develop

import './style.scss';

function CreateActivity() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      'sport.name': event.target.form[2].value,
      'title' : event.target.form[0].value,
      'location_id' : event.target.form[1].value,
      'family_tag' : event.target.form[3].value,
      'description' : event.target.form[4].value,

    }
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await axios({
      method: 'post',
      url: 'http://ronaldfk-server.eddi.cloud:8080/api/activity',
      header: {
        headers,
      },
      data: {
        data,
      },
    });
  }
  return (
    <>
      <Header />
      <Form
        className="create__activity__form"
        onSubmit={(e) => handleSubmit(e)}>
        <h1 className="">Ajouter une activité</h1>
        <Form.Input width={12} fluid label="Entrer le titre de l'activité" placeholder="Titre de l'activité" />
        <Form.Input width={12} fluid label="Entrer la localisation" placeholder="Localisation" />
        <Form.Group inline>
          <Form.Select
            fluid
            label="Sport"
            options={sports}
            placeholder="Sport"
          />
          <label>
            Cette activité peut-elle se faire en famille ?
          </label>
          <Form.Field
            label="Oui"
            control="input"
            type="radio"
            name="family"
          />
          <Form.Field
            label="Non"
            control="input"
            type="radio"
            name="family"
          />
        </Form.Group>
        <Form.TextArea width={12} label="Description de l'activité" placeholder="Ajouter une description de l'activité" />
        <Button className="ui button">
          <label>
            Ajouter une image...
          </label>
        </Button>
        <Image.Group size="medium">
          <Image src="/default-image.png" />
          <Image src="/default-image.png" />
          <Image src="/default-image.png" />
        </Image.Group>
        <Button
          type="submit"
          content="Valider"
          positive
          onClick={handleSubmit}
        />
      </Form>

      <Footer />
    </>
  );
}

export default CreateActivity;
