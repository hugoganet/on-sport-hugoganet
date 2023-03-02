/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

import {
  Button, Form,
} from 'semantic-ui-react';

import Footer from '../Footer';
import Header from '../Header';

import sport from '../../../datas/sports';

import './style.scss';

function CreateActivity() {
  const [title, setTitle] = useState('');
  const [sport_id, setSportId] = useState('');
  const [family_tag, setFamily_tag] = useState(null);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const user_id = parseInt(localStorage.getItem('userId'));
  const user = {
    title, user_id, sport_id, family_tag, description,
  };

  const handleFamily_tagChange = (e, { value }) => {
    setFamily_tag(value);
  };

  const handleSubmit = async (e) => {
    console.log('coucou');
    e.preventDefault();

    const form = new FormData();
    form.append('jsonAsString', JSON.stringify(user));
    form.append('photo', image);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://ronaldfk-server.eddi.cloud:8080/api/activity',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: form,
      });
      console.log(response.data);
    } catch (error) {
      console(error);
    }
  };

  return (
    <>
      <Header />
      <Form
        className="create__activity__form"
        onSubmit={handleSubmit}
      >
        <h1>Créer une activité</h1>
        <Form.Input
          width={12}
          fluid
          label="Entrer le titre de l'activité"
          placeholder="Titre de l'activité"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Group inline>
          <Form.Select
            label="Sport"
            placeholder="Entrer le sport"
            options={sport}
            value={sport.id}
            onChange={(e) => setSportId(e.target.id)}
          />
          <label>
            Cette activité peut-elle se faire en famille ?
          </label>
          <Form.Radio
            label="Oui"
            value="true"
            checked={family_tag === 'true'}
            onChange={handleFamily_tagChange}
          />
          <Form.Radio
            label="Non"
            value="false"
            checked={family_tag === 'false'}
            onChange={handleFamily_tagChange}
          />
        </Form.Group>
        <Form.TextArea
          width={12}
          label="Description de l'activité"
          placeholder="Ajouter une description de l'activité"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h3> Ajouter une image</h3>
        <Form.Input
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button type="submit" primary>
          Valider
        </Button>
      </Form>
      <Footer />
    </>
  );
}

export default CreateActivity;
