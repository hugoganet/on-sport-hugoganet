/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

import {
  Button, Form, Grid, Image, Message,
} from 'semantic-ui-react';
import image_create from '../../../assets/create-act-image.jpg';

import Footer from '../Footer';
import Header from '../Header';

import sport from '../../../datas/sports_createAct';

import './style.scss';

function CreateActivity() {
  const [title, setTitle] = useState('');
  const [sport_id, setSportId] = useState('');
  const [location_id, setLocationId] = useState('');
  const [family_tag, setFamily_tag] = useState(null);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);
  const [listLocation, setListLocation] = useState([]);
  const [citySearch, setCitySearch] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
    title, user_id, sport_id, family_tag, description, location_id,
  };

  const arrayImages = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const elem of image) {
    arrayImages.push(elem.name);
  }

  const handleSelectSport = (e, { value }) => {
    setSportId(value);
  };

  const handleFamily_tagChange = (e, { value }) => {
    setFamily_tag(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('jsonAsString', JSON.stringify(user));
    form.append('photo', arrayImages);

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
      setSuccessMessage("L'activité a été créée avec succès !");
      setErrorMessage('');
    } catch (error) {
      // console.log(error);
      setErrorMessage('Une erreur est survenue. Veuillez réessayer');
      setSuccessMessage('');
    }

    // setTimeout(() => {
    //   setErrorMessage("");
    //   setSuccessMessage("");
    // }, 3000);
  };
  const getCitiesFromSearch = async () => {
    if (citySearch.length < 3) return;
    try {
      const response = await axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/location/name/${citySearch}`);
      console.log('response api back autocomplete', response.data);
      setListLocation(response.data);
    } catch (error) {
      // console.error(error);
      setErrorMessage('Une erreur est survenue lors de la création de l\'activité');
    }
    console.log('search > 3');
    // appel API
  };

  return (
    <>
      <Header />
      <h1 className="create__activity__title">Créer une activité</h1>
      <Grid
        columns={2}
        // inline
        celled
        stackable
        className="container"
      >
        <Grid.Column
          stretched
          className="container__image"
          only="computer tablet"
        >
          <Image src={image_create} />
        </Grid.Column>
        <Grid.Column
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
              required
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
                required
              />
              <ul className="autocomplete__ul">
                {/* liste des villes qui vont s'afficher */}
                {
                listLocation[0] && listLocation.map((location) => (
                  <li
                    data-id={location.id}
                    className="autocomplete__li"
                    key={location.id}
                    onClick={(event) => {
                      setCitySearch(location.name);
                      setLocationId(location.id);
                      setListLocation([]);
                    }}
                  >

                    {location.name}

                  </li>
                ))
            }
              </ul>
            </div>

            <Form.Select
              label="Sport"
              placeholder="Entrer le sport"
              options={sport}
              value={sport.value}
              // onChange={(e) => setSportId(e.target.id)}
              onChange={handleSelectSport.bind(this)}
              required
            />
            <h3 className="create__activity__form__titles">Cette activité peut-elle se faire en famille ?</h3>
            <span className="required__asterisk">*</span>
            <Form.Group>
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
              required
            />
            <h3 className="create__activity__form__titles"> Ajouter une image</h3>
            <span className="required__asterisk">*</span>
            <Form.Input
              type="file"
              multiple
              accept=".jpg, .png, .jpeg"
              onChange={(e) => setImage(e.target.files)}
              required
            />
            <Button className="create__activity__button" type="submit" primary fluid>
              Valider
            </Button>
            <p className="required__description">(*) Champs obligatoires</p>
          </Form>
        </Grid.Column>
      {successMessage && (
              <Message attached positive className="create__activity__successMessage">
                <Message.Item>{successMessage}</Message.Item>
              </Message>
            )}
            {errorMessage && (
              <Message attached negative className="create__activity__errorMessage">
                <Message.Item>{errorMessage}</Message.Item>
              </Message>
            )}
      </Grid>
      <Footer />
    </>
  );
}

export default CreateActivity;
