import React from 'react';

import ProfilDetails from './ProfilDetails';
import ProfilHeader from './ProfilHeader';
import ActivitiesList from './ActivitiesList';

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
