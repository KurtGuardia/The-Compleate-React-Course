import React from "react";
import classes from './Person.css'

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old
      </p>

      <p>{props.children}</p>
      <input
        className="button"
        type="text"
        onChange={props.changed}
        value={props.name}
      ></input>
    </div>
  );
};

export default person;
