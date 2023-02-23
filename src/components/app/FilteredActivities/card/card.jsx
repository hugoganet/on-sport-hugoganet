/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import './style.scss';
import React from 'react';

import Proptypes from 'prop-types';

function Card({
  logo, bg, color, logo_color,
}) {
  // eslint-disable-next-line no-console
  console.log(logo);

  return (

    <div className="card">
      <img className="card-bg" src={`${bg}`} alt="" />
      <div className="card-bk" style={{ background: `${color}88` }} />
      <div className="card-logo">
        <img src={`${logo_color}`} alt="" />
      </div>
      <div className="card-description">
        <p>Randonnée soleil levant en montagne</p>
      </div>
      <div className="card-location">
        <p>Alpes d&apos;Huez</p>
      </div>
      <div className="card-btn">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">En savoir +</a>
      </div>
    </div>

  );
}

Card.propTypes = {
  logo: Proptypes.string.isRequired,
  bg: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  logo_color: Proptypes.string.isRequired,
};

export default Card;
