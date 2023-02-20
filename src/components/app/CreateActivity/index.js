import { Form } from "semantic-ui-react";
import Footer from "../Footer";
import Header from "../Header";

function CreateActivity() {
    const options = [
        { key: 'ft', text: 'Footing', value:'footing'},
        { key: 'vl', text: 'Vélo', value:'velo'},
        { key: 'ft', text: 'Escalade', value:'escalade'},
    ];

        return (
        <>
            <Header />
            <h1>Ajouter une activité</h1>
            <Form>
                <Form.Input fluid label="Entrer le titre de l'activité" placeholder="Titre de l'activité" />
                <Form.Input fluid label="Entrer la localisation" placeholder="Localisation" />
                <Form.Group inline>
                    <Form.Select
                        fluid
                        label="Sport"
                        options={options}
                    />
                    <label>Cette activité peut-elle se faire en famille ? </label>
                    <Form.Radio
                    label="Oui"
                    value="oui"
                    // checked={value === 'oui'}
                    />
                    <Form.Radio
                    label="Non"
                    value="non"
                    />
                </Form.Group>
                <Form.TextArea label="Description de l'activité" placeholder="Ajouter une description de l'activité" />
                <Form.Button>Valider</Form.Button>
            </Form>
            <Footer />
        </>
    );
}

export default CreateActivity;