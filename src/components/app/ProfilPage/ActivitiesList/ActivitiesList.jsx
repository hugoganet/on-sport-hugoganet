import React from 'react';

import './style.scss';

function ActivitiesList() {
  return (
    <div className="ActivitiesList">
      <h2 className="ActivitiesList__title">Liste des activités créées</h2>
      <button type="button" className="ActivitiesList__button">
        🖊 créer une nouvelle activité
      </button>
    </div>
  );
}

export default ActivitiesList;
