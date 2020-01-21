import React from 'react' ;

const ShowPage = props => {
    let showPage = props.user ?
        <div>
            <h1>Hi</h1>
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