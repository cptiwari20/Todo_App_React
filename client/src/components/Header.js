import React, { Component } from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom'
import {connect } from 'react-redux';

class Header extends Component {
 renderContent(){
   switch (this.props.auth) {
     case null:
      return ;
    case false:
      return <li className="sidenav-close">
        <Link to='/login'>Login
        <i className='material-icons right'>account_circle</i>
        </Link>
      </li>;
    default:
      return [
        <li key='2' className="waves-effect sidenav-close">
        <Link to='/profile'>
          <span>Profile</span>
          <img 
            className='btn-floating right-align' 
            src={this.props.auth.image} 
            alt={this.props.auth.name}/>
        </Link>
        </li>,
        <li key='3' className="sidenav-close">
          <a href='/api/logout'>
            Logout
            <i className='material-icons right'>account_circle</i>
          </a>
        </li>
      ]
   }
 }
 renderSidenav(){
   const user = this.props.auth;
   if(user){
   return(
    <li className="sidenav-close">
      <div className="user-view">
            <div className="background">
              <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="bg user"/>
            </div>
            <Link to='/profile'>
              <img className="circle" src={user.image} alt={user.name}/>
            </Link>
            <Link to='/profile'>
              <span className="white-text name">{user.name}</span>
            </Link>
            <Link to='/profile'>
              <span className="white-text email">{user.email}</span>
            </Link>
          </div>
      </li>
   )
  }
 }

  render(){
    return(
    <Router>
      <nav>
        <div className='nav-wrapper deep-purple accent-3'>
          <div className='container'>
            <Link className='brand-logo'
            to={this.props.auth ? '/dashboard' : '/'}>
              Two-Doo
            </Link>
            <a data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons left">menu</i>
            </a>
            <ul className="hide-on-med-and-down right">
              {this.renderContent()}
            </ul>
            <ul id="slide-out" className="sidenav">
              {this.renderSidenav()}
              <li className="sidenav-close">
                <Link to='/'>
                  <i className="material-icons">home</i>
                  Home
                </Link>
              </li>
              <li className="sidenav-close">
                <Link to='/about'>About</Link>
              </li>
              <li><div className="divider"></div></li>
                {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
     </Router>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);