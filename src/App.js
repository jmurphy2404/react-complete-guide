import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 27},
      {name: 'Mike', age: 22},
      {name: 'Pat', age: 25}
    ]
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

  render() {
   return (
     <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working</p>
       <button onClick={this.switchNameHandler}>Switch Name</button> 
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Max!')} 
        changed={this.nameChangedHandler} >My Hobbies: Sleep</Person>
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
     </div>
   );
   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App?'));
  }
}

export default App;
