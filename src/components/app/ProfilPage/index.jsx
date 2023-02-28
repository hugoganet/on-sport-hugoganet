import React from 'react';
import Proptypes from 'prop-types';

import ProfilDetails from './ProfilDetails';
import ProfilHeader from './ProfilHeader';
import ActivitiesList from './ActivitiesList';

import './style.scss';

function ProfilPage({ userId }) {
  console.log(`ProfilPage userId: ${userId}`);
  return (
    <div className="ProfilPage">
      <ProfilHeader />
      <ProfilDetails userId={userId} />
      <ActivitiesList />
    </div>
  );
}

ProfilPage.propTypes = {
  userId: Proptypes.number.isRequired,
};

export default ProfilPage;
