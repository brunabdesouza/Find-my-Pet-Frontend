import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PROF_BASE_URL = 'http://localhost:3000';

const UserProfile = (props) => {

  const [userProfile, setUserProfile] = useState( '' );

  useEffect( () => {
    let jwt = localStorage.getItem("jwt");
    if (jwt){
      let token = "Bearer " + jwt;

      axios.defaults.headers.common['Authorization'] = token;
      axios.get(`${PROF_BASE_URL}/users/current`,)
      .then( (res) => {
        console.log('User', res.data);
        setUserProfile(res.data);
      })
      .catch( console.warn);
    }
  }, []); // useEffect


  return (
    <div>
      <h2>Hello {userProfile.name}</h2>
    </div>
  )

}; // userProfile

export default UserProfile;
