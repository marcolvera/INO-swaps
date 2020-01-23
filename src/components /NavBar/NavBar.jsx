import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    
    <div>
      <Link to='post' className='NavBar-link'>POST</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to=''
        className='NavBar-link'
        onClick={props.handleLogout}
      >LOG OUT</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='profile' className='NavBar-link'>PROFILE</Link>
    </div>
    
    
    :
    
    <div className='NavBar-box'>
      {/* <img className="logo" src="https://i.imgur.com/XEXkZKq.png" alt=""/> */}
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
    
      <Link to='/signup' className='NavBar-link'>NEW USER</Link>
    </div>;
   
  

  return (
    <div>
    <div className='NavBar'>
      {/* <img className="logo" src="https://i.imgur.com/XEXkZKq.png" alt=""/> */}
      {nav}
    </div>
     
    </div> 
    
  );
};

export default NavBar;