/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Button, Image, Form } from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';

import sport from '../../../datas/sportselect';

import './style.scss';

function CreateActivity() {
  return (
    <>
      <Header />
      <Form className="create__activity__form">
        <h1 className="">Ajouter une activité</h1>
        <Form.Input width={12} fluid label="Entrer le titre de l'activité" placeholder="Titre de l'activité" />
        <Form.Input width={12} fluid label="Entrer la localisation" placeholder="Localisation" />
        <Form.Group inline>
          <Form.Select
            fluid
            label="Sport"
            options={sport}
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
        <Form.Field control={Button}>Valider</Form.Field>
      </Form>
      <Footer />
    </>
  );
}

export default CreateActivity;
