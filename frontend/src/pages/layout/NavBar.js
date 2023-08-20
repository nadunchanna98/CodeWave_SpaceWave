import React, { useState } from 'react';
import './NavBar.css';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const [clicked, setClicked] = useState(false);

  const toggleIcon = () => {
    setClicked(!clicked);
  }

  return (
    <div>
      <div className='navbar'>

        <div className={clicked ? 'desktop-nav' : 'desktop-nav active-mobile-nav'}>
          <div className='logo logo-desktop'>
            <a href='/' className='logo-link'>SpaceWave</a>
          </div>
          <div className='main-menu'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <NavLink to="/booking" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Bookings</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/my-trips" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>My Trips</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/planets" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Planets</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/plans" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Plans</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/about" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>About</NavLink>
              </li>
            </ul>
          </div>
          <div className='login-menu'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <NavLink to="/signup" className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }>Sign Up</NavLink>
              </li>
              <li className='nav-item'>
                <a href='/login' className='nav-link login-button'>Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div id='mobile'>
          {clicked ? <MdClose className='close-icon icon' onClick={toggleIcon} /> : <MdMenu className='menu-icon icon' onClick={toggleIcon} />}
          <div className='logo'>
            <a href='/' className='logo-link'>SpaceWave</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
