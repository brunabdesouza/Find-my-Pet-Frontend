import React, { useState } from 'react';
// import axios from 'axios';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';

// const FIND_MY_PET_BASE_URL = 'http://localhost:/3000'

const MainSearch = (props) => {

  const [aTypeSearch, setATypeSearch] = useState( '' );
  const [locationSearch, setLocationSearch] = useState( '' );


  return (
    <div>
      <form>
        <label>Animal: </label>
        <input
          type="text"
          placeholder="cat or dog"
          onChange={ (ev) => setATypeSearch(ev.target.value)}
          >
        </input>
        <label>Location: </label>
        <input
          type="text"
          placeholder="near me"
          onChange={ (ev) => setLocationSearch(ev.target.value)}>
        </input>
        <button onClick={() => props.history.push(`/results/${aTypeSearch}/${locationSearch}`)}>Search</button>
      </form>
    </div>
  ) // return
}; // const MainSearch

export default MainSearch;
