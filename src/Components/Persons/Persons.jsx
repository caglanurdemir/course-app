import React from 'react';
import Person from './Person/Person'



class Persons extends React.Component {
    getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps çalışıyor Persons.jsx de');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Updateeeeee');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('snapshootttt');

    }

    componentDidUpdate() {
        console.log('updateeee');

    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                click={
                    () => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={
                    (event) => this.props.changed(event, person.id)} />
        });
    }

}



export default Persons;