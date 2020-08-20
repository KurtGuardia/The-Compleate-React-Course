import React, { Component } from "react";
import classes from "./App.css";
import Person from "../Components/Persons/Person/Person";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "adsf", name: "Kurt", age: 28 },
      { id: "fgh", name: "Mari", age: 27 },
      { id: "tdresa", name: "Oli", age: 25 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClasses = [classes.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.namechangeHandler}
          />
        </div>
      );

      btnClasses.push(classes.red);
    }

    return (
      <div className={classes.App}>
        
        {persons}
      </div>
    );
  }
}
export default App;
