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
    ]
  }

  switchNameHandler = (newName) => {
    console.log('successfull Çağla:D:D:D');
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Mustafa', age: 25 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Çağla', age: 35 },
        { name: event.target.value, age: 35 },
      ]
    })
  }

  render() {
    // const {name, age} = this.state;
    // console.log(name);
    // console.log(age);
    return (
      <div className="App">
        <h1>Çağla'nın sitesi yeye jsx yaziiyitititti.</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Değiştirdim güzelim')}>TIKLA BEBEYİM BURAYA</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>Araya bir children sıkıştırdım kanki nne diyosuunnn xdxd</Person>
        <Person
          name={this.state.persons[1].name}
          change={this.nameChangedHandler}></Person>
      </div>
    );

    // return React.createElement('div', null, React.createElement('h1', null, 'Çağla\'nın sitesi yey....'))
  }

}

export default App;