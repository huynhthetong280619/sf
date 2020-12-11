import logo from './logo.svg';
import './App.css';

import React from 'react'
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login';

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;
