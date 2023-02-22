import Logo from '../../../assets/OnSport_logo.png';
import './style.scss';

import React from 'react';
import ModaleLogin from "../../app/modales/modale_login";

import { Button, Header as H, Image, Modal, Form } from 'semantic-ui-react'
function Header() {
    
return (
        <div className="header">
         
         <div className="ui small image">
            <img src={Logo} alt="logo" />
        </div> 
        <button class="ui primary button" >
  SignIn
</button>
<button className="ui primary button" onClick={() => {
           return(
<ModaleLogin />

  )}} >
 LogIn
</button>

<>
      <Modal as={Form} trigger={<Button>Basic Modal</Button>} size="small">
        <H content="Form Modal" />
        <Modal.Content>
          <Form.Input fluid name="title" label="Title" placeholder="Title" />
          <Form.Input fluid name="author" label="Author" placeholder="Author" />
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red">
            No
          </Button>
          <Button type="submit" color="green">
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
   </>


</div>



    );
  }
  
  export default Header;
  