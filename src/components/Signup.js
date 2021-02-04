import React, { useState } from 'react';
import axios from 'axios';

const SIGNUP_BASE_URL = 'http://localhost:3000';

const Signup = (props) => {

  const [userType, setUserType] = useState( '' );
  const [userName, setUserName] = useState( '' );
  const [userEmail, setUserEmail] = useState( '' );
  const [userPassword, setUserPassword] = useState( '' );
  const [userConfPassword, setUserConfPassword] = useState( '' );

  const handleSubmit = (ev) => {

    const request = { 'name': userName, 'email': userEmail, 'password': userPassword, 'password_confirmation': userConfPassword, 'user_type': userType};

    axios.post(`${SIGNUP_BASE_URL}/users`, {user: request})
    .then( (res) => {
      console.log('new user', res.data);
      props.history.push(`/pets`)
    })
    .catch( (err) => {
      console.log("error", err);
    })

  }; // handleSubmit


  return (
    <div>
      <form className="main-form">
        <select className="select-option" onChange={ (ev) => setUserType(ev.target.value)}>
          <option value="user">user</option>
          <option value="shelter">shelter</option>
        </select>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={ (ev) => setUserName(ev.target.value)}>
        </input>
        <label>Email: </label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={ (ev) => setUserEmail(ev.target.value)}>
        </input>
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={ (ev) => setUserPassword(ev.target.value)}>
        </input>
        <label>Confirm Password: </label>
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={ (ev) => setUserConfPassword(ev.target.value)}>
        </input>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>

  )

}; // Signup

export default Signup;
