import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Rating, Comment,
} from 'semantic-ui-react';
import './style.scss';

function Annotation({
  activity_note, content, user_id,
}) {
  const userId = localStorage.getItem('userId');
  const [userComment, setUserComment] = React.useState([]);

  React.useEffect(
    () => {
      axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/user/profil/${user_id}`).then(
        (response) => { setUserComment(response.data); },
      ).catch((error) => {
        console(error);
      });
    },
    [],
  );
  console.log(userComment);

  return (
    <Comment>
      <Comment.Avatar src="/default-image.png" />
      <Comment.Content>
        <Comment.Author as="a">{userComment.firstname}{' '}{userComment.lastname}</Comment.Author>
        <div>
          <Rating icon="star" defaultRating={activity_note} maxRating={5} size="mini" disabled />
        </div>
        <Comment.Text>{content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

Annotation.propTypes = {
  activity_id: PropTypes.number.isRequired,
  activity_note: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,

};

export default Annotation;
