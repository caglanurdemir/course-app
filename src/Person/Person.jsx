import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm a person broooo. and I am {props.name}.I am {props.age} years old :D:D:D:D..</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;