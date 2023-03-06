import React from 'react';
import PropTypes from 'prop-types';
import {
  Rating, Comment,
} from 'semantic-ui-react';
import './style.scss';

function Annotation({ activityInfo }) {
  const userId = localStorage.getItem('userId');

  return(
    <Comment>
      <Comment.Avatar src="/default-image.png" />
      <Comment.Content>
        <Comment.Author as="a">Utilisateur 1</Comment.Author>
        <div>
          <Rating icon="star" defaultRating={activityInfo.note} maxRating={5} size="mini" disabled />
        </div>
        <Comment.Text>Très bonne activité à faire en famille !</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

Annotation.propTypes = {
  activityInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    note: PropTypes.number,
    description: PropTypes.string,
    photo: PropTypes.string,
    family_tag: PropTypes.bool,
    // user_id: PropTypes.number,
    // user_firstname: PropTypes.string,
    sportID: PropTypes.number,
    sportName: PropTypes.string,
    location_id: PropTypes.number,
    locationName: PropTypes.string,
    locationPostcode: PropTypes.string,
    locationDepartment: PropTypes.string,
  }).isRequired,
};

export default Annotation;
