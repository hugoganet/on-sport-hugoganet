/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import './style.scss';
import React from 'react';

import Proptypes from 'prop-types';

function Card({
  bg, color, image_color,
}) {
  // eslint-disable-next-line no-console
  return (
    <div className="card">
      <img className="card-bg" src={`${bg}`} alt="" />
      <div className="card-bk" style={{ background: `${color}88` }} />
      <div className="card-logo">
        <img src={`${image_color}`} alt="" />
      </div>
      <div className="family_tag1" style={{ color: `${color}` }}>SORTIE</div>
      <div className="family_tag2" style={{ color: `${color}` }}>FAMILLE</div>
      <div className="card-description">
        <p>Randonnée soleil levant en montagne, avec en prime des chèvres qui me suivent</p>
      </div>
      <div className="card-location">
        <p>Département</p>
        <p>Ville</p>
      </div>
      <button type="button" className="card-btn" style={{ color: `${color}` }}>
        En savoir +
      </button>
    </div>
  );
}

Card.propTypes = {
  bg: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  image_color: Proptypes.string.isRequired,
};

export default Card;
