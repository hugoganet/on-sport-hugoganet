import Logo from '../../../assets/OnSport_logo.png';

import './style.scss';

function Footer() {
    
  
    return (
        <div className="footer">
         
         <div className="ui small image">
            <img src={Logo} alt="logo" />
        </div> 
        <button class="ui primary button">
  À propos
</button>
<button class="ui primary button">
 Contact
</button>
</div>
    );
  }
  
  export default Footer;
  