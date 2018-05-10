import React from 'react';

// Using ES6

// lowercase person for the function name, usually same as file name.
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
        )
}

export default person;