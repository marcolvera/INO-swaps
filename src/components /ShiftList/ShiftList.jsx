import React from 'react';
import {Link} from 'react-router-dom';


function ShiftList({shift}) { 
    return (
      <div className='panel panel-default'>

        <div className='panel-footer PuppyListItem-action-panel'>

          <Link
            className='btn btn-xs btn-warning'
            to={{
              pathname: '/edit',
              state: {shift}
            }}
          >
            EDIT
          </Link>

        </div>
      </div>
    );
  }
  
  export default ShiftList;