import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
import ShiftList from '../../components /ShiftList/ShiftList'



const ProfilePage = props => {
    const filterPost = props.shifts.filter(shift => shift.owner.includes(props.user._id)).map(shift => (
        <div className="spacingContainer">
        <div className="tableContainer">
                <button className="delButton" onClick={() => props.handleDeleteShift(shift._id)}>Remove</button>
             
               
                 <table>
                 <thead>
                 <tr>
                         <th>Date:</th>
                         <th>Time:</th>
                         <th>Comment:</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>{shift.date}</td>
                         <td>{shift.time}</td>
                         <td>{shift.comment}</td>
                        
                     </tr>
                 </tbody>
                 </table>
                
            </div>  
             </div>
      ))
  
      return ( 
        <div>
            <div className="linkDiv"><Link className="link" to="/home">Home</Link></div>
            <h1 className="post">Your Current Posts</h1>
            <div className="postDiv">
                {filterPost}
            </div>
                
        </div>
      )}
  
   
   


    

      
  
      


    export default ProfilePage;
      
      