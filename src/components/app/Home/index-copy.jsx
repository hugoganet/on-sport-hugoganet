/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';
import Header from '../Header';
import Footer from '../Footer';

// import Filtered from '../FilteredActivities';

import bg from '../../../assets/home_bg.jpg';
import 'animate.css';
import sportsList from '../../../datas/sports';
import filterActivities from '../../../utils';

function Home({ ListActivities, setListActivities }) {
  const handleChange = (e, { value }) => {
    const filters = {
      name: value,
    };

    const filtered = filterActivities(ListActivities, filters);

    setListActivities(filtered);
  };

  return (

    <div className="Home">

      <Header />
      <div className="bg">
        <img src={bg} alt="background" />
        {/* <p className="bg-title1 animate__animated animate__backInRight" >
      Tu es sportif et tu veux continuer à t'entrainer quand tu pars en vacances ?</p>
      <p className="bg-title2">Tu es veux partager tes expériences
       sportives à la communauté de OnSporters ?</p> */}
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

      {/* <Filtered {ListActivities} /> */}
      <Footer />
    </div>
  );
}

Home.propTypes = {
  ListActivities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      note: PropTypes.number,
      description: PropTypes.string,
      family_tag: PropTypes.bool,
      sport_id: PropTypes.number,
      user_id: PropTypes.number,
      location_id: PropTypes.number,
      Sport: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        icon: PropTypes.string,
      })),
    }).isRequired,
  ).isRequired,
  setListActivities: PropTypes.func.isRequired,
};

export default Home;
