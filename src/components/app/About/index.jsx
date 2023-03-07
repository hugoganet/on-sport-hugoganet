import React from 'react';
import { Card } from 'semantic-ui-react';

import TeamMemberCard from './TeamMemberCard';

import './style.scss';

function About() {
  return (
    <div className="About">
      <h2 className="About__projectPresentation__title">Présentation du projet</h2>
      <p className="About__projectPresentation">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
      <h2 className="About__teamMembers__title">Présentation de l&apos;équipe</h2>
      <p className="About__teamPresentation">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
      <section className="About__teamMembers">
        <Card.Group centered stackable>
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </Card.Group>
      </section>
    </div>
  );
}

export default About;
