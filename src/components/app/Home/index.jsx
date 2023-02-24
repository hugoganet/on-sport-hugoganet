/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Form } from 'semantic-ui-react';

import './style.scss';
import Header from '../Header';
import Footer from '../Footer';

import Filtered from '../FilteredActivities';

import bg from '../../../assets/home_bg.jpg';
import 'animate.css';
import sportsList from '../../../datas/sports';
import filterActivities from '../../../utils';

function Home() {
  const [sportItems, setsports] = React.useState(sportsList);

  const handleChange = (e, { value }) => {
    const filters = {
      name: value,
    };

    const filtered = filterActivities(sportsList, filters);

    // console.log(value)
    // // setsports(sportList.filter(elem => elem.name.includes(value)))

    // const found = sportList.find(x => value.includes(x))
    setsports(filtered);
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
            placeholder="Sélectionne un département"
            fluid
            options={sportsList}
          />
          <Form.Select
            placeholder="Sélectionner une ville"
            fluid
            options={sportsList}
          />
        </Form.Group>
      </Form>

      <Filtered sports={sportItems} />
      <Footer />
    </div>
  );
}

export default Home;
