import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UpdateProfilModal from '../../../Modales/UpdateProfilModal';

import './style.scss';

function ProfilDetails({ loggedUser }) {
  const [showUpdateProfilModal, setShowUpdateProfilDetailsModal] = useState(false);

  const handleUpdateProfilDetails = () => {
    setShowUpdateProfilDetailsModal(true);
  };

  const handleUpdateProfilClose = () => {
    setShowUpdateProfilDetailsModal(false);
  };

  return (
    <div className="ProfilDetails">
      <p className="ProfilDetails__location">
        📍
        {loggedUser.locationName}
        {' '}
        -
        {' '}
        {loggedUser.locationDepartment}
      </p>
      <p className="ProfilDetails__age">
        AGE :
        {' '}
        {loggedUser.age}
      </p>
      <button type="button" className="ProfilDetails__button" onClick={handleUpdateProfilDetails}>Modifier mon profil</button>
      {showUpdateProfilModal && <UpdateProfilModal onClose={handleUpdateProfilClose} />}
      <section className="ProfilDetails__bioAndPracticeSports">
        <div className="ProfilDetails__bio--div">
          <h2 className="ProfilDetails__bio--title">Bio</h2>
          <p className="ProfilDetails__bio--description">
            {loggedUser.bio}
          </p>
        </div>
        <div className="ProfilDetails__practiceSports__div">
          <h2 className="ProfilDetails__practiceSports__div--title">Sports pratiqués</h2>
          <div className="ProfilDetails__practiceSports__div--div">
            {/* {loggedUser.sports.map((sport) => (
              <img key={sport.id} className="ProfilDetails__practiceSports__div--img" src={sport.image_color} alt={sport.name} />
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
}

ProfilDetails.propTypes = {
  loggedUser: PropTypes.shape({
    id: PropTypes.number,
    age: PropTypes.number,
    bio: PropTypes.string,
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    location_id: PropTypes.number,
    locationName: PropTypes.string,
    locationDepartment: PropTypes.string,
    login: PropTypes.string.isRequired,
    sports: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image_color: PropTypes.string,
      }),
    ),
    ListActivities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        note: PropTypes.number,
        description: PropTypes.string,
        photo: PropTypes.string,
        family_tag: PropTypes.bool,
        user_id: PropTypes.number,
        user_firstname: PropTypes.string,
        sportID: PropTypes.number,
        sportName: PropTypes.string,
        location_id: PropTypes.number,
        locationName: PropTypes.string,
        locationPostcode: PropTypes.number,
        locationDepartment: PropTypes.string,
      }).isRequired,
    ),
  }),

};

ProfilDetails.defaultProps = {
  loggedUser: {
    id: null,
    age: null,
    location_id: '',
    bio: '',
  },
};

export default ProfilDetails;
