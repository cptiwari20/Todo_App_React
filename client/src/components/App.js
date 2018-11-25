import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect } from 'react-redux';
import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
import Login from './users/Login';
import Profile from './users/Profile'
import Dashboard from './users/Dashboard';
import NoteNew from './notes/NoteNew';
import NoteShow from './notes/NoteShow';
import NoteUpdate from './notes/NoteUpdate';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return ( 
      <Router>
        <div>
          <Header />
          <Switch>
          <div className='container'>
            <Route path='/notes/edit/:id' component={NoteUpdate} />
            <Route path='/notes/new' component={NoteNew} />
            <Route exact path='/notes/:id' component={NoteShow} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={Login} />
            <Route path="/" component={Landing}/> 
          </div>
          </Switch>
        </div>
      </Router> 
    )
  }
};
export default connect(null, actions)(App);

// additional method to write the routes
// const routes = [
//   {
//     path: '/notes/edit/:id', component: NoteUpdate
//   },{
//     path:'/notes/new', component: NoteNew
//   },{
//     path: '/notes/:id', component: NoteShow
//   }, {
//     path:'/dashboard', component: Dashboard
//   }, {
//     path:'/profile', component: Profile
//   }, { 
//     path:'/login', component: Login
//   }, {
//     path: "/", component: Landing
//   }
// ]

//           {routes.map((route, index) => {
//             return (
//             <Route
//               exact
//               key={index}
//               path={route.path}
//               component={route.component} 
//             />)
//           })}