import React from 'react';
import NavBar from '../../components /NavBar/NavBar';
import ShowPage from '../ShowPage/ShowPage'


const Homepage = props => {
    return (
        <div>
            <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            />
            <ShowPage 
            user={props.user} 
            shifts={props.shifts}
            handleDelete={props.handleDelete}
            />
        </div>
    )
}
            
            
        

export default Homepage;