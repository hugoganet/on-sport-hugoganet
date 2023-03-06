import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import defaultProfilePicture from '../../../../assets/default_profile_picture_icon.jpeg';

import './style.scss';

function ProfilHeader({ loggedUser: { firstname, lastname, photo } }) {
  const userId = localStorage.getItem('userId');
  console.log('photo', photo);

  return (
    <header className="ProfilHeader">
      <button type="button" className=" ProfilHeader__button ProfilHeader__button--accueil">
        <NavLink to="/" className="menu-link">Accueil</NavLink>
      </button>
      <div className="ProfilHeader__img--div">
        <img
          className="ProfilHeader__img"
          src={photo ? `http://ronaldfk-server.eddi.cloud:8080/api/user/profil/${userId}/photo/${photo}` : defaultProfilePicture}
          alt="profilPicture"
        />
        <p className="ProfilHeader__name">
          {firstname}
          {' '}
          {lastname}
        </p>
      </div>
      <div className="ProfilHeader__button--div">
        <button type="button" className=" ProfilHeader__button ProfilHeader__button--monProfil">
          Mon profil
        </button>
        <button type="button" className=" ProfilHeader__button ProfilHeader__button--deconnexion">
          Sign out
        </button>
      </div>
    </header>
  );
}

ProfilHeader.propTypes = {
  loggedUser: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([undefined]),
    ]),
    age: PropTypes.string,
    bio: PropTypes.string,
    photo: PropTypes.string,
    email: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    location_id: PropTypes.number,
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

ProfilHeader.defaultProps = {
  loggedUser: {
    age: '',
    location_id: '',
    bio: '',
  },
};

export default ProfilHeader;
