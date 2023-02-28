/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';

// eslint-disable-next-line import/no-named-as-default
import Home from './Home';
import ProfilPage from './ProfilPage';
import CreateActivity from './CreateActivity';
import DetailledActivity from './DetailledActivity';
import Contact from './Contact';
import About from './About';

function App() {
  const [userId, setUserId] = useState('');

  const handleLoginSuccess = (userId) => {
    setUserId(userId);
    // eslint-disable-next-line no-console
    console.log(`App userId: ${typeof userId}`);
  };

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home onLoginSuccess={handleLoginSuccess} userId={userId} />} />
        <Route path="/profile/:id" element={<ProfilPage userId={userId} />} />
        <Route path="/activity" element={<CreateActivity />} />
        {/* <Route path="/activity/:id" elment={<DetailledActivity />} /> */}
        <Route path="/activity/id" element={<DetailledActivity />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} isZen={isZen} /> */}

      </Routes>

    </div>
  );
}

export default App;
