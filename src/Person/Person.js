import React from 'react';
import './Person.css';

const person = (props) => {
    return ( 
        <div className="Person">
            <p onClick={props.click}> I'am a componnt person. My name is {props.name} and My age is {props.age}. </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    
    )
}

export default person;