/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import {
  Form, Image, Grid,
} from 'semantic-ui-react';
import logo from '../../../assets/OnSport_logo.png';

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
  const [listLocation, setListLocation] = React.useState([]);

  const user_id = parseInt(localStorage.getItem('userId'));

  React.useEffect(() => axios.get('http://ronaldfk-server.eddi.cloud:8080/api/location/').then(
    (response) => setListLocation(response.data),
  ).catch((error) => {
    console.log(error);
  }), []);

  const user = {
    title, user_id, sport_id, family_tag, description, locationID,
  };

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
      <Grid celled
      // columns={2} divided
        className="container"
      >
        <Grid.Row centered doubling>
        <Grid.Column  width={4} className="container__image">
          <Image src={logo} />
        </Grid.Column>
        <Grid.Column  width={6} className="container__form">
          <Form
            size="large"
            className="create__activity__form"
            onSubmit={handleSubmit}
          >
            <h1 className="create__activity__title">Créer une activité</h1>
            <Form.Input
              width={5}
              fluid
              label="Entrer le titre de l'activité"
              placeholder="Titre de l'activité"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Dropdown
              width={5}
              label="Sélectionner une ville"
              placeholder="Sélectionner une ville"
              fluid
              search
              selection
              options={cityOptions}
              onChange={(e, data) => setLocationId(data.value)}
            />
            <Form.Select
              label="Sélectionner le sport"
              width={5}
              placeholder="Sélectionner le sport"
              options={sport}
              onChange={(e) => setSportId(e.target.parentNode.id)}
            />
            <h3>Cette activité peut-elle se faire en famille?</h3>
            <Form.Group inline>
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
              width={8}
              label="Description de l'activité"
              placeholder="Description de l'activité"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Input
              label="Ajouter une image"
              width={5}
              type="file"
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Form.Button type="submit" primary>
              Valider
            </Form.Button>
          </Form>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </>
  );
}

export default CreateActivity;
