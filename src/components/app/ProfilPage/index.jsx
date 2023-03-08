// /import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';

import ProfilDetails from './ProfilDetails';
import ProfilHeader from './ProfilHeader';
import ActivitiesList from './ActivitiesList';
import Footer from '../Footer';

import './style.scss';

function ProfilPage() {
  const [UserInfos, setUserInfos] = useState({});

  const userId = localStorage.getItem('userId');

  React.useEffect(() => {
    axios.get(`http://ronaldfk-server.eddi.cloud:8080/api/user/profil/${userId}`)
      .then((response) => setUserInfos(response.data))
      .catch((error) => {
        console(error);
      });
  }, [UserInfos]);

  return (
    <div className="ProfilPage">
      <ProfilHeader loggedUser={UserInfos} />
      <ProfilDetails loggedUser={UserInfos} />
      <ActivitiesList loggedUser={UserInfos} />
      <Footer />
    </div>
  );
}

export default ProfilPage;
