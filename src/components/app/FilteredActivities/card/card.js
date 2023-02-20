import './style.scss';
import Running_icon from '../../../../assets/running.png';
import Mountain from '../../../../assets/mountain.jpg';

function Card() {
    
  
    return (

      <>
      <div class="second hero">
        <img class="hero-profile-img" src={`${Mountain}`} alt="" />
        <div class="hero-description-bk"></div>
        <div class="hero-logo">
          <img src={`${Running_icon}`} alt="" />
        </div>
        <div class="hero-description">
          <p>Randonnée soleil levant en montagne</p>
        </div>
        <div  class="hero-date">
          <p>Alpes d'Huez</p>
        </div>
        <div class="hero-btn">
          <a href="#">En savoir +</a>
        </div>
      </div>
</>

    );
  }
  
  export default Card;
  