import React, { useState } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import '../App.css';


const NavBar = (props) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenuBar = () => setClick(false);


    return (
      <div>
        <nav className="navbar">
          <Router>
            <Link to="/" className="navbar-logo">
              Find my Pet
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            <ul className={click ? 'fas fa-times' : 'fas fa-bars'} />
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
              <li className="nav-item">
                <Link to="/pets" className="nav-links" onClick={closeMenuBar}>
                  Pets
                </Link>
              </li>
                <li className="nav-item">
                  <Link to="/users" className="nav-links" onClick={closeMenuBar}>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user_token" className="nav-links" onClick={closeMenuBar}>
                    Login
                  </Link>
                </li>
              {
                props.user !== undefined
                ?
                (
                  <>
                  <li className="nav-item welcome-links">Welcome, {props.user.name}</li>
                  <li><Link to="/pets" className="nav-links"></Link></li>
                  <li className="nav-item"><Link to="/"
                    className="nav-links"
                     onClick={props.handleLogout}>Logout</Link></li>
                  </>
                )
                :
                (
                  <li className="nav-item"><Link to="/user_token"></Link></li>
                )
              }
            </ul>
          </Router>
        </nav>
      </div>

    )// return

} // const NavBar


export default NavBar
