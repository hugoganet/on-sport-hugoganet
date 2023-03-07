/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Form } from 'semantic-ui-react';

import './style.scss';

function UpdateProfilModal(props) {
  const modalRef = useRef(null);
  const { handleUpdateProfilToggle, isShowUpdateProfilModal } = props;
  const [bio, setBio] = useState(null);
  const [age, setAge] = useState(null);
  const [locationID, setLocationId] = useState(null);
  const [listLocation, setListLocation] = useState([]);
  const [image, setImage] = useState(null);
  const [citySearch, setCitySearch] = useState(null);
  const userId = localStorage.getItem('userId');

  // React.useEffect(() => axios.get(
  //   'http://ronaldfk-server.eddi.cloud:8080/api/location/',
  // ).then(
  //   (response) => setListLocation(response.data),
  // ).catch((error) => {
  //   console.log(error);
  // }), []);

  // ci-dessous, la même chose mais en async/await (chatGPT)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://ronaldfk-server.eddi.cloud:8080/api/location/');
        setListLocation(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getCitiesFromSearch = async () => {
    if (citySearch.length < 3) return;
    try {
      const response = await axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/location?search=${citySearch}`);
      setListLocation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {
      bio,
      age,
      location_id: locationID,
    };

    // eslint-disable-next-line no-unused-vars
    const truthyFields = Object.entries(updatedData).filter(([key, value]) => value);
    const filteredData = Object.fromEntries(truthyFields);

    const form = new FormData();
    form.append('jsonAsString', JSON.stringify(filteredData));
    form.append('photo', image);

    try {
      const response = await axios({
        method: 'PATCH',
        url: `http://ronaldfk-server.eddi.cloud:8080/api/user/profil/${userId}`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: form,
      });
      // eslint-disable-next-line no-console
      console.log('response', response.data);
    } catch (error) {
      console.log(error);
    }
    handleUpdateProfilToggle();
  };

  return (
    <div
      className={isShowUpdateProfilModal ? 'UpdateProfilModal' : 'UpdateProfilModal close'}
      // onClick={handleUpdateProfilToggle}
    >
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
            value={bio || ''}
            onChange={(event) => setBio(event.target.value)}
          />
          <label className="UpdateProfilModal__form--label" htmlFor="age">Age:</label>
          <input
            className="UpdateProfilModal__form--input"
            type="date"
            id="age"
            name="age"
            value={age || ''}
            onChange={(event) => setAge(event.target.value)}
          />
          <div className="autocomplete__container">
            <Form.Input
              label="Entrer une ville"
              placeholder="Ville"
              type="search"
              icon="search"
              onKeyUp={getCitiesFromSearch}
              onChange={(e) => setCitySearch(e.target.value)}
              value={citySearch || ''}
              className="autocomplete__input"
            />
            <ul className="autocomplete__ul">
              {/* liste des villes qui vont s'afficher */}
              {
                listLocation[0] && listLocation.map((location) => (
                  <li
                    data-id={location.id}
                    className="autocomplete__li"
                    key={location.id}
                    onClick={() => {
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
  isShowUpdateProfilModal: PropTypes.bool.isRequired,
  handleUpdateProfilToggle: PropTypes.func.isRequired,
};

export default UpdateProfilModal;
