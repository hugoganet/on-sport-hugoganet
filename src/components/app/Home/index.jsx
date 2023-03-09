/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Form, Grid, Image,
} from 'semantic-ui-react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import lax from 'lax.js';

import './style.scss';

import Header from '../Header';
import Footer from '../Footer';

import Filtered from '../FilteredActivities';

import bg from '../../../assets/On.gif';
import Step1 from '../../../assets/step1_img.png';
import Step2 from '../../../assets/step2_img.png';
import Step3 from '../../../assets/step3_img.png';
import Step4 from '../../../assets/step4_img.png';
import Step1_title from '../../../assets/step1_title.png';
import Step2_title from '../../../assets/step2_title.png';
import Step3_title from '../../../assets/step3_title.png';
import Step4_title from '../../../assets/step4_title.png';

import 'animate.css';
import sportsList from '../../../datas/sports';
import FilterActivities from '../../../utils'; // You can also use <link> for styles

function Home() {
  const [ListActivities, setListActivities] = React.useState([]);
  const [UnFilteredList, setUnFilteredList] = React.useState([]);
  const [listLocation, setListLocation] = React.useState([]);
  const [filteredSports, setFilteredSports] = React.useState([]);
  const [filteredDepartments, setFilteredDepartments] = React.useState([]);
  const [operator, setOperator] = React.useState('');
  AOS.init();
  React.useEffect(
() => {
    axios.get('http://ronaldfk-server.eddi.cloud:8080/api/activity', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then(
(response) => { setListActivities(response.data); setUnFilteredList(response.data); },
).catch((error) => {
      console(error);
    });

  axios.get('http://ronaldfk-server.eddi.cloud:8080/api/location/getall').then(
    (response) => setListLocation(response.data),
    ).catch((error) => {
        console(error);
      });
},
   [],
);

const departmentList = [...new Set(listLocation.map((item) => item.department))];

const departmentOptions = departmentList.map((elem) => ({
    key: elem,
    text: elem,
    value: elem,
  }));

  const handleSelectSport = (e, { value }) => {
     const filters = {
      sportName: value,
    };
    let sportsSearched = FilterActivities(UnFilteredList, filters);
    setFilteredSports(sportsSearched);
if (value.length === 0 && filteredDepartments.length !== 0) {
  setListActivities(filteredDepartments);
  return;
}
    if (filteredDepartments.length === 0) {
      setListActivities(sportsSearched);
    } else if (operator === 'AND') {
      sportsSearched = FilterActivities(filteredDepartments, filters);
      setListActivities(sportsSearched);
     } else {
      sportsSearched = FilterActivities(UnFilteredList, filters);
 const filteredActivities = [...new Set([...sportsSearched, ...filteredDepartments].map((activity) => activity.id)),
    ].map((id) => [...sportsSearched, ...filteredDepartments].find((activity) => activity.id === id));
    setListActivities(filteredActivities);
     }
  };

  const handleSelectDepartement = (e, { value }) => {
    // eslint-disable-next-line max-len
    const filters = {
      locationDepartment: value,
    };
    let filteredDept = FilterActivities(UnFilteredList, filters);
    setFilteredDepartments(filteredDept);
    if (value.length === 0 && filteredSports.length !== 0) {
      setListActivities(filteredSports);
      return;
    }
    if (filteredSports.length === 0) {
      setListActivities(filteredDept);
    } else if (operator === 'AND') {
        filteredDept = FilterActivities(filteredSports, filters);
        setListActivities(filteredDept);
        } else {
          filteredDept = FilterActivities(UnFilteredList, filters);
 const filteredActivities = [
      ...new Set([...filteredSports, ...filteredDept].map((activity) => activity.id)),
    ].map((id) => [...filteredSports, ...filteredDept].find((activity) => activity.id === id));
    setListActivities(filteredActivities);
        }
 };
 const handleChange = (e, { value }) => {
  setOperator(value);
 };
   return (

     <div className="Home">

       <Header />
       <div className="bg">
         <img src={bg} alt="background" />
       </div>

       <Grid>
         <Grid.Column mobile={8} tablet={8} computer={2}>
           <Image src={Step1} data-aos="zoom-in" data-aos-offset="100" />
         </Grid.Column>
         <Grid.Column mobile={8} tablet={8} computer={2}>
           <Image src={Step1_title} data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="200" data-delay="500" />
         </Grid.Column>
         <Grid.Column mobile={8} tablet={8} computer={2}>
           <Image src={Step2} data-aos="zoom-in" data-aos-offset="300" />
         </Grid.Column>
         <Grid.Column mobile={8} tablet={8} computer={2} data-aos="zoom-in" data-aos-offset="400">
           <Image src={Step2_title} data-aos="zoom-in" data-aos-offset="600" />
         </Grid.Column>
         <Grid.Column mobile={8} tablet={8} computer={2}>

           <Image src={Step3} data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="500" />
         </Grid.Column>
         <Grid.Column mobile={8} tablet={8} computer={2}>
           <Image src={Step3_title} data-aos="zoom-in" data-aos-offset="600" />
         </Grid.Column>
         <Grid.Column mobile={8} tablet={8} computer={2}>
           <Image src={Step4} data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="700" />
         </Grid.Column>
         <Grid.Column mobile={8} tablet={8} computer={2}>
           <Image src={Step4_title} data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="800" />
         </Grid.Column>

       </Grid>

       <Form className="search_form">
         <h1 className="search_form_title">RECHERCHER DES ACTIVITÉS</h1>
         <Form.Group>
           <Form.Select
             width={8}
             placeholder="Sélectionner un ou plusieurs sports"
             fluid
             multiple
             options={sportsList}
               // eslint-disable-next-line react/jsx-no-bind
             onChange={handleSelectSport.bind(this)}
           />
           <Form.Radio
             width={2}
             label="ET"
             value="AND"
             checked={operator === 'AND'}
             onChange={handleChange}
           />
           <Form.Radio
             width={2}
             label="OU"
             value="OR"
             checked={operator === 'OR'}
             onChange={handleChange}
           />
           <Form.Select
             width={8}
             placeholder="Sélectionner un département"
             fluid
             multiple
             options={departmentOptions}
               // eslint-disable-next-line react/jsx-no-bind
             onChange={handleSelectDepartement.bind(this)}
           />
         </Form.Group>
       </Form>
       <Filtered ListActivities={ListActivities} />
       <Footer />
     </div>

   );
}

export default Home;
