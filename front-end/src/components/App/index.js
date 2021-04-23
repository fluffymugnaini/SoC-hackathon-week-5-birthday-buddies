import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useReducer, useState } from "react";
import HomePage from '../HomePage';
import BirthdayPage from '../BirthdayPage';
import reducer, { INITIAL_BIRTHDAYS } from '../../libs/birthdayReducer';


function App() {
const [birthday, dispatch] = useReducer(reducer, INITIAL_BIRTHDAYS)


  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">HOME PAGE</Link>
            </li>
            <li>
              <Link to="/birthdays">Birthdays</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/birthdays">
            <BirthdayPage dispatch={dispatch}/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
