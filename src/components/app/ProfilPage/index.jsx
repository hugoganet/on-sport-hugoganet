import React from 'react';

import ProfilDetails from './ProfilDetails/ProfilDetails';
import ProfilHeader from './ProfilHeader/ProfilHeader';
import ActivitiesList from './ActivitiesList/ActivitiesList';

import './style.scss';

function ProfilPage() {
  return (
    <div className="ProfilPage">
      <ProfilHeader />
      <ProfilDetails />
      <ActivitiesList />
    </div>
  );
}

export default ProfilPage;
