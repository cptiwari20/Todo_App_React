import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
import Login from './users/Login';
import Profile from './users/Profile'
import Dashboard from './users/Dashboard';
import NoteNew from './notes/NoteNew'


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return ( 
    <div>
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
           <Route path='/notes/new' component={NoteNew} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path="/" component={Landing}/> 
        </Switch>
      </div>
      </BrowserRouter> 
    </div>
    )
  }
};
export default connect(null,actions)(App);