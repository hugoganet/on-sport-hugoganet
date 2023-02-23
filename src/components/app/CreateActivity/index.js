import { Button } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { Form } from "semantic-ui-react";
import Footer from "../Footer";
import Header from "../Header";

import './style.scss';

function CreateActivity() {
    const options = [
        { key: 'ft', text: 'Footing', value:'footing'},
        { key: 'vl', text: 'Vélo', value:'velo'},
        { key: 'es', text: 'Escalade', value:'escalade'},
    ];

        return (
        <>
            <Header />
            <Form>
            <h1 className="">Ajouter une activité</h1>
                <Form.Input  width={12} fluid label="Entrer le titre de l'activité" placeholder="Titre de l'activité" />
                <Form.Input width={12} fluid label="Entrer la localisation" placeholder="Localisation" />
                <Form.Group inline>
                    <Form.Select
                        fluid
                        label="Sport"
                        options={options}
                        placeholder="Sport"
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
                <Form.TextArea width={12} label="Description de l'activité" placeholder="Ajouter une description de l'activité" />
                    <Button className="ui button">
                        <label>Ajouter une image...</label>
                    </Button>                    
                <Image.Group size="medium">
                    <Image src="/default-image.png" />
                    <Image src="/default-image.png" />
                    <Image src="/default-image.png" />
                </Image.Group>
                <Form.Button>Valider</Form.Button>
            </Form>

            <Footer />
        </>
    );
}

export default CreateActivity;