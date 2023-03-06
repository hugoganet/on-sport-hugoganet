import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Button, Comment, Header,
} from 'semantic-ui-react';
import Annotation from './Comment';

function Comments({ comments }) {
  console.log(comments);
  return (
    <div className="activity__comments">

      <Comment.Group>
        <Header as="h3" dividing>
          Commentaires
        </Header>

        {
       // eslint-disable-next-line react/jsx-props-no-spreading
       comments.map((comm) => <Annotation key={comm.id} {...comm} />)
      }

        <Form reply className="activity__add__comment">
          <Form.TextArea placeholder="Ajouter un commentaire" />
          <Button content="Commenter" labelPosition="right" icon="send" />
        </Form>
      </Comment.Group>
    </div>
  );
}

Comments.propTypes = {
  // activityInfo: PropTypes.shape({
  //   id: PropTypes.number,
  //   title: PropTypes.string,
  //   note: PropTypes.number,
  //   description: PropTypes.string,
  //   photo: PropTypes.string,
  //   family_tag: PropTypes.bool,
  //   // user_id: PropTypes.number,
  //   // user_firstname: PropTypes.string,
  //   sportID: PropTypes.number,
  //   sportName: PropTypes.string,
  //   location_id: PropTypes.number,
  //   locationName: PropTypes.string,
  //   locationPostcode: PropTypes.string,
  //   locationDepartment: PropTypes.string,
  // }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      activity_note: PropTypes.number,
      user_id: PropTypes.number,
      activity_id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default Comments;
