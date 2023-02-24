/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import React from 'react';
import Proptypes from 'prop-types';

import Card from './card/card';

function Filtered(activities) {
  const { list } = activities;
  console.log(activities);
  return (
    <div className="cards">
      {
        list.map((activity) => <Card {...activity} />)
      }

    </div>
  );
}

Card.propTypes = {
  activities: Proptypes.string,
};
export default Filtered;
