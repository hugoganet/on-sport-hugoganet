import Logo from '../../../assets/OnSport_logo.png';
import './style.scss';
import { Button, Icon} from 'semantic-ui-react'

import React from 'react';
import ModaleSignin from "../../app/modales/modale_signin";
import ModaleLogin from "../../app/modales/modale_login";

function Header() {
    
  const [isLogged, setLogin] = React.useState(false)

return (
       <div className="header-header">
         <div className="ui small image">
            <img src={Logo} alt="logo" />
        </div> 
       
    <Button.Group>
        <Button color='orange' animated='vertical'>
      <Button.Content hidden color='orange'>Accueil</Button.Content>
      <Button.Content visible>
        <Icon name='home' />
      </Button.Content>
    </Button>
{isLogged ? <Button onClick={() => alert('IRA SUR LA PAGE PROFIL')}>Mon profil</Button> : <ModaleSignin isLogged={isLogged} setLogin={setLogin} /> }

{isLogged ? <Button>Se déconnecter</Button> : <ModaleLogin isLogged={isLogged} setLogin={setLogin} /> }
</Button.Group>
</div>


    );
  }
  
  export default Header;
  