import React from 'react';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';

// import ProfilPage from './ProfilPage';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <div className="App">
      <About />
      {/* <ProfilPage /> */}
      <Footer />
    </div>
  );
}

export default App;
