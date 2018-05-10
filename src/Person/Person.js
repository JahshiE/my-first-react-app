import React from 'react';

// Using ES6

// lowercase person for the function name, usually same as file name.
const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
}

export default person;