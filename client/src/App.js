import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {NotificationContainer} from 'react-notifications';

import Login from './components/login';
import Logout from './components/logout';
import Dashboard from './components/dashboard';
import CandidateIndex from './components/candidateIndex';
import AddUpdateCandidates from './components/addUpdateCandidate';
import Pagination from './components/Pagination';

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {Login}></Route>
          <Route exact path = '/dashboard' component = {Dashboard}></Route>
          <Route exact path = '/candidates' component = {CandidateIndex}></Route>
          <Route exact path = '/addcandidates' component = {AddUpdateCandidates}></Route>
          <Route exact path = '/updatecandidate' component = {AddUpdateCandidates}></Route>
          <Route exact path = '/logout' component = {Logout}></Route>
          <Route exact path = '/pagination' component = {Pagination}></Route>
        </Switch>
        <NotificationContainer></NotificationContainer>
      </Router>
    )
  }
}

export default App
