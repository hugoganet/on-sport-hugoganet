/* eslint-disable import/no-unresolved */
// import React from 'react';

import './style.scss';

import React, { useState } from 'react';
import {
  Form, Button, Message, Grid,
} from 'semantic-ui-react';
import Header from '../Header';
import Footer from '../Footer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(false);
  // const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError(true);
      return;
    }

    // Compose l'e-mail avec les informations du formulaire
    const mailToLink = `mailto:contact.onsport@gmail.com?subject=Message de ${name}&body=${message}`;

    // Ouvre la fenêtre de composition de l'e-mail
    window.location.href = mailToLink;

    setName('');
    setEmail('');
    setMessage('');
    // setEmailSent(true);
  };

  return (
    <>
      <Header />
      <h1 className="Contact__title">Nous contacter</h1>
      <Grid className="Contact__div" centered>
        <Form className="Contact__form" onSubmit={handleSubmit} error={formError}>
          <Form.Input
            label="Nom et prénom"
            placeholder="Entrez votre nom et votre prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Input
            label="Email"
            placeholder="Entrez votre email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.TextArea
            label="Message"
            placeholder="Entrez votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Message
            error
            header="Erreur"
            content="Veuillez remplir tous les champs."
          />
          <Button type="submit">Envoyer</Button>
          <Button
            onClick={() => {
              // Compose l'e-mail avec les informations du formulaire
              const mailToLink = `mailto:contact.onsport@gmail.com?subject=Message de ${name}&body=${message}`;

              // Ouvre la fenêtre de composition de l'e-mail
              window.location.href = mailToLink;

              setName('');
              setEmail('');
              setMessage('');
              // setEmailSent(true);
            }}
          >
            Envoyer par email
          </Button>
          {/* {emailSent && (
        <Message positive>
          <Message.Header>Votre message a été envoyé avec succès</Message.Header>
          <p>Merci de nous avoir contactés.</p>
        </Message> */}
          {/* )} */}
        </Form>
      </Grid>
      <Footer />
    </>
  );
}

export default Contact;
