import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    
    <div>
      <Link to='post' className='NavBar-link'>POST</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to=''
        className='NavBar-link'
        onClick={props.handleLogout}
      >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <span className='NavBar-welcome'>VIEW</span>
    </div>
    
    
    :
    
    <div className='NavBar-box'>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
    
      <Link to='/signup' className='NavBar-link'>NEW USER</Link>
    </div>;
   
  

  return (
    <div>
    <div className='NavBar'>
      {nav}
      
    </div>
    <hr className="navLine"/>
    </div>
  );
};

export default NavBar;