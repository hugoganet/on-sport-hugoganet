import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UpdateProfilModal from '../../../Modales/UpdateProfilModal';

import './style.scss';

function ProfilDetails({ loggedUser }) {
  const [isShowUpdateProfilModal, toggleShowUpdateProfilDetailsModal] = useState(false);

  const handleUpdateProfilToggle = () => {
    toggleShowUpdateProfilDetailsModal((state) => !state);
    // console.log('click ProfilDetails :', isShowUpdateProfilModal);
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
      <button type="button" className="ProfilDetails__button" onClick={handleUpdateProfilToggle}>Modifier mon profil</button>
      <UpdateProfilModal
        handleUpdateProfilToggle={handleUpdateProfilToggle}
        onClose={handleUpdateProfilToggle}
        isShowUpdateProfilModal={isShowUpdateProfilModal}
      />
      <section className="ProfilDetails__bioAndPracticeSports">
        <div className="ProfilDetails__bio--div">
          <h2 className="ProfilDetails__bio--title">Bio</h2>
          <p className="ProfilDetails__bio--description">
            {loggedUser.bio}
          </p>
        </div>
      </section>
    </div>
  );
}

ProfilDetails.propTypes = {
  loggedUser: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([undefined]),
    ]),
    age: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    location_id: PropTypes.number,
    locationName: PropTypes.string,
    locationDepartment: PropTypes.string,
    login: PropTypes.string,
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
