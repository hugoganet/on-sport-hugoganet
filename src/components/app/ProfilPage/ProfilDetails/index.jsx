import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UpdateProfilModal from '../../../Modales/UpdateProfilModal';

import './style.scss';

function ProfilDetails({ loggedUser }) {
  const [isShowUpdateProfilModal, toggleShowUpdateProfilDetailsModal] = useState(false);

  const handleUpdateProfilToggle = () => {
    toggleShowUpdateProfilDetailsModal((state) => !state);
  };

  function calculateAge(birthdate) {
    // Split the birthdate string into day, month, and year components
    const [year, month, day] = birthdate.split('-');
    // Calculate the difference between the birth year and the current year
    const age = new Date().getFullYear() - year;
    // Check if the current month and day is before the birth month and day
    const birthdateThisYear = new Date(`${year}-${month}-${day}`);
    const now = new Date();
    if (now < birthdateThisYear) {
      // Subtract one year if the birthdate hasn't occurred yet this year
      return age - 1;
    }
    return age;
  }

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
        {/* ci-dessous : optionnal chaining (?.) */}
        {loggedUser?.age && calculateAge(loggedUser.age)}
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
