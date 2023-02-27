/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Card from './card/card';

function Filtered({ ListActivities }) {
  return (
    <div className="cards">
      {
       // eslint-disable-next-line react/destructuring-assignment
       ListActivities.map((activity) => <Card {...activity} />)
      }

    </div>
  );
}

Filtered.propTypes = {
  ListActivities: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    note: PropTypes.number,
    description: PropTypes.string,
    family_tag: PropTypes.bool,
    sport_id: PropTypes.number,
    user_id: PropTypes.number,
    location_id: PropTypes.number,
    Sport: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      icon: PropTypes.string,
    })),
  }).isRequired,
};

export default Filtered;
