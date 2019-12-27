import React from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person'
// import Radium from 'radium';

class App extends React.Component {
  state = {
    persons: [
      { id: 'asdaafsd', name: 'Çağla', age: 23 },
      { id: 'dsfdsfg', name: 'Mustafa', age: 25 }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // OR USING OBJECT.ASSIGN

    this.setState({
      // persons: [
      //   { name: 'Çağla', age: 35 },
      //   { name: event.target.value, age: 35 },
      // ]
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; OR .slice()
    const persons = [...this.state.persons];;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }


  render() {

    let persons = null;
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    } else if (this.state.persons.length <= 1) {
      classes.push('bolder');
    }

    if (this.state.showPersons) {
      persons = (
        <div >
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={
                  () => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={
                  (event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
    }

    return (
      <div className="App" >
        <h1 className={classes.join(' ')} > Çağla 'nın sitesi yeye jsx yaziiyitititti.</h1>
        <button onClick={this.togglePersonsHandler} > TIKLA BEBEYİM BURAYA </button>
        {persons}
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Çağla\'nın sitesi yey....'))
  }

}

export default App;