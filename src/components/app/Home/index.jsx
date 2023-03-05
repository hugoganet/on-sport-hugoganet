/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Form, Image, Grid, Segment, Label,
} from 'semantic-ui-react';
import axios from 'axios';

import './style.scss';

import Header from '../Header';
import Footer from '../Footer';

import Filtered from '../FilteredActivities';

import bg from '../../../assets/On.gif';
import Step1 from '../../../assets/step1.gif';
import Step2 from '../../../assets/step2.gif';
import Step3 from '../../../assets/step3.gif';
import 'animate.css';
import sportsList from '../../../datas/sports';
import FilterActivities from '../../../utils'; // You can also use <link> for styles

function Home() {
  const [ListActivities, setListActivities] = React.useState([]);
  const [UnFilteredList, setUnFilteredList] = React.useState([]);
  const [listLocation, setListLocation] = React.useState([]);
  const [filteredSports, setFilteredSports] = React.useState([]);
  const [filteredDepartments, setFilteredDepartments] = React.useState([]);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
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
  },
  axios.get('http://ronaldfk-server.eddi.cloud:8080/api/location/getall').then(
    (response) => setListLocation(response.data),
    ).catch((error) => {
        console(error);
      }),
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
    const sportsSearched = FilterActivities(UnFilteredList, filters);
    setFilteredSports(sportsSearched);
if (value.length === 0 && filteredDepartments.length !== 0) {
  setListActivities(filteredDepartments);
  return;
}
    if (filteredDepartments.length === 0) {
      setListActivities(sportsSearched);
    } else {
 const filteredActivities = [
      ...new Set([...sportsSearched, ...filteredDepartments].map((activity) => activity.id)),
    ].map((id) => [...sportsSearched, ...filteredDepartments].find((activity) => activity.id === id));
    setListActivities(filteredActivities);
}
  };

  const handleSelectDepartement = (e, { value }) => {
    // eslint-disable-next-line max-len
    const filters = {
      locationDepartment: value,
    };
    const filteredDept = FilterActivities(UnFilteredList, filters);
    setFilteredDepartments(filteredDept);
    if (value.length === 0 && filteredSports.length !== 0) {
      setListActivities(filteredSports);
      return;
    }
    if (filteredSports.length === 0) {
      setListActivities(filteredDept);
    } else {
 const filteredActivities = [
      ...new Set([...filteredSports, ...filteredDept].map((activity) => activity.id)),
    ].map((id) => [...filteredSports, ...filteredDept].find((activity) => activity.id === id));
    setListActivities(filteredActivities);
    }
 };
   return (

     <div className="Home">

       <Header />
       <div className="bg">
         <img src={bg} alt="background" />
       </div>

       <div className="steps_container">
         <div className="steps">
           <Grid columns={3}>
             <Grid.Row>
               <Grid.Column>
                 <Segment padded>
                   <Label attached="top" color="orange">INSCRIS-TOI</Label>
                   <Image src={Step1} />
                 </Segment>
               </Grid.Column>
               <Grid.Column>
                 <Segment padded>
                   <Label attached="bottom" color="orange">INSPIRE TOI DES EXPERIENCES DES AUTRES UTILISATEURS POUR PRATIQUER TES SPORTS FAVORIS</Label>
                   <Image src={Step2} />
                 </Segment>
               </Grid.Column>
               <Grid.Column>
                 <Segment padded>
                   <Label attached="top right" color="orange">PARTAGE A TON TOUR TES ENTRAINEMENTS</Label>
                   <Image src={Step3} />
                 </Segment>
               </Grid.Column>
             </Grid.Row>
           </Grid>
         </div>
       </div>

       <Form className="search_form">
         <h1 className="">Rechercher des activités</h1>
         <Form.Group widths="equal">
           <Form.Select
             placeholder="Sélectionner un ou plusieurs sports"
             fluid
             multiple
             options={sportsList}
            // eslint-disable-next-line react/jsx-no-bind
             onChange={handleSelectSport.bind(this)}
           />
           <Form.Select
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
       <h1>
         {' '}
         {userId}
         {token}
       </h1>
       <Footer />
     </div>
   );
}

export default Home;
