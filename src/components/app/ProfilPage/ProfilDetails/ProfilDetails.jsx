import React from 'react';

import logo from '../../../../assets/OnSport_logo.png';
import './style.scss';

function ProfilDetails() {
  return (
    <div className="ProfilDetails">
      <p className="ProfilDetails__location">Ambert - Auvergne-Rhône-Alpes</p>
      <p className="ProfilDetails__age">42 ans</p>
      <h2 className="ProfilDetails__bio--title">Bio</h2>
      <p className="ProfilDetails__bio--description">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <h2 className="ProfilDetails__practiceSports--title">Sports pratiqués</h2>
      <div className="ProfilDetails__practiceSports--img--div">
        <img className="ProfilDetails__practiceSports--img" src={logo} alt="icon" />
        <img className="ProfilDetails__practiceSports--img" src={logo} alt="icon" />
        <img className="ProfilDetails__practiceSports--img" src={logo} alt="icon" />
      </div>
    </div>
  );
}

export default ProfilDetails;
