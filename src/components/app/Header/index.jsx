/* eslint-disable max-len */
import React, { useState } from 'react';
import Modal from './Modal';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button type="button" onClick={handleModalToggle}>Se connecter</button>
      {showModal && (
        <Modal onClose={handleModalToggle}>
          {/* contenu de la modal */}
        </Modal>
      )}
    </div>
  );
}

export default Header;

// import React from 'react';

// import Modal from './Modal';

// import Logo from '../../../assets/OnSport_logo.png';
// import './style.scss';

// function Header() {

//   return (
//     <div className="header">
//       <div>
//         <img className="header__img" src={Logo} alt="logo" />
//       </div>
//       <button className="header__button header__button--home" type="button">
//         Accueil
//         {/* todo: voir pour ajouter une icone */}
//       </button>

//       {isLogged
//       // eslint-disable-next-line no-alert
//         ? <button type="button" className="header__button header__button--profil" onClick={() => alert('IRA SUR LA PAGE PROFIL')}>Mon profil</button>
//         // : <ModaleSignin isLogged={isLogged} setLogin={setLogin} /> }
//         : <button type="button" className="header__button header__button--signIn" onClick={console.log('OUVRIR LA MODAL')}>Connexion</button>}
//       {isLogged
//         ? <button type="button" className="header__button header__button--signOut">Se déconnecter</button>
//         // : <ModaleLogin isLogged={isLogged} setLogin={setLogin} /> }
//         : <button type="button" className="header__button header__button--signIn" onClick={console.log('OUVRIR LA MODAL')}>Créer un compte</button>}
//     </div>
//   );
// }

// export default Header;
