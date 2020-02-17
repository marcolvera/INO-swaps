import React from 'react';
import {Link} from 'react-router-dom';
import './AdminNavBar.css';

const AdminNavBar = props => {
    return(
        <div>
            <div id='adminNav'>
                <Link id='adminLogout' to='/admin/login'>Log Out</Link>
            </div>
        </div>
    )
};

export default AdminNavBar;

