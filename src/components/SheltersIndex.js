import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from './Constants';

// const SEARCH_BASE_URL = 'http://localhost:3000';

const SheltersIndex = (props) => {

  const [allSheltersIndex, setAllSheltersIndex] = useState( [] );


  useEffect( () => {

    axios.get(`${config.url.API_URL}/shelters`)
    .then( (res) => {
      setAllSheltersIndex(res.data)
    })
    .catch( console.warn );

  }, []); // useEffect

  return (
    <div>
      <ul className="cards">
        {
          allSheltersIndex.map( s => (
            <li
              className="card"
              key={s.id}
              onClick={ () => props.history.push(`/shelters/${s.id}`)}
              ><strong>{s.name}</strong>
            <li>{s.address}</li>
            <li className="myFontSize">{s.description}</li>
            </li>
          ))
        }
      </ul>
    </div>
  )

} // ShelterSearch

export default SheltersIndex;
