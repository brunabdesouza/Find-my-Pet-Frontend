import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PETSHOW_BASE_URL = 'http://localhost:3000';

const PetDetails = (props) => {

const [petInfo, setPetInfo] = useState( {} );


useEffect( () => {

  axios.get(`${PETSHOW_BASE_URL}/pets/${props.match.params.id}`)
  .then( (res) => {
    console.log('pets', res.data );
    setPetInfo(res.data);
  })
  .catch( console.warn);

}, [props.match.params.id]);


  return (
    <div>
      <ul>
        <span>Name: </span>
        <li>{petInfo.name}</li>
        <img src={petInfo.image} alt="pet"/>
        <span>Age: </span>
        <li>{petInfo.age}</li>
        <li className="myFontSize">{petInfo.description}</li>
        <span>Desexed: </span>
        <li>{petInfo.desexed}</li>
        <span>Vaccinated: </span>
        <li>{petInfo.vaccinated}</li>
        <span>Wormed: </span>
        <li>{petInfo.wormed}</li>
      </ul>
    </div>
  )

}; // PetDetails

export default PetDetails;


// <li>{p.adoption_fee}</li>
// <li>{p.desexed}</li>
// <li>{p.vaccinated}</li>
// <li>{p.wormed}</li>
