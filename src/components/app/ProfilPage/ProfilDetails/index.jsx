import React, { useState } from 'react';
import PropTypes from 'prop-types';

import UpdateProfilModal from '../../../Modales/UpdateProfilModal';

import logo from '../../../../assets/OnSport_logo.png';
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
      <p className="ProfilDetails__location">📍Ambert - Auvergne-Rhône-Alpes</p>
      <p className="ProfilDetails__age">
        AGE :
        {' '}
        {loggedUser.firstname}
      </p>
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
  loggedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string,
    zip_code: PropTypes.string,
    address: PropTypes.string,
    phone_number: PropTypes.string,
    birthdate: PropTypes.string,
  }),
};

ProfilDetails.defaultProps = {
  loggedUser: {
    city: '',
    zip_code: '',
    address: '',
    phone_number: '',
    birthdate: '',
  },
};

export default ProfilDetails;
