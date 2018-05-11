import React from 'react';

import './Person.css';

// Using ES6

// lowercase person for the function name, usually same as file name.
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
}

export default person;