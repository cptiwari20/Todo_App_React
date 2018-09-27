import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
import Login from './users/Login'

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