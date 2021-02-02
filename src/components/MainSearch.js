import React, { useState } from 'react';
import '../App.css';
// import axios from 'axios';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';

// const FIND_MY_PET_BASE_URL = 'http://localhost:/3000'

const MainSearch = (props) => {

  const [aTypeSearch, setATypeSearch] = useState( '' );
  const [locationSearch, setLocationSearch] = useState( '' );
  const [radiusSearch, setRadiusSearch] = useState( '5' );


  return (
    <div>
      <form className="main-form">
        <label>Animal: </label>
        <input
          type="text"
          placeholder="cat or dog"
          onChange={ (ev) => setATypeSearch(ev.target.value)}
          >
        </input>
        <label>My Location: </label>
        <input
          type="text"
          placeholder="Ryde"
          onChange={ (ev) => setLocationSearch(ev.target.value)}>
        </input>
        <select className="select-option" onChange={ (ev) => setRadiusSearch(ev.target.value)}>
          <option value="5">5km</option>
          <option value="10">10km</option>
          <option value="15">15km</option>
          <option value="20">20km</option>
        </select>
        <button onClick={() => props.history.push(`/shelters/search/${locationSearch}/${aTypeSearch}/${radiusSearch}`)}>Search</button>
      </form>
    </div>
  ) // return
}; // const MainSearch

export default MainSearch;
