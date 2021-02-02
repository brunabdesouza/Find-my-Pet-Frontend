import React from 'react';
// import ShelterSearch from './ShelterSearch';
import SearchShow from './SearchShow';
import NavBar from './NavBar';
import MainSearch from './MainSearch';

import {Route, /*Link*/ HashRouter as Router} from 'react-router-dom';


class FindMyPetApp extends React.Component {

  render(){
    return (
      <div>
        <NavBar />
        <Router>
          <Route path="/search" component={MainSearch} />
          <Route exact path="/results/:animalType/:location" component={SearchShow} />
        </Router>
      </div>
    )


  }; // render




}; // class FindMyPetApp

export default FindMyPetApp
