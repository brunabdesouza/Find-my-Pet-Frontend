import React, {useState} from 'react';
import '../App.css';

import { HashRouter as Router, Link } from 'react-router-dom';

const Dropdown = () => {

  const [petsClick, setPetsClick] = useState(false);

  const handlePetClick = () => setPetsClick(!petsClick);


  return (

    <div>
      <Router>
        <ul
          onClick={handlePetClick}
          className={ petsClick ? 'dropdown-menu clicked' : 'dropdown-menu'}>
          { dropdownPets.map((item, index) => (
            <li key={index}>
              <Link
                className={item.className}
                to={item.path}
                onClick={ () => setPetsClick(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Router>
    </div>
  ); // return

}; // Dropdown

const dropdownPets = [
  {
    title: 'Dogs',
    path: '/pets/dogs',
    className: 'dropdown-link'
  },
  {
    title: 'Cats',
    path: '/pets/cats',
    className: 'dropdown-link'
  }

]; // dropdownPets



export default Dropdown;
