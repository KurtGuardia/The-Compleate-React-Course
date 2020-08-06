import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
    
  
    console.log(props.personsLength);
    return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(" ")}>this is really working!</p>
        <button ref={toggleBtnRef} className={btnClasses} onClick={props.clicked}>
          Toggle Persons
        </button>
        <AuthContext.Consumer>
          {(context) => <button onClick={context.login}>Log in</button>}
        </AuthContext.Consumer>
      </div>
    );
  };