/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import './style.scss';
import React from 'react';
import Proptypes from 'prop-types';
import tag_image from '../../../../assets/family_tag.png';

import sports from '../../../../datas/sports';

function Card({
  title, sport_id, family_tag,
}) {
  const selectedSport = sports.find((sport) => sport.id === sport_id);
  // eslint-disable-next-line no-console
  return (
    <div className="card">
      <img className="card-bg" src={`${selectedSport.bg}`} alt="" />
      <div className="card-bk" style={{ background: `${selectedSport.color}88` }} />
      <div className="card-logo">
        <img src={`${selectedSport.image_color}`} alt="" />
      </div>
      <div className="card-family">
        {family_tag === 'true' ? <img src={tag_image} alt="" />
          : ''}
      </div>
      {/* <div className="family_tag1" style={{ color: `${color}` }}>SORTIE</div>
      <div className="family_tag2" style={{ color: `${color}` }}>FAMILLE</div> */}
      <div className="card-description">
        <p>{title}</p>
      </div>
      <div className="card-location">
        <p>Département</p>
        <p>Ville</p>
      </div>
      <button type="button" className="card-btn" style={{ color: `${selectedSport.color}` }}>
        En savoir +
      </button>
    </div>
  );
}

Card.propTypes = {
  title: Proptypes.string.isRequired,
  sport_id: Proptypes.number.isRequired,
  family_tag: Proptypes.string.isRequired,
};

export default Card;
