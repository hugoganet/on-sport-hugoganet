import React from 'react';

import logo from '../../../../assets/OnSport_logo.png';
import './style.scss';

function ProfilDetails() {
  return (
    <div className="ProfilDetails">
      <p className="ProfilDetails__location">📍Ambert - Auvergne-Rhône-Alpes</p>
      <p className="ProfilDetails__age">⏳42 ans</p>
      <section className="ProfilDetails__bioAndPracticeSports">
        <div className="ProfilDetails__bio--div">
          <h2 className="ProfilDetails__bio--title">Bio</h2>
          <p className="ProfilDetails__bio--description">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
        </div>
        <div className="ProfilDetails__practiceSports__div">
          <h2 className="ProfilDetails__practiceSports__div--title">Sports pratiqués</h2>
          <div className="ProfilDetails__practiceSports__div--div">
            <img className="ProfilDetails__practiceSports__div--img" src={logo} alt="icon" />
            <img className="ProfilDetails__practiceSports__div--img" src={logo} alt="icon" />
            <img className="ProfilDetails__practiceSports__div--img" src={logo} alt="icon" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilDetails;
