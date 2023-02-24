/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import Proptypes from 'prop-types';
// import axios from 'axios';

// import {
//   Button, Form, Modal, Icon,
// } from 'semantic-ui-react';

// function ModaleLogin({ isLogged, setLogin }) {
//   const [open, setOpen] = React.useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setOpen(false);
//     setLogin(true);

//     const login = event.target.form[0].value;
//     const password = event.target.form[1].value;

//     const headers = {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     };

//     const response = await axios({
//       method: 'post',
//       url: 'http://ronaldfk-server.eddi.cloud:8080/api/auth/signin',
//       headers: {
//         headers,
//       },
//       data: {
//         login,
//         password,
//       },

//     });
//     console.log(response.data);
//   };

//   return (

//     <Modal
//       as={Form}
//       onSubmit={(e) => handleSubmit(e)}
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       isLogged={isLogged}
//       trigger={(
//         <Button icon labelPosition="left">
//           {' '}
//           <Icon name="user secret" color="blue" />
//           Se connecter
//         </Button>
// )}
//     >
//       <Modal.Header>Se connecter</Modal.Header>
//       <Modal.Content image>

//         <Modal.Description>

//           <Form.Input fluid name="identifiant" label="Identifiant" placeholder="Veuillez choisir un identifiant" />
//           <Form.Input fluid name="password" label="Mot de passe" placeholder="Veuillez choisir un mot de passe" />
//           <Form.Input fluid name="passwordConfirm" label="Confirmation Mot de passe" placeholder="Confirmer votre mot de passe" />

//         </Modal.Description>
//       </Modal.Content>
//       <Modal.Actions>

//         <Button
//           type="submit"
//           content="Valider"
//           labelPosition="right"
//           icon="checkmark"
//           positive
//           onClick={handleSubmit}
//         />
//       </Modal.Actions>
//     </Modal>

//   );
// }

// ModaleLogin.propTypes = {
//   isLogged: Proptypes.bool.isRequired,
//   setLogin: Proptypes.func.isRequired,
// };

// export default ModaleLogin;
