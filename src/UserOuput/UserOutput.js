import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return(
        <div className='card'>
            <p>Some uther user text</p>
            <p>user name is: {props.userName}</p>
        </div>
    )
}

export default userOutput