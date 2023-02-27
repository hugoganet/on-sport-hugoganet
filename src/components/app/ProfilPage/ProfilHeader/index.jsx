import React from 'react';
import { NavLink } from 'react-router-dom';
import profilPicture from '../../../../assets/Tac-raoul-2.png';

import './style.scss';

function ProfilHeader() {
  return (
    <header className="ProfilHeader">
      <button type="button" className=" ProfilHeader__button ProfilHeader__button--accueil">
        <NavLink to="/" className="menu-link">Accueil</NavLink>
      </button>
      <div className="ProfilHeader__img--div">
        <img className="ProfilHeader__img" src={profilPicture} alt="profilPicture" />
        <p className="ProfilHeader__name">Michel Isable</p>
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

export default ProfilHeader;
