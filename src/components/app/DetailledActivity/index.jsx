import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Image, Header as HeaderUi, Rating,
} from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';
import Carousel from './Carrousel/carousel';
import Comments from './Comments/index';

// import Filtered from '../FilteredActivities';

import './style.scss';

function DetailledActivity() {
  const activity = useParams();
  const [activityInfo, setActivityInfo] = useState({});
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/activity/${activity.id}`);
      return response;
    }
    setActivityInfo(fetchData());
  }, []);

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
          <HeaderUi as="h1" textAlign="center">{activityInfo.title}</HeaderUi>
        </div>
        <div className="rating">
          <Rating icon="star" defaultRating={3} maxRating={5} disabled size="massive" />
        </div>
        <div className="activity__description">
          <p>{activityInfo.description}</p>
        </div>
        <Comments activityInfo={activityInfo} />
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
