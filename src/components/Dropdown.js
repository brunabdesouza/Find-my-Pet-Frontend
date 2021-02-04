import React, {useState} from 'react';
import '../App.css';

import { HashRouter as Router, Link } from 'react-router-dom';

const Dropdown = () => {

  const [userClick, setUserClick] = useState(false);

  const handleUserClick = () => setUserClick(!userClick);


  return (

    <div>
      <Router>
        <ul
          onClick={handleUserClick}
          className={ UserClick ? 'dropdown-menu clicked' : 'dropdown-menu'}>
          { dropdownUsers.map((item, index) => (
            <li key={index}>
              <Link
                className={item.className}
                to={item.path}
                onClick={ () => setUserClick(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Router>
    </div>
  ); // return

}; // Dropdown

const dropdownUsers = [
  {
    title: 'Login',
    path: '/login',
    className: 'dropdown-link'
  },
  {
    title: 'Logout',
    path: '/login',
    className: 'dropdown-link'
  }

]; // dropdownPets



export default Dropdown;
