/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';

import Home from './Home';
import ProfilPage from './ProfilPage';
import CreateActivity from './CreateActivity';
import DetailledActivity from './DetailledActivity';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilPage />} />
        <Route path="/activity" element={<CreateActivity />} />
        <Route path="/activity/:id" element={<DetailledActivity />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} isZen={isZen} /> */}

      </Routes>

    </div>
  );
}

export default App;
