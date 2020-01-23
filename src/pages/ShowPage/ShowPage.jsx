import React from 'react' ;
import './ShowPage.css'




  



const ShowPage = props => {
    const shiftRows = props.shifts.map(shift =>(
        
    
                <table>
        
            <tr>
                <th>Date:</th>
                <th>Time:</th>
                <th>Level:</th>
            </tr>
    
        
            <tr>
                <td>{shift.date}</td>
                <td>{shift.time}</td>
                <td>{shift.level}</td>
                
            </tr>
        
        </table>
      

    


      
    ));
    let showPage = props.user ?
        <div>
        <div>
        
        <h1 className="welcomeUser"><span><img className="palm" src="https://i.imgur.com/TEQNHz7.png" alt=""/></span> Welcome, {props.user.name}</h1>
        <hr className="nameLine"/>
        <hr className="nameLine2"/>
        </div> 
        {props.shifts.length <= 0 &&
        <h2 className="noShiftText">No shifts currently at this time</h2>} 
        
        {props.shifts.length > 0 &&
        
        <div>
            <h1 className="shiftLabel">Available Shifts:</h1>
            {shiftRows}
        </div>}
        </div>
        :
        <div>

        </div>
    
    


    return (
       <div>
           
            <div>

           {showPage}
           </div>
            
        </div>
    )
}
       

export default ShowPage;
           

       