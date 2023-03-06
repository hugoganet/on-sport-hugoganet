/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  Button, Form, Dropdown,
} from 'semantic-ui-react';

import sportsList from '../../../datas/sports'; // Tableau d'objets importé depuis le fichier

import './style.scss';

function UpdateProfilModal(props) {
  const modalRef = useRef(null);
  const { onClose } = props;
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [sports, setSelectedSports] = useState([]);
  const [locationID, setLocationId] = useState('');
  const [listLocation, setListLocation] = React.useState([]);
  const [image, setImage] = useState(null);

  React.useEffect(() => axios.get(
    'http://ronaldfk-server.eddi.cloud:8080/api/location/',
  ).then(
    (response) => setListLocation(response.data),
  ).catch((error) => {
    console.log(error);
  }), []);

  const cities = [...new Set(listLocation.map((item) => [item.id, item.name]))];
  const cityOptions = cities.map((city) => ({
    key: city[0],
    text: city[1],
    value: city[0],
  }));
  // console.log(cityOptions);

  function handleChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedSports(selectedOptions);
    console.log(selectedOptions);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    onClose();

    const updatedData = {
      bio: event.target[0].value,
      age,
      sports,
      location_id: locationID,
    };

    const form = new FormData();
    console.log(updatedData);
    form.append('jsonAsString', JSON.stringify(updatedData));
    form.append('photo', image);

    try {
      const response = await axios({
        method: 'PATCH',
        url: 'http://ronaldfk-server.eddi.cloud:8080/api/user/profil/:id',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: form,
      });
      // eslint-disable-next-line no-console
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="UpdateProfilModal">
      <div className="UpdateProfilModal__content" ref={modalRef}>
        <h2 className="UpdateProfilModal__title">
          Modifier les informations de mon profil
        </h2>
        <Form className="UpdateProfilModal__form" onSubmit={handleSubmit}>
          <label className="UpdateProfilModal__form--label" htmlFor="bio">Bio:</label>
          <textarea
            className="UpdateProfilModal__form--input"
            type="text"
            id="bio"
            name="bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
          <label className="UpdateProfilModal__form--label" htmlFor="age">Age:</label>
          <input
            className="UpdateProfilModal__form--input"
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          {/* <Form.Dropdown
            width={12}
            label="Ville"
            placeholder="Sélectionner une ville"
            fluid
            search
            selection
            options={cityOptions}
            onChange={(e, data) => setLocationId(data.value)}
          /> */}
          <label className="UpdateProfilModal__form--label" htmlFor="sports">Sports pratiqués</label>
          <select
            className="UpdateProfilModal__form--input"
            aria-label="sports"
            type="string"
            id="sports"
            name="sports"
            multiple
            value={sports}
            onChange={handleChange}
          >
            {sportsList.map((sport) => (
              <option key={sport.id} value={sport.value}>{sport.text}</option>
            ))}
          </select>
          <h3> Ajouter une image</h3>
          <Form.Input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="submit">Enregistrer les modifications</button>
        </Form>
      </div>
    </div>
  );
}

UpdateProfilModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default UpdateProfilModal;
