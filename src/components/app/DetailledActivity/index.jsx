/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Image, Header as HeaderUi, Rating,
} from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';
import Carousel from './Carrousel/index';
import Comments from './Comments/index';

import Filtered from '../FilteredActivities';
import map from '../../../assets/map.gif';

import './style.scss';

function DetailledActivity() {
  const activity = useParams();
  const [activityInfo, setActivityInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [ListActivities, setListActivities] = useState([]);
  const [ListActivitiesDpt, setListActivitiesDpt] = useState([]);
  const [ListActivitiesSport, setListActivitiesSport] = useState([]);
  const activityId = activity.id;

  React.useEffect(
    () => {
      axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/activity/${activityId}`).then(
        (response) => { setActivityInfo(response.data); },
      ).catch((error) => {
        console(error);
      });

      axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/comment/activity/${activityId}`).then(
        (response) => setComments(response.data),
      ).catch((error) => {
        console(error);
      });
      axios.get('http://ronaldfk-server.eddi.cloud:8080/api/activity', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }).then(
        (response) => { setListActivities(response.data); },
      ).catch((error) => {
        console(error);
      });
    },
    [],
  );

  React.useEffect(() => {
    const filterDepartment = ListActivities.filter((loc) => loc.locationDepartment === activityInfo.locationDepartment);
    setListActivitiesDpt(filterDepartment);
    const filterSport = ListActivities.filter((sport) => sport.sportName === activityInfo.sportName);
    setListActivitiesSport(filterSport);
  }, [ListActivities, activityInfo]);

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
        <Comments comments={comments} />
      </div>

      <div className="filteredActivities">
        <span className="filteredActivities__title"><img src={map} alt="background" />AUTRES ACTIVITÉS AYANT LIEU DANS LE MÊME DÉPARTEMENT</span>
        <Filtered ListActivities={ListActivitiesDpt} />
        <span className="filteredActivities__title">AUTRES ACTIVITÉS RELATIVES AU MÊME SPORT</span>
        <Filtered ListActivities={ListActivitiesSport} />
      </div>

      <Footer />
    </>
  );
}

export default DetailledActivity;
