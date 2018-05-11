import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Josh', age: 22},
      { name: 'Justin', age: 19},
      { name: 'Janella', age: 27},
      { name: 'Jorel', age: 31}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Joshua";
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Justin Matthew', age: 19},
        { name: 'Janella', age: 27},
        { name: 'Jorel', age: 31}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Joshua', age: 22},
        { name: event.target.value, age: 19},
        { name: 'Janella', age: 27},
        { name: 'Jorel', age: 32}
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App. And I will continue this tomorrow.</h1>
        <p>This is the fam:</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Josh!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Josh!')}
          changed={this.nameChangedHandler} >My Hobbies: Basketball</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
