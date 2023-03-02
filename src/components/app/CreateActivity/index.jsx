/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

import {
  Button, Form, Dropdown,
} from 'semantic-ui-react';

import Footer from '../Footer';
import Header from '../Header';

import sport from '../../../datas/sports';

import './style.scss';

function CreateActivity() {
  const [title, setTitle] = useState('');
  const [sport_id, setSportId] = useState('');
  const [locationID, setLocationId] = useState('');
  const [family_tag, setFamily_tag] = useState(null);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [listLocation, setListLocation] = useState([]);

  const user_id = parseInt(localStorage.getItem('userId'));

  React.useEffect(() => {
    axios.get('http://ronaldfk-server.eddi.cloud:8080/api/location/')
      .then((response) => {
        setListLocation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const user = {
    title, user_id, sport_id, family_tag, description, locationID,
  };

  console.log(listLocation);
  const handleFamily_tagChange = (e, { value }) => {
    setFamily_tag(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    console.log(user);
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
      console.log(error);
    }
  };

  const cities = [...new Set(listLocation.map((item) => [item.id, item.name]))];
  const cityOptions = cities.map((city) => ({
    key: city[0],
    text: city[1],
    value: city[0],
  }));

  console.log(locationID);
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
        <Form.Dropdown
          width={12}
          label="Ville"
          placeholder="Sélectionner une ville"
          fluid
          search
          selection
          options={cityOptions}
          onChange={(e, data) => setLocationId(data.value)}
        />
        <Form.Group inline>
          <Form.Select
            label="Sport"
            placeholder="Entrer le sport"
            options={sport}
            onChange={(e) => setSportId(e.target.parentNode.id)}
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
