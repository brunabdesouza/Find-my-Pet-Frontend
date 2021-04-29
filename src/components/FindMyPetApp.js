import React, { useState, useEffect } from 'react';
import SheltersIndex from './SheltersIndex';
import ShelterDetail from './ShelterDetail';
import SearchShow from './SearchShow';
import NavBar from './NavBar';
import MainSearch from './MainSearch';
import PetsIndex from './PetsIndex';
import PetDetails from './PetDetails';
import Login from './Login';
import Signup from './Signup';
import UserProfile from './UserProfile';
import axios from 'axios';
import {Route, /*Link*/ HashRouter as Router} from 'react-router-dom';
import { config } from './Constants';

// const USER_BASE_URL = 'http://localhost:3000';

const FindMyPetApp = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

  const getUser = () => {

    axios.get(`${config.url.API_URL}/users/current`,)
    .then( (res) => {
      // console.log('User', res.data);
      setCurrentUser(res.data);
    })
    .catch( console.warn);

  }; // getUser

    useEffect( () => {
      let jwt = localStorage.getItem("jwt");
      if (jwt){
        let token = "Bearer " + jwt;

        axios.defaults.headers.common['Authorization'] = token;
        getUser();
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
          <Route exact path="/login" render={ (props) => <Login getUser={ getUser } {...props} /> } />
          <Route exact path="/users" component={Signup} />
          <Route exact path="/users/current" component={UserProfile} />
          <Route exact path="/shelters/search/:location/:animal_type/:radius" component={SearchShow} />
          <Route exact path="/shelters" component={SheltersIndex} />
          <Route exact path="/shelters/:id" component={ShelterDetail} />
          <Route exact path="/pets" component={PetsIndex} />
          <Route exact path="/pets/:id" component={PetDetails} />
        </Router>
      </div>
    )

}; // class FindMyPetApp

export default FindMyPetApp;
