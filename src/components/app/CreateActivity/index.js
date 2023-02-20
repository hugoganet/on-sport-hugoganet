import { Form } from "semantic-ui-react";
import Footer from "../Footer";
import Header from "../Header";

function CreateActivity() {
    return (
        <>
            <Header />
            <h1>Ajouter une activité</h1>
            <Form className="ui form">
                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <input type="text" name="title" placeholder="Titre de l'activité" />
                        </div>
                    </div>
                </div>
            </Form>
            <Footer />
        </>
    );
}

export default CreateActivity;