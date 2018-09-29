import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {
  render(){
  
    return(
      <div className='container'>
        <div className="row">
        <div className="col s12 m6">
         <h1>Dashboard</h1>
      </div>
      </div>
    </div>
    )
  }
}
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Dashboard)