import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../../actions'


class Dashboard extends Component {
  componentDidMount(){
    this.props.fetchNotes();
  }

  renderNotes(){
    return(
      this.props.notes.map(({title, body, createdAt, _id }) => {
        return(
          <div key={_id} className='card horizontal'>
          <div className='card-stacked'>
            <div className='card-contents center-align'>
              <span className="card-title">{title}</span>
              <p>{body}</p>  
            </div>
            <div className='card-action'>
            <a>Added on: {new Date(createdAt).toLocaleDateString()}</a>
            </div>
            </div>
          </div>
        )
      })
    )
    
  }

  render(){
    return(
      <div className='container'>
        <div className="row">
        <div className="col s12 m6">
         {this.renderNotes()}
        </div>
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
function mapStateToProps({ auth, notes }) {
  return { auth, notes }
}

export default connect(mapStateToProps, { fetchNotes })(Dashboard)