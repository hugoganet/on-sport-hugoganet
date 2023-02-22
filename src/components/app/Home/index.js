import './style.scss';
import Header from '../../app/Header';
import Footer from '../../app/Footer';
import Filtered from '../../app/FilteredActivities';

import React from 'react';
import bg from '../../../assets/home_bg.jpg';
import 'animate.css';
import { Form, Select } from 'semantic-ui-react'
import sports from '../../../datas/sportselect';

function Home() {
  
  return (
  
    
    <>
    <div className="Home">
      
      <Header />
      <div className="bg">
      <img src={bg} alt="background" />
      <p className="bg-title1 animate__animated animate__backInRight" >Tu es sportif et tu veux continuer à t'entrainer quand tu pars en vacances ?</p>
      <p className="bg-title2">Tu es veux partager tes expériences sportives à la communauté de OnSporters ?</p>
      </div>

      <Form>
      <h1 className="">Rechercher des activités</h1>
 <Form.Group widths='equal'>
<Form.Select
placeholder='Sélectionner un ou plusieurs sports'
fluid
multiple
options={sports}

/>
<Form.Select
placeholder='Sélectionne un département'
fluid
options={sports}

/>
<Form.Select
placeholder='Sélectionner une ville'
fluid
options={sports}

/>
</Form.Group>
</Form>  
      <Filtered />
      <Footer />

    </div>
  
  </>
  );
}

export default Home;
