/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import sportsList from '../../../datas/sports'; // Tableau d'objets importé depuis le fichier

import './style.scss';

function UpdateProfilModal(props) {
  const modalRef = useRef(null);
  const { onClose } = props;
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [locationPostCode, setLocationPostCode] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationDepartment, setLocationDepartment] = useState('');
  const [sports, setSelectedSports] = useState([]);

  function handleChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedSports(selectedOptions);
    console.log(selectedOptions);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    onClose();

    const bio = event.target[0].value;
    const age = event.target[1].value;
    const locationPostCode = event.target[2].value;
    const locationDepartment = event.target[3].value;
    const locationName = event.target[3].value;
    const sports = event.target[4].value;

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await axios({
      method: 'PATCH',
      url: 'http://ronaldfk-server.eddi.cloud:8080/api/user/profil/:id',
      headers: {
        headers,
      },
      data: {
        age,
        bio,
        locationPostCode,
        locationName,
        locationDepartment,
        sports,
      },
    });

    // eslint-disable-next-line no-console
    console.log(response.data);
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
        <form className="UpdateProfilModal__form" onSubmit={handleSubmit}>
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
          <label className="UpdateProfilModal__form--label" htmlFor="locationPostCode">Code postale</label>
          <input
            className="UpdateProfilModal__form--input"
            type="number"
            id="locationPostCode"
            name="locationPostCode"
            value={locationPostCode}
            onChange={(event) => setLocationPostCode(event.target.value)}
          />
          <label className="UpdateProfilModal__form--label" htmlFor="locationName">Ville</label>
          <input
            className="UpdateProfilModal__form--input"
            type="string"
            id="locationName"
            name="locationName"
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
          />
          <label className="UpdateProfilModal__form--label" htmlFor="locationDepartment">Departement</label>
          <input
            className="UpdateProfilModal__form--input"
            type="string"
            id="locationDepartment"
            name="locationDepartment"
            value={locationDepartment}
            onChange={(event) => setLocationDepartment(event.target.value)}
          />
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
          <button type="submit">Enregistrer les modifications</button>
        </form>
      </div>
    </div>
  );
}

UpdateProfilModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// export SportsDropdown;
export default UpdateProfilModal;
