import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
    
    const toggleBtnRef = useRef(null);
  
    useEffect(() => {
      toggleBtnRef.current.click();
    }, []);
  
    const assignedClasses = [];
    let btnClasses = "";
  
    if (props.showPersons) {
      btnClasses = classes.Red;
    }
  
    if (props.personsLength >= 2) {
      assignedClasses.push(classes.red);
    }
  
    if (props.personsLength >= 1) {
      assignedClasses.push(classes.bold);
    }
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

export default Cockpit;
