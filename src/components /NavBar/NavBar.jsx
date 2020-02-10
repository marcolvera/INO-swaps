import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    
    <div>
      <Link to='post' className='NavBar-l'>POST</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to=''
        className='NavBar-link'
        onClick={props.handleLogout}
      >LOG OUT</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='profile' className='NavBar-l'>PROFILE</Link>
    </div>
    
    
    :
    
    <div className='NavBar-box'>
     
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>NEW USER</Link>
    </div>;
   
  

  return (
    <div>
    <div className='NavBar'>
      
      {nav}
    </div>
     
    </div> 
    
  );
};

export default NavBar;