import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, HashRouter as Router} from 'react-router-dom';

const USER_BASE_URL = 'http://localhost:3000';

const Login = (props) => {

  const [userEmail, setUserEmail] = useState( '' );
  const [userPassword, setUserPassword] = useState( '' );

  const handleSubmit = (ev) => {

    const request = { 'email': userEmail, 'password': userPassword };

    axios.post(`${USER_BASE_URL}/user_token`, {auth: request})
    .then( (res) => {
      localStorage.setItem("jwt", res.data.jwt)
      axios.defaults.headers.common['Authorization'] = 'Bearer' + res.data.jwt
      console.log('user', res.data);
      props.history.push(`/pets`)
    })
    .catch( console.warn );

  }; // handleSubmit

  return (
    <div>
      <form className="userForm">
        <label>Email: </label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={ (ev) => setUserEmail(ev.target.value)}>
        </input>
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={ (ev) => setUserPassword(ev.target.value)}>
        </input>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )




}; // Login

export default Login;
