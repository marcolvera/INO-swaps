import React from 'react';
import {Link} from 'react-router-dom';
import './AdminMenu.css'


const AdminMenu = props => {
    return(
        <div>
            <div id='menuDiv'>
                <div>
                    <Link className='menuLink'>
                        <img className='menuImg' src="https://i.imgur.com/9tDnrDy.png" alt=""/>
                        <p>Add a Manager</p>
                    </Link>
                </div>
                <div>
                    <Link className='menuLink'>
                        <img className='menuImg' src="https://i.imgur.com/0oM8cvM.png" alt=""/>
                        <p>View all Users</p>
                    </Link>
                </div>
                <div>
                    <Link className="menuLink">
                        <img className='menuImg' src='https://i.imgur.com/gljg5WK.png' alt=""/>
                        <p>View all Approved Shifts</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default AdminMenu;