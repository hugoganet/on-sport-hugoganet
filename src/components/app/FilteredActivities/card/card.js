import './style.scss';
import React from 'react';

function Card(sport) {

  
    return (

      <>
      <div className="card">
        <img className="card-bg" src={`${sport.bg}`} alt="" />
        <div className="card-bk" style={{background:`${sport.color}88`}}></div>
        <div className="card-logo">
          <img src={`${sport.logo_color}`} alt="" />
        </div>
        <div className="card-description">
          <p>Randonnée soleil levant en montagne</p>
        </div>
        <div  className="card-location">
          <p>Alpes d'Huez</p>
         </div>
        <div className="card-btn">
          <a href="#">En savoir +</a>
        </div>
      </div>
</>

    );
  }
  
  export default Card;
  