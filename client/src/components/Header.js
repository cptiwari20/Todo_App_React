import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect } from 'react-redux';

class Header extends Component {
 renderContent(){
   switch (this.props.auth) {
     case null:
      return;
    case false:
      return <li>
        <Link to='/login'>Login
        <i className='material-icons right'>account_circle</i>
        </Link>
      </li>;
    default:
      return [
        <li>{this.props.auth.name}</li>,
        <li><img className='rounded' src={this.props.auth.image} alt={this.props.auth.name}/></li>,
        <li><a href='/api/logout'>Logout
          <i className='material-icons right'>account_circle</i>
          </a>
        </li>
      ]
   }
 }
  render(){
    return(
      <nav>
        <div className='nav-wrapper deep-purple accent-3'>
          <a className='brand-logo'>Two-DOO</a>
          <ul className="right">
            <li><a>Nothing</a></li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);