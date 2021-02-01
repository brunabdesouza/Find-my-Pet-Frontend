import React from 'react';
import ShelterSearch from './ShelterSearch';
import ShelterShow from './ShelterShow';
import NavBar from './NavBar';

import {Route, /*Link*/ HashRouter as Router} from 'react-router-dom';


class FindMyPetApp extends React.Component {

  render(){
    return (
      <div>
        <NavBar />
        <Router>
          <Route exact path="/" component={ShelterSearch} />
          <Route exact path="/shelters/:name" component={ShelterShow} />
        </Router>
      </div>
    )


  }; // render




}; // class FindMyPetApp

export default FindMyPetApp
