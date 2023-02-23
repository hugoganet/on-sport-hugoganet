import './style.scss';
import React from 'react';

function Card(sport) {
    console.log(sport.logo)
  
    return (

      <>
      <div class="card">
        <img class="card-bg" src={`${sport.bg}`} alt="" />
        <div class="card-bk" style={{background:`${sport.color}88`}}></div>
        <div class="card-logo">
          <img src={`${sport.logo_color}`} alt="" />
        </div>
        <div class="card-description">
          <p>Randonnée soleil levant en montagne</p>
        </div>
        <div  class="card-location">
          <p>Alpes d'Huez</p>
         </div>
        <div class="card-btn">
          <a href="#">En savoir +</a>
        </div>
      </div>
</>

    );
  }
  
  export default Card;
  