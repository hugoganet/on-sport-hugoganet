import React from 'react';

import {
  Image, Header as HeaderUi, Rating,
} from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';
import Carousel from './Carrousel/carousel';
import Comments from './Comments/index';

import Filtered from '../FilteredActivities';

import './style.scss';

function DetailledActivity() {
  return (
    <>
      <Header />
      <div className="activity__content">
        <Carousel />
        <div className="activity__author">
          <Image src="/default-image.png" avatar />
          <span>Username</span>
        </div>
        <div className="activity__title">
          <HeaderUi as="h1" textAlign="center">Titre de l&apos;activité</HeaderUi>
        </div>
        <div className="rating">
          <Rating icon="star" defaultRating={3} maxRating={5} disabled size="massive" />
        </div>
        <div className="activity__description">
          <p>Description de l&apos;activité</p>
        </div>
        <Comments />
      </div>

      <div className="filteredActivities__title">
        <h1>Autres activités qui pourraient vous intéresser</h1>
      </div>
      {/* <Filtered /> */}
      <Footer />
    </>
  );
}

export default DetailledActivity;
