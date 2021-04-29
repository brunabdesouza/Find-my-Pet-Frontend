import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from './Constants';
// import { Link } from 'react-router-dom';

// const SEARCH_BASE_URL = 'http://localhost:3000';

const PetsIndex = (props) => {

  const [petsIndex, setPetsIndex] = useState( [] );

  useEffect( () => {

  axios.get(`${config.url.API_URL}/pets`)
  .then( (res) => {
    // console.log('data', res.data);
    setPetsIndex(res.data)
  })
  .catch(console.warn);

}, []);

  return (
    <div>
      <ul className="cards">
        {
          petsIndex.map( p => (
            <li
              key={p.id}
              className="card"
              onClick={ () => props.history.push(`/pets/${p.id}`)}>
            <img src={p.image} alt="pet"/>
            <strong>{p.name}</strong>
              Age:
            <li>{p.age}</li>
              Sex:
            <li>{p.sex}</li>
            <li className="myFontSize">{p.description}</li>
            </li>
          ))
        }
      </ul>
    </div>
  )



}; // PetsIndex

export default PetsIndex;
