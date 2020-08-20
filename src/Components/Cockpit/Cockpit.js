import React from "react";
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    if ( props.persons.length <= 2 ){
        assignedClasses.push( classes.red );
    }
    if ( props.persons.length <= 1 ){
        assignedClasses.push( classes.bold );
    }

  return (
    <div>
      <h1>I'm a React App!</h1>
      <p>this is really working!</p>
      <button
        className={btnClasses.join(" ")}
        onClick={this.togglePersonsHandler}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
