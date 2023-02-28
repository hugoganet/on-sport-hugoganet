/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Proptypes from 'prop-types';
import {
  Form, Image, Grid, Segment, Label,
} from 'semantic-ui-react';
import axios from 'axios';

import './style.scss';

import Header from '../Header';
import Footer from '../Footer';

import Filtered from '../FilteredActivities';

import bg from '../../../assets/On.gif';
import Step1 from '../../../assets/step1.gif';
import Step2 from '../../../assets/step2.gif';
import Step3 from '../../../assets/step3.gif';
import 'animate.css';
import sportsList from '../../../datas/sports';
import filterActivities from '../../../utils'; // You can also use <link> for styles
// ..

function Home({ onLoginSuccess, userId }) {
  const [ListActivities, setListActivities] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://ronaldfk-server.eddi.cloud:8080/api/activity', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((response) => setListActivities(response.data)).catch((error) => {
      console(error);
    });
  }, []);

  const handleChange = (e, { value }) => {
    const filters = {
      name: value,
    };

    const filtered = filterActivities(ListActivities, filters);

    setListActivities(filtered);
  };
  return (

    <div className="Home">

      <Header onLoginSuccess={onLoginSuccess} userId={userId} />
      <div className="bg">
        <img src={bg} alt="background" />
        {/* <p className="bg-title1 animate__animated animate__backInRight" >
      Tu es sportif et tu veux continuer à t'entrainer quand tu pars en vacances ?</p>
      <p className="bg-title2">Tu es veux partager tes expériences
       sportives à la communauté de OnSporters ?</p> */}
      </div>
      <div className="steps_container">
        <div className="steps">
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Segment padded>
                  <Label attached="top" color="orange">INSCRIS-TOI</Label>
                  <Image src={Step1} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment padded>
                  <Label attached="bottom" color="orange">INSPIRE TOI DES EXPERIENCES DES AUTRES UTILISATEURS POUR PRATIQUER TES SPORTS FAVORIS</Label>
                  <Image src={Step2} />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment padded>
                  <Label attached="top right" color="orange">PARTAGE A TON TOUR TES ENTRAINEMENTS</Label>
                  <Image src={Step3} />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>

      <Form>
        <h1 className="">Rechercher des activités</h1>
        <Form.Group widths="equal">
          <Form.Select
            placeholder="Sélectionner un ou plusieurs sports"
            fluid
            multiple
            options={sportsList}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleChange.bind(this)}
          />
          <Form.Select
            placeholder="Sélectionner un ou plusieurs sports"
            fluid
            options={sportsList}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleChange.bind(this)}
          />
          <Form.Select
            placeholder="Sélectionner un ou plusieurs sports"
            fluid
            options={sportsList}
            // eslint-disable-next-line react/jsx-no-bind
            onChange={handleChange.bind(this)}
          />
        </Form.Group>
      </Form>
      <Filtered ListActivities={ListActivities} />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  onLoginSuccess: Proptypes.func.isRequired,
  userId: Proptypes.number.isRequired,
};

export default Home;
