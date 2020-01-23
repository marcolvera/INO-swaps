import React from 'react' ;
import './ShowPage.css'




  



const ShowPage = props => {
    const shiftRows = props.shifts.map(shift =>(
        <div className="spacingContainer">
    {/* <div className="tableContainer"> */}
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
      
     {/* </div> */}
    </div> 


      
    ));
    let showPage = props.user ?
        <div>
        <div>
        {/* <span><img src="https://i.imgur.com/q3mUJKL.png" alt=""/>   */}
        <h1 className="welcomeUser"><span><img className="palm" src="https://i.imgur.com/TEQNHz7.png" alt=""/></span> Welcome, {props.user.name}</h1>
        <hr className="nameLine"/>
        <hr className="nameLine2"/>
        </div> 
        {props.shifts.length <= 0 &&
        <h2 className="noShiftText">No shifts currently at this time</h2>} 
        
        {props.shifts.length > 0 &&
        <div>{shiftRows}</div>}
        </div>
        :
        <div>

        </div>
    
    


    return (
       <div>
            {showPage}
        </div>
    )
}
       

export default ShowPage;
           

       