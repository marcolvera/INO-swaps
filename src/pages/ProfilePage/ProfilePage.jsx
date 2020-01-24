import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './ProfilePage.css';
import * as moment from 'moment'




const ProfilePage = props => {
    const filterPost = props.shifts.filter(shift => shift.owner.includes(props.user._id)).map(shift => (
        
        <div >
                 <table>
                 <thead>
                 <tr>
                         <th>Date:</th>
                         <th>Time:</th>
                         <th>Level:</th>
                         <th className="removeOrEdit">Remove:</th>
                         <th className="removeOrEdit">Edit:</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td><moment>{moment(shift.date).format('MMMM Do YYYY')}</moment></td>
                         <td>{shift.time}</td>
                         <td>{shift.level}</td>
                        <td className="tableBtn"><button className="delButton" onClick={() => props.handleDeleteShift(shift._id)}>x</button></td>
                        <td className="tableLink"><Link className="linkColor"
                            to={{
                                pathname: '/edit',
                                state: {shift}
                            }}
                        >Edit</Link></td>
                     </tr>
                 </tbody>
                 </table>
                
            </div>  
             ))
             let profilePage = props.user ?
             <div>
                {filterPost.length <= 0 &&
                <h2 className="noShiftText">No Posts</h2>} 
        
                {filterPost.length > 0 &&
        
            <div>
            <h1 className="shiftLabel">Your Posts:</h1>
            {filterPost}
            </div>}
             </div>
            :
            <div></div>
  
      return ( 
        <div>
            <div className="linkDiv"><Link className="link" to="/home">Home</Link></div>
            
            <div className="postDiv">
                {profilePage}
            </div>

        </div>
      )}
                
  
   
   


    

      
  
      


    export default ProfilePage;
      
      