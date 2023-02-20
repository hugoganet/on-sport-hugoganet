import React from 'react';

import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import ProfilPage from '../ProfilPage';

function Home() {
  return (
    <div className="Home">
      <Header />
      <ProfilPage />
      <Footer />
    </div>
  );
}

export default Home;
