import React, {Component} from 'react';
import './AdminPage.css';
import AdminNavBar from '../../components /AdminNavBar/AdminNavBar';
import AdminMenu from '../../components /AdminMenu/AdminMenu';
import managerService from '../../utils/managerService';


const AdminPage = props => {
    return(
        <div>
            <AdminNavBar />
            <AdminMenu />
        </div>
    )
}

export default AdminPage;


