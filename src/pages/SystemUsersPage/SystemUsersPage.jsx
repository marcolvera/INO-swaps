import React from 'react';
import {Link} from 'react-router-dom';
import './SystemUsersPage';

const SystemUsersPage = props => {
    const allUsers = props.users.map(user =>(
    <h4>{user.name}</h4>
    ))
    return(
        <div>
            <div>

            {allUsers}
            </div>
        </div>
    )
}

export default SystemUsersPage;