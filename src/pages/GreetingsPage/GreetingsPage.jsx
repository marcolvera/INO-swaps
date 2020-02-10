import React, { Component } from 'react';
import NavBar from '../../components /NavBar/NavBar';


import './GreetingsPage.css'

class GreetingsPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="subDiv">
                    <h3 className="subText">Post a shift &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Take a shift</h3>
                </div>
            </div>
        )
    }
}
             
              

export default GreetingsPage;