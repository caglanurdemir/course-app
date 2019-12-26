import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state = {
    persons: [
      { name: 'Çağla', age: 23 },
      { name: 'Mustafa', age: 25 }
    ],
    otherStates: [
      { age: 29 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   console.log('successfull Çağla:D:D:D');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 23 },
  //       { name: 'Mustafa', age: 25 }
  //     ]
  //   })
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Çağla', age: 35 },
        { name: event.target.value, age: 35 },
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }


  render() {
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Çağla'nın sitesi yeye jsx yaziiyitititti.</h1>
        <button onClick={this.togglePersonsHandler}>TIKLA BEBEYİM BURAYA</button>
        {persons}
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Çağla\'nın sitesi yey....'))
  }

}

export default App;