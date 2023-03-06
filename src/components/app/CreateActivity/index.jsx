/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import _ from 'lodash';

import {
  Button, Form, Grid, Search, Image,
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
  const [listLocation, setListLocation] = useState([]);
  const [citySearch, setCitySearch] = useState('');
  const user_id = parseInt(localStorage.getItem('userId'), 10);

  // React.useEffect(
  //   () => {
  //     axios.get('http://ronaldfk-server.eddi.cloud:8080/api/location/')
  //       .then((response) => {
  //         setListLocation(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //   },
  //   [],
  // );

  const user = {
    title, user_id, sport_id, family_tag, description, locationID,
  };

  console.log(locationID);
  const handleFamily_tagChange = (e, { value }) => {
    setFamily_tag(value);
  };

  const handleSubmit = async (e) => {
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
      console.log(error);
    }
  };
  const getCitiesFromSearch = async () => {
    if (citySearch.length < 3) return;
    try {
      const response = await axios.get(`https://geo.api.gouv.fr/communes?nom=${citySearch}&fields=departement&boost=population&limit=5`);
      console.log('response api geo autocomplete', response.data);
      setListLocation(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log('search > 3');
    // appel API
  };
  const cities = [...new Set(listLocation.map((item) => [item.id, item.name]))];
  const cityOptions = cities.map((city) => ({
    key: city[0],
    text: city[1],
    value: city[0],
  }));

  return (
    <>
      <Header />
      <h1 className="create__activity__title">Créer une activité</h1>
      <Grid
        columns={2}
        celled
        // inline
        className="container"
      >
        {/* <Grid.Row className="container__row"> */}
          <Grid.Column
            stretched
            // width={4}
            className="container__image"
            only="large screen"
          >
            <Image src={logo} />
          </Grid.Column>
          <Grid.Column
            // width={12}
            className="container__form"
          >
            <Form
              size="large"
              className="create__activity__form"
              onSubmit={handleSubmit}
            >
              <Form.Input
                fluid
                label="Entrer le titre de l'activité"
                placeholder="Titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

            { /*          <Search
              loading={loading}
              placeholder="Search..."
              onResultSelect={(e, data) => dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })}
              onSearchChange={handleSearchChange}
              // onKeyUp={() => console.log('keyUp')}
              results={results}
              value={value}
  /> */}
              <div className="autocomplete__container">
                <Form.Input
                  label="Entrer une ville"
                  placeholder="Ville"
                  type="search"
                  icon="search"
                  onKeyUp={getCitiesFromSearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  value={citySearch}
                  className="autocomplete__input"
                />
                <ul className="autocomplete__ul">
                  {/* liste des villes qui vont s'afficher */}
                  {
                listLocation[0] && listLocation.map((location) => (
                  <li
                    data-id={location.code}
                    className="autocomplete__li"
                    key={location.cod}
                    onClick={(event) => {
                      setCitySearch(location.nom);
                      setLocationId(location.code);
                      setListLocation([]);
                    }}
                  >

                  {location.nom}

                </li>
              ))
            }
              </ul>
            </div>

              <Form.Select
                label="Sport"
                placeholder="Entrer le sport"
                options={sport}
                onChange={(e) => setSportId(e.target.parentNode.id)}
              />
              <h3>Cette activité peut-elle se faire en famille ?</h3>
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
                label="Description de l'activité"
                placeholder="Ajouter une description de l'activité"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <h3> Ajouter une image</h3>
              <Form.Input
                type="file"
                multiple
                accept=".jpg, .png, .jpeg"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Button type="submit" primary>
                Valider
              </Button>
            </Form>
          </Grid.Column>
        {/* </Grid.Row> */}
      </Grid>
      <Footer />
    </>
  );
}

export default CreateActivity;