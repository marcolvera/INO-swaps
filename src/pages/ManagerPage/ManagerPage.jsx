import React, { Component } from "react"
import {Link} from 'react-router-dom'
import './ManagerPage.css'
import ManagerLogin from '../../components /ManagerLogin/ManagerLogin'


const ManagerPage = props => {
    return(
        <div>
            <ManagerLogin />
        </div>
    )
}

export default ManagerPage;

