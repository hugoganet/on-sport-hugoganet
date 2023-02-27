/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './style.scss';

function UpdateProfilModal(props) {
  const modalRef = useRef(null);
  const { onClose } = props;
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [sports, setSports] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    onClose();

    const bio = event.target[0].value;
    const age = event.target[1].value;
    const city = event.target[2].value;
    const department = event.target[3].value;
    const sports = event.target[4].value;

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await axios({
      method: 'post',
      url: 'http://ronaldfk-server.eddi.cloud:8080/api/auth/signup',
      headers: {
        headers,
      },
      data: {
        bio,
        age,
        city,
        department,
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
          <label htmlFor="bio">Bio:</label>
          <textarea
            type="text"
            id="bio"
            name="bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <label htmlFor="city">Ville</label>
          <input
            type="string"
            id="city"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <label htmlFor="department">Departement</label>
          <input
            type="string"
            id="department"
            name="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          />
          <label htmlFor="sports">Sports pratiqués</label>
          <select
            aria-label="sports"
            type="string"
            id="sports"
            name="sports"
            value={sports}
            onChange={(event) => setSports(event.target.value)}
          >
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="rugby">Rugby</option>
            <option value="volleyball">Volleyball</option>
            <option value="handball">Handball</option>
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

export default UpdateProfilModal;
