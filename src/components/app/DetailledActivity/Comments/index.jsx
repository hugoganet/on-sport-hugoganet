import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Form, Button, Comment, Header,
} from 'semantic-ui-react';
import Annotation from './Comment';

function Comments({ comments }) {
  const userId = localStorage.getItem('userId');

  const handleClick = async (e) => {
    e.preventDefault();
    const data = e.target.parentNode[0].value;

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    try {
      const response = await axios({
        method: 'post',
        url: `http://ronaldfk-server.eddi.cloud:8080//api/comment/activity/${userId}`,
        headers: {
          headers,
        },
        data,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
          <Button content="Commenter" labelPosition="right" icon="send" onClick={handleClick} />
        </Form>
      </Comment.Group>
    </div>
  );
}

Comments.propTypes = {
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
