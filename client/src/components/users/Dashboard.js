import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotesList from '../notes/NotesList'



class Dashboard extends Component {

  render(){
    return(
      <div className=''>
      <div className='row'>
        <NotesList />
      </div>
               
      <div className='fixed-action-btn right'>
        <Link className='btn-floating btn-large' to="/notes/new">
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
    )
  }
}
function mapStateToProps({ auth}) {
  return { auth }
}

export default connect(mapStateToProps)(Dashboard)