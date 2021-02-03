import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SEARCH_BASE_URL = 'http://localhost:3000';

const PetsIndex = (props) => {

  const [petsIndex, setPetsIndex] = useState( [] );

  useEffect( () => {

  axios.get(`${SEARCH_BASE_URL}/pets`)
  .then( (res) => {
    // console.log('data', res.data);
    setPetsIndex(res.data)
  })
  .catch(console.warn);

}, []);

  return (
    <div>
      <ul className="allSearchDisplay">
        {
          petsIndex.map( p => (
            <li className="searchDisplay"
            key={p.id}><strong>{p.name}</strong>
          <img src={p.image} alt="pet"/>
            <li>{p.age}</li>
            <li>{p.sex}</li>
            <li className="myFontSize">{p.description}</li>
            <li>{p.adoption_fee}</li>
            <li>{p.desexed}</li>
            <li>{p.vaccinated}</li>
            <li>{p.wormed}</li>
            </li>
          ))
        }
      </ul>
    </div>
  )



}; // PetsIndex

export default PetsIndex;
