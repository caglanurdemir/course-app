import React from 'react';
import './Person.css'

class Person extends React.Component {
    render() {
        console.log('Person classs rendering...');
        console.log('[Person.js] rendering...');
        return (
            <div className="Person">
                <p onClick={this.props.click} onChange={this.props.changed}>I'm a person broooo. and I am {this.props.name}.I am {this.props.age} years old :D:D:D:D..</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }

};

export default Person;