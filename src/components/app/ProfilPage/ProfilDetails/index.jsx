import React, { useState } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';

import UpdateProfilModal from '../../../Modales/UpdateProfilModal';

import logo from '../../../../assets/OnSport_logo.png';
import './style.scss';

function ProfilDetails({ userId }) {
  const [showUpdateProfilModal, setShowUpdateProfilDetailsModal] = useState(false);

  const handleUpdateProfilDetails = () => {
    setShowUpdateProfilDetailsModal(true);
  };

  const handleUpdateProfilClose = () => {
    setShowUpdateProfilDetailsModal(false);
  };
  console.log(`ProfilDetails userId: ${userId}`);

  axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/user/profil/${userId}`)
    .then((response) => {
      // Traitement des données reçues
      const users = response.data;
      console.log(users);
    })
    .catch((error) => {
      // Gestion des erreurs
      console.error(error);
    });

  return (
    <div className="ProfilDetails">
      <p className="ProfilDetails__location">📍Ambert - Auvergne-Rhône-Alpes</p>
      <p className="ProfilDetails__age">⏳42 ans</p>
      <button type="button" className="ProfilDetails__button" onClick={handleUpdateProfilDetails}>Modifier mon profil</button>
      {showUpdateProfilModal && <UpdateProfilModal onClose={handleUpdateProfilClose} />}
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

ProfilDetails.propTypes = {
  userId: Proptypes.number.isRequired,
};

export default ProfilDetails;
