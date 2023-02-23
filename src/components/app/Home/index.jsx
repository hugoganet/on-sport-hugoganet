import React from 'react';

import './style.scss';
import Header from '../Header';
import Footer from '../Footer';

import Filtered from '../../app/FilteredActivities';
import bg from '../../../assets/home_bg.jpg';
import 'animate.css';

function Home() {
  return (
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
  );
}

export default Home;
