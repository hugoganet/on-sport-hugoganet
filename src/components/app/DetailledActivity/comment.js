import { Form } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";
import { Comment, Header, Icon } from "semantic-ui-react";

function Comments() {
    return (
            <div className="activity__comments">
            <Comment.Group>
                <Header as="h3" dividing>
                    Commentaires
                </Header>

                <Comment>
                    <Comment.Avatar src="/default-image.png" />
                    <Comment.Content>
                        <Comment.Author as="a">Utilisateur 1</Comment.Author>
                        <div>
                            <Rating icon="star" defaultRating={4} maxRating={5} size="mini" disabled />
                        </div>
                        <Comment.Text>Très bonne activité à faire en famille !</Comment.Text>
                    </Comment.Content>
                </Comment>

                <Comment>
                    <Comment.Avatar src="/default-image.png" />
                    <Comment.Content>
                        <Comment.Author as="a">Utilisateur 2</Comment.Author>
                        <div>
                        <Rating icon="star" defaultRating={3} maxRating={5} size="mini" disabled />
                        </div>
                        <Comment.Text>Je recommande cette activité</Comment.Text>
                    </Comment.Content>
                </Comment>
                <Form reply className="activity__add__comment">
                    <Form.TextArea placeholder="Ajouter un commentaire"/>
                    <Button content="Commenter" labelPosition="right" icon="send" />
                </Form>
            </Comment.Group>
            </div>
    );
}

export default Comments;