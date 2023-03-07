import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import profilPicture from '../../../../assets/Tac-raoul-2.png';

import './style.scss';

function TeamMemberCard() {
  return (
    // <div className="TeamMemberCard">
    //   <div className="TeamMemberCard__img--div">
    //     <img className="TeamMemberCard__img" src={profilPicture} alt="teamMemberPicture" />
    //   </div>
    //   <div className="TeamMemberCard__div--informations">
    //     <h3 className="TeamMemberCard__name">Karen Bartaud</h3>
    //     <p className="TeamMemberCard__bio">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //     </p>
    //   </div>
    // </div>
    <Card color="red">
      <Image src={profilPicture} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Karen Bartaud</Card.Header>
        <Card.Meta>
          <span>Lead Dev Front - Product Owner</span>
        </Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TeamMemberCard;
