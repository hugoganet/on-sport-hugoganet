import './style.scss';
import React from 'react';

function Card(sport) {
  return (

    <div className="card">
      <img className="card-bg" src={`${sport.bg}`} alt="" />
      <div className="card-bk" style={{background:`${sport.color}88`}} />
      <div className="card-logo">
        <img src={`${sport.logo_color}`} alt="" />
      </div>
      <div className="family_tag1" style={{ color:`${sport.color}` }}>SORTIE</div>
      <div className="family_tag2" style={{ color:`${sport.color}` }}>FAMILLE</div>
      <div className="card-description">
        <p>Randonnée soleil levant en montagne, avec en prime des chèvres qui me suivent</p>
      </div>
      <div className="card-location">
        <p>Département</p>
        <p>Ville</p>
      </div>
      <button className="card-btn" style={{color:`${sport.color}`}}>
        En savoir +</button>
     
    </div>

  );
}

export default Card;
