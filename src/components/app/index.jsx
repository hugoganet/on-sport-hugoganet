import React from 'react';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';

import Home from './Home';
import ProfilPage from './ProfilPage';

function App() {
  return (
    <div className="App">
      <Home />
      <ProfilPage />
    </div>
  );
}

export default App;
