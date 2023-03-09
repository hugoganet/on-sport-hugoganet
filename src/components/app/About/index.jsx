/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Container } from 'semantic-ui-react';
import Header from '../Header';
import Footer from '../Footer';

import TeamMemberCards from './TeamMemberCards';

import './style.scss';

function About() {
  return (
    <>
      <Header />

      <Container fluid textAlign="justified">
        <h1 className="project__title">
          Présentation du projet
        </h1>
        <p className="project__description">
          Notre application est un site communautaire permettant le partage d'expériences
          sportives. Notre site met en relation des sportifs du monde entier pour partager
          leurs bonnes adresses et leurs bons plans lorsqu'ils voyagent en France.
          Nous souhaitons répondre au besoin du sportif qui part en vacances et qui
          souhaite continuer à pratiquer des activités sportives. L'application permettra à
          un utilisateur de découvrir des activités dans la zone géographique où il se
          rendra grâce au partage d'expériences des autres utilisateurs.
        </p>
      </Container>
      <Container small fluid className="about" textAlign="justified">
        <h1 className="about__title">
          À propos de nous
        </h1>
        <p className="about__description">
          Nous sommes une équipe de cinq développeurs passionnés par la création de solutions
          informatiques innovantes. Nous avons travaillé ensemble sur notre projet de fin de
          formation et avons combiné nos compétences pour le mener à bien.
          Notre équipe est composée de trois développeurs front-end, qui se concentrent sur la
          création d'interfaces utilisateur élégantes et fonctionnelles, ainsi que de deux
          développeurs back-end, qui se chargent de la logique de traitement des données
          et de la gestion des serveurs. Nous sommes fiers de notre approche collaborative
          et de notre engagement envers l'excellence technique. Nous sommes toujours à la
          recherche de nouveaux défis pour nous pousser à aller plus loin et améliorer constamment
          notre savoir-faire. N'hésitez pas à nous contacter pour discuter de votre prochain
          projet informatique!
        </p>
      </Container>

      <TeamMemberCards />

      <Footer />
    </>
  );
}

export default About;
