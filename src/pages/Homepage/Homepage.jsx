import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components /NavBar/NavBar';
import ShowPage from '../ShowPage/ShowPage'

const Homepage = props => {
    return (
        <div>
            <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            />
            <ShowPage user={props.user} />
        </div>
    )
}
            
        

export default Homepage;