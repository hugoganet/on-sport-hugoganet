import React from 'react';

import profilPicture from '../../../../assets/Tac-raoul-2.png';

import './style.scss';

function TeamMemberCard() {
  return (
    <div className="TeamMemberCard">
      <div className="TeamMemberCard__img--div">
        <img className="TeamMemberCard__img" src={profilPicture} alt="teamMemberPicture" />
      </div>
      <div className="TeamMemberCard__div--informations">
        <h3 className="TeamMemberCard__name">Karen Bartaud</h3>
        <p className="TeamMemberCard__bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
