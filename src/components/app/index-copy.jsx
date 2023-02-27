/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

// eslint-disable-next-line import/no-named-as-default
import Home from './Home';
import ProfilPage from './ProfilPage';
import CreateActivity from './CreateActivity';
import DetailledActivity from './DetailledActivity';
import Contact from './Contact';
import About from './About';

function App() {
  const [ListActivities, setListActivities] = React.useState({
    id: 1,
    title: 'Entraînement de course à pied',
    note: 3,
    description: '',
    family_tag: false,
    sport_id: 6,
    user_id: 4,
    location_id: 1,
    Sport: {
      id: 1,
      name: 'Athlétisme',
      icon: 'Athlétisme',
    },
  });

  React.useEffect(() => {
    axios.get('http://ronaldfk-server.eddi.cloud:8080/api/activity', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then((response) => {
      setListActivities(response.data);
      console.log(ListActivities);
    }).catch((error) => {
      console(error);
    });
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} ListActivities={ListActivities} setListActivities={setListActivities} />
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
