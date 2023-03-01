import React from 'react';
import PropTypes from 'prop-types';

import ProfilDetails from './ProfilDetails';
import ProfilHeader from './ProfilHeader';
import ActivitiesList from './ActivitiesList';

import './style.scss';

function ProfilPage({ loggedUser }) {
  console.log(`ProfilPage loggedUser => ${loggedUser}`);

  return (
    <div className="ProfilPage">
      <ProfilHeader loggedUser={loggedUser} />
      <ProfilDetails loggedUser={loggedUser} />
      <ActivitiesList />
    </div>
  );
}

ProfilPage.propTypes = {
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

ProfilPage.defaultProps = {
  loggedUser: {
    city: '',
    zip_code: '',
    address: '',
    phone_number: '',
    birthdate: '',
  },
};

export default ProfilPage;
