import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";
import withClasses from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  render() {
    return (
      <Aux>
        {/* <div className={classes.Person}> */}

        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old
        </p>

        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          className="button"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
