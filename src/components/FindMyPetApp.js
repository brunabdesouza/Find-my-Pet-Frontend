import React, { useState, useEffect } from 'react';
import SheltersIndex from './SheltersIndex';
import SearchShow from './SearchShow';
import NavBar from './NavBar';
import MainSearch from './MainSearch';
import PetsIndex from './PetsIndex';
import Login from './Login';
import UserProfile from './UserProfile';
import axios from 'axios';
import {Route, /*Link*/ HashRouter as Router} from 'react-router-dom';

const USER_BASE_URL = 'http://localhost:3000';

const FindMyPetApp = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

    useEffect( () => {
      let jwt = localStorage.getItem("jwt");
      if (jwt){
        let token = "Bearer " + jwt;

        axios.defaults.headers.common['Authorization'] = token;
        axios.get(`${USER_BASE_URL}/users/current`,)
        .then( (res) => {
          console.log('User', res.data);
          setCurrentUser(res.data);
        })
        .catch( console.warn);
      }
    }, []); // useEffect

    const handleLogout = () => {
      setCurrentUser({ currentUser: undefined })
      localStorage.removeItem("jwt");
      axios.defaults.headers.common['Authorization'] = undefined;

    }; // handleLogout

    return (
      <div>

        <Router>
          <Route  render={ (props) => <NavBar user={ currentUser } handleLogout={ handleLogout } {...props} />} />
          <Route  component={MainSearch} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/userProfile" component={UserProfile} />
          <Route exact path="/shelters/search/:location/:animal_type/:radius" component={SearchShow} />
          <Route exact path="/shelters" component={SheltersIndex} />
          <Route exact path="/pets" component={PetsIndex} />
        </Router>
      </div>
    )

}; // class FindMyPetApp

export default FindMyPetApp
