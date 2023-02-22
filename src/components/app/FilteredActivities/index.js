import './style.scss';
import Card from '../FilteredActivities/card/card';
import React from 'react';

// import sports from '../../../datas/sport';

function Filtered({sports}) {


    return (
        <div className="cards">
 {
        sports.map((sport) => <Card {...sport} />)
      }
       
</div>
    );
  }

  export default Filtered;