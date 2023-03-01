import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import profilPicture from '../../../../assets/Tac-raoul-2.png';

import './style.scss';

function ProfilHeader({ loggedUser }) {
  return (
    <header className="ProfilHeader">
      <button type="button" className=" ProfilHeader__button ProfilHeader__button--accueil">
        <NavLink to="/" className="menu-link">Accueil</NavLink>
      </button>
      <div className="ProfilHeader__img--div">
        <img className="ProfilHeader__img" src={profilPicture} alt="profilPicture" />
        <p className="ProfilHeader__name">{loggedUser.firstname}</p>
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
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    city: PropTypes.string,
    zip_code: PropTypes.string,
    address: PropTypes.string,
    phone_number: PropTypes.string,
    birthdate: PropTypes.string,
  }),
};

ProfilHeader.defaultProps = {
  loggedUser: {
    city: '',
    zip_code: '',
    address: '',
    phone_number: '',
    birthdate: '',
  },
};

export default ProfilHeader;
