import React from 'react';

import {
  Form, Button, Comment, Header,
} from 'semantic-ui-react';
import Annotation from './Comment';

function Comments() {
  return (
    <div className="activity__comments">
      <Comment.Group>
        <Header as="h3" dividing>
          Commentaires
        </Header>

        <Annotation />
        <Annotation />
        <Annotation />
        <Annotation />
        <Annotation />
        <Annotation />

        <Form reply className="activity__add__comment">
          <Form.TextArea placeholder="Ajouter un commentaire" />
          <Button content="Commenter" labelPosition="right" icon="send" />
        </Form>
      </Comment.Group>
    </div>
  );
}

export default Comments;
