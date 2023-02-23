import React from 'react';

import './style.scss';
import Header from '../Header';
import Footer from '../Footer';

import Filtered from '../../app/FilteredActivities';

import React from 'react';
import bg from '../../../assets/home_bg.jpg';
import 'animate.css';
import { Form, Select } from 'semantic-ui-react'
import sports from '../../../datas/sportselect';

import sportList from '../../../datas/sport';

function Home() {
  const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);
  const [sportItems, setsports] = React.useState(sportList)

  function filterPlainArray(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].find(filter => getValue(filter) === getValue(item[key]));
      });
    });
  }



  const handleChange = (e, {value}) => {
    const filters = {
      name: value,
    };

    const filtered = filterPlainArray(sportList, filters);
    console.log(filtered)

    // console.log(value)
    // // setsports(sportList.filter(elem => elem.name.includes(value)))

    // const found = sportList.find(x => value.includes(x))
    setsports(filtered)

  } 

  return (
  
    
    <>
    <div className="Home">
      
      <Header />
      <div className="bg">
      <img src={bg} alt="background" />
      <p className="bg-title1 animate__animated animate__backInRight" >Tu es sportif et tu veux continuer à t'entrainer quand tu pars en vacances ?</p>
      <p className="bg-title2">Tu es veux partager tes expériences sportives à la communauté de OnSporters ?</p>
      </div>

      <Form>
      <h1 className="">Rechercher des activités</h1>
 <Form.Group widths='equal'>
<Form.Select
placeholder='Sélectionner un ou plusieurs sports'
fluid
multiple
options={sports}
onChange={handleChange.bind(this)}

/>
<Form.Select
placeholder='Sélectionne un département'
fluid
options={sports}

/>
<Form.Select
placeholder='Sélectionner une ville'
fluid
options={sports}

/>
</Form.Group>
</Form>  

      <Filtered sports={sportItems} />
      <Footer />
    </div>
  
  </>
  );
}

export default Home;
