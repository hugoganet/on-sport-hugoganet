import React from 'react';

import {
  Rating, Comment,
} from 'semantic-ui-react';
import './style.scss';

function Annotation() {
  <Comment>
    <Comment.Avatar src="/default-image.png" />
    <Comment.Content>
      <Comment.Author as="a">Utilisateur 1</Comment.Author>
      <div>
        <Rating icon="star" defaultRating={4} maxRating={5} size="mini" disabled />
      </div>
      <Comment.Text>Très bonne activité à faire en famille !</Comment.Text>
    </Comment.Content>
  </Comment>;
}

export default Annotation;
