/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

import {
  Button, Form, Select, Input,
} from 'semantic-ui-react';

import Footer from '../Footer';
import Header from '../Header';
import ImageBtn from './imageBtn';
import AddImageBtn from './addImage';

import sport from '../../../datas/sports';

import './style.scss';

function CreateActivity() {
  const optionsDep = [
    { key: 'i', text: 'ile-de-france', value: 'ile-de-france' },
  ];

  const optionsVil = [
    { key: 'p', text: 'Paris', value: 'paris' },
  ];

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('user_id', 1);
    data.append('sport_id', 1);
    data.append('title', 'test1');
    data.append('photo', selectedFile);
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    const url = 'http://ronaldfk-server.eddi.cloud:8080/api/activity';

    axios.post(url, data, config)
      .then(response => console.log(response))
      .catch(errors => console.log(errors));
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <Header />
      <Form
        className="create__activity__form"
        onSubmit={handleSubmit}
      >
        <h1 className="">Ajouter une activité</h1>
        <Form.Input
          width={12}
          fluid
          label="Entrer le titre de l'activité"
          placeholder="Titre de l'activité"
        />
        <Form.Group widths="equal">
          <Form.Field
            label="Département"
            control={Select}
            options={optionsDep}
            placeholder="Localisation"
          />
          <Form.Field
            label="Ville"
            control={Select}
            options={optionsVil}
            placeholder="ville"
          />
        </Form.Group>
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
        <Form.TextArea
          width={12}
          label="Description de l'activité"
          placeholder="Ajouter une description de l'activité"
        />
        <h3> Ajouter une image</h3>
        <Input type="file" name="photo" onChange={handleFileSelect} />
        {/* <ImageBtn /> */}
        <Input
          type="submit"
          value="Valider"
        />
      </Form>
      {/* <AddImageBtn /> */}

      <Footer />
    </>
  );
}

export default CreateActivity;
