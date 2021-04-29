import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from './Constants';

// const SHELTERSHOW_BASE_URL = 'http://localhost:3000';

const ShelterDetail = (props) => {

  const [shelterInfo, setShelterInfo] = useState( {} );

  useEffect( () => {

    axios.get(`${config.url.API_URL}/shelters/${props.match.params.id}`)
    .then( (res) => {
      console.log('shelter', res.data);
      setShelterInfo(res.data);
    })
    .catch( console.warn );

  }, [props.match.params.id]); // useEffect

  return (
    <div className="cards">
      <ul className="card">
        <span>Name: </span>
        <li>{shelterInfo.name}</li>
        <span>Address: </span>
        <li>{shelterInfo.address}</li>
        <span>Description: </span>
        <li className="myFontSize">{shelterInfo.description}</li>
      </ul>
    </div>
  )

}; // ShelterDetail

export default ShelterDetail;
