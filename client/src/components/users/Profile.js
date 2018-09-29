import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class Profile extends Component {
  renderContent(){
    const user = this.props.auth;
    if(user === null){
      return(
        <Login />
      )
    }else if(!user){
      return(
      <div className='card'>
      <div className="progress">
          <div className="indeterminate"></div>
      </div>
      </div>
      )
    } else 
    return(
    <div className='card'>
      <div className="card-image">
        <img src={user.image} alt={user.name} />
          <span className="card-title">{user.name}</span>
      </div>
     <div className="card-content">
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>
    </div>
    )
  }

  render(){
  
    return(
      <div className='container'>
        <div className="row">
        <div className="col s12 m6">
         {this.renderContent()}
      </div>
      </div>
    </div>
    )
  }
}
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Profile)