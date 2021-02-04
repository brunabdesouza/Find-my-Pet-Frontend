import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SHELTERSHOW_BASE_URL = 'http://localhost:3000';

const ShelterDetail = (props) => {

  const [shelterInfo, setShelterInfo] = useState( {} );

  useEffect( () => {

    axios.get(`${SHELTERSHOW_BASE_URL}/shelters/${props.match.params.id}`)
    .then( (res) => {
      console.log('shelter', res.data);
    })
    .catch( console.warn );

  }, [])

  return (
    <div>

    </div>
  )

}; // ShelterDetail

export default ShelterDetail;
