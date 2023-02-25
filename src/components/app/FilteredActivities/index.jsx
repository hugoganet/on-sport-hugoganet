/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Proptypes from 'prop-types';

import Card from './card/card';

function Filtered(activities) {
  return (
    <div className="cards">
      {
       // eslint-disable-next-line react/destructuring-assignment
       activities.map((activity) => <Card {...activity} />)
      }

    </div>
  );
}

Card.propTypes = {
  activities: Proptypes.string,
};
export default Filtered;
