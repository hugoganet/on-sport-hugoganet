import Logo from '../../../assets/Logo_ON.png'

function Header() {
    
  
    return (
        <div className="header">
         <img src={Logo} alt="logo" />
         
         <div className="ui small image">
</div>
         <div className="ui animated button" tabindex="0">
  <div className="visible content">Next</div>
  <div className="hidden content">
    <i className="right arrow icon"></i>
  </div>
</div>
<div className="ui vertical animated button" tabindex="0">
  <div className="hidden content">Shop</div>
  <div className="visible content">
    <i className="shop icon"></i>
  </div>
</div>
<div className="ui animated fade button" tabindex="0">
  <div className="visible content">Sign-up for a Pro account</div>
  <div className="hidden content">
    $12.99 a month
  </div>
</div>
</div>
    );
  }
  
  export default Header;
  