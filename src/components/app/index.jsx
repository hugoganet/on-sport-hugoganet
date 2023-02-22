import React from 'react';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';

// import ProfilPage from './ProfilPage';
import Footer from './Footer';
// import About from './About';
import Contact from './Contact';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      {/* <About /> */}
      {/* <ProfilPage /> */}
      <Footer />
    </div>
  );
}

export default App;
