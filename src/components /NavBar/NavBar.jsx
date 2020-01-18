import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link'>Profile</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to=''
        className='NavBar-link'
        onClick={props.handleLogout}
      >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div className='NavBar-box'>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
    
      <Link to='/signup' className='NavBar-link'>NEW USER</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;