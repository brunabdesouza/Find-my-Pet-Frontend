import React, { useState } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import '../App.css';
import Dropdown from './Dropdown';

const NavBar = () => {

  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenuBar = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth > 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

    return (
      <div>
        <nav className="navbar">
          <Router>
            <Link to="/" className="navbar-logo">
              Find my Pet
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMenuBar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shelters" className="nav-links" onClick={closeMenuBar}>
                  Shelters
                </Link>
              </li>
              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                {dropdown && <Dropdown />}
                <Link to="/pets" className="nav-links" onClick={closeMenuBar}>
                  Pets <i className='fas fa-caret-down' />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-links" onClick={closeMenuBar}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </Router>
        </nav>
      </div>

    )// return


} // const NavBar


export default NavBar
