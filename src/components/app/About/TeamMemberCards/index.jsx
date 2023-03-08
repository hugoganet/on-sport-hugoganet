/* eslint-disable import/no-unresolved */
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import profilPicture from '../../../../assets/Tac-raoul-2.png';

import './style.scss';

function TeamMemberCards() {
  return (
    <Card.Group className="Cards__group" centered stackable>
      <Card>
        <Image src={profilPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Karen Bartaud</Card.Header>
          <Card.Meta>
            <span>Lead Dev Front - Product Owner</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Card>
        <Image src={profilPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Hugo Ganet</Card.Header>
          <Card.Meta>
            <span>Git Master</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Card>
        <Image src={profilPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Ramazan Cinar</Card.Header>
          <Card.Meta>
            <span>Référent technique</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Card>
        <Image src={profilPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Olivier Vinot</Card.Header>
          <Card.Meta>
            <span>Scrum Master</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Card>
        <Image src={profilPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Ronald Fonlebeck</Card.Header>
          <Card.Meta>
            <span>Lead Dev Back</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

export default TeamMemberCards;
