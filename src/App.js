import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App. And I will continue this tomorrow.</h1>
        <p>This is the fam:</p>
        <Person name="Josh" age="22"/>
        <Person name="Justin" age="19">My Hobbies: Basketball</Person>
        <Person name="Janella" age="27"/>
        <Person name="Jorel" age="32"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
