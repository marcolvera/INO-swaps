import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
import ShiftList from '../../components /ShiftList/ShiftList'



const ProfilePage = props => {
    const filterPost = props.shifts.filter(shift => shift.owner.includes(props.user._id)).map(shift => (
        
        <div >
                 <table>
                 <thead>
                 <tr>
                         <th>Date:</th>
                         <th>Time:</th>
                         <th>Level:</th>
                         <th>Remove:</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>{shift.date}</td>
                         <td>{shift.time}</td>
                         <td>{shift.level}</td>
                        <td className="tableBtn"><button className="delButton" onClick={() => props.handleDeleteShift(shift._id)}>x</button></td>
                        
                     </tr>
                 </tbody>
                 </table>
                
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
      
      