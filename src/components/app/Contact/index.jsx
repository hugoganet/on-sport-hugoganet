import React from 'react';

import './style.scss';

function Contact() {
  return (
    <form className="Contact">
      <h2 className="Contact__title">Nous contacter</h2>
      <input className="Contact__input Contact__input--lastName" type="text" placeholder="Nom" />
      <input className="Contact__input Contact__input--firstName" type="text" placeholder="Prénom" />
      <input className="Contact__input Contact__input--email" type="email" placeholder="Email" />
      <input className="Contact__input Contact__input--message" type="text" placeholder="Votre message" />
      <button type="button" className="Contact__button">Envoyer</button>
    </form>
  );
}

export default Contact;
