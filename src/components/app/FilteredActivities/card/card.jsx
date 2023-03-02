/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Proptypes from 'prop-types';
import tag_image from '../../../../assets/family_tag.png';

import sports from '../../../../datas/sports';

function Card({
  title, sportID, family_tag, id, locationName, locationDepartment
}) {
  const selectedSport = sports.find((sport) => sport.id === sportID);
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
        <p>{locationName}</p>
        <p>{locationDepartment}</p>
      </div>
      <NavLink to={`/activity/${id}`} className="card-btn" style={{ color: `${selectedSport.color}` }}>En savoir +</NavLink>
    </div>
  );
}

Card.propTypes = {
  title: Proptypes.string.isRequired,
  sportID: Proptypes.number.isRequired,
  family_tag: Proptypes.bool.isRequired,
  id: Proptypes.number.isRequired,
};

export default Card;
