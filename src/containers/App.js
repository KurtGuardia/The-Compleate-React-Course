import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor");
  }

  state = {
    persons: [
      { id: "adsf", name: "Kurt", age: 28 },
      { id: "fgh", name: "Mari", age: 27 },
      { id: "tdresa", name: "Oli", age: 25 },
    ],
    otherState: "some other value",
    showPersons: false,
    title: "This is a React app!",
    authenticated: false,
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

  loginHandler = () => {
    this.setState({
      authenticated: true,
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.namechangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            title={this.state.title}
            personsLength={this.state.persons.length}
            login={this.loginHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}
export default withClass(App, classes.App);
