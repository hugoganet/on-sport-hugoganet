import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import './style.scss';

function ActivitiesList({ loggedUser: { activitiesList } }) {
  console.log(activitiesList);

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

ActivitiesList.propTypes = {
  loggedUser: PropTypes.shape({
    activitiesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        note: PropTypes.string,
        description: PropTypes.string,
        photo: PropTypes.string,
        family_tag: PropTypes.bool,
        user_id: PropTypes.number,
        user_firstname: PropTypes.string,
        sportID: PropTypes.number,
        sportName: PropTypes.string,
        location_id: PropTypes.number,
        locationName: PropTypes.string,
        locationPostcode: PropTypes.number,
        locationDepartment: PropTypes.string,
      }),
    ),
  }),
};

ActivitiesList.defaultProps = {
  loggedUser: {
    activitiesList: [],
  },
};

export default ActivitiesList;
