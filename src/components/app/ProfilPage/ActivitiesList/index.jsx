import React from 'react';
import { NavLink } from 'react-router-dom';

// import Card from '../../FilteredActivities/card/card';

import './style.scss';

function ActivitiesList() {
  return (
    <div className="ActivitiesList">
      <div className="ActivitiesList__div--titleAndButton">
        <h2 className="ActivitiesList__title">Liste des activités créées</h2>
        <button type="button" className="ActivitiesList__button">
          {' '}
          <NavLink
            to="/activity"
            className="ActivitiesList__button"
          >
            🖊 créer une nouvelle activité
          </NavLink>
        </button>
      </div>
      {/* <Card /> */}
    </div>
  );
}

export default ActivitiesList;
