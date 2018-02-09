import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 27},
      {name: 'Mike', age: 22},
      {name: 'Pat', age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState({    
      persons: [
        {name: 'John', age: 21},
        {name: 'Mike', age: 21},
        {name: 'Pat', age: 21}
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        {name: 'John', age: 21},
        {name: event.target.value, age: 21},
        {name: 'Frank', age: 2}
      ]
    })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })} 
        </div>    
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    </div>
   );
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App?'));
  }
}

export default App;
