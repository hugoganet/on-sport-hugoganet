/* eslint-disable react/jsx-props-no-spreading */
import './style.scss';
import React from 'react';
import Card from './card/card';

import sports from '../../../datas/sports';

function Filtered() {
  return (
    <div className="cards">
      {
        sports.map((sport) => <Card {...sport} />)
      }

    </div>
  );
}

export default Filtered;
