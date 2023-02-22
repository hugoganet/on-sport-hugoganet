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

            
      <Filtered />
      <Footer />

    </div>
  <Form>
 
        <Form.Group widths='equal'>
    <Form.Select
    placeholder='Sélectionner un sport'
    fluid
    options={sports}
    control={Select}
  />
  <Form.Select
    placeholder='Sélectionner un département'
    fluid
    options={sports}
    control={Select}
  />
  <Form.Select
    placeholder='Sélectionner une ville'
    fluid
    options={sports}
    control={Select}
  />
   </Form.Group>
  </Form>
  </>
  );
}

export default Home;
