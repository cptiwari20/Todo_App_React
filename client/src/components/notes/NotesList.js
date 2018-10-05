import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions'

class NotesList extends Component {
  componentDidMount(){
    this.props.fetchNotes();
  }
  render(){
    return(
      _.map(this.props.notes, ({title, body, _id }) => {
        return(
          <div key={_id} className='card horizontal'>
          <div className='card-stacked'>
            <div className='card-contents center-align'>
              <span className="card-title">{title}</span>
              <p className='grey-text lighten-2'>{body.slice(0, 50)}...</p>  
            </div>
            <div className='card-action'>
            <Link to={`/notes/${_id}`}>Read More</Link>
            </div>
            </div>
          </div>
        )
      })
    )
  }
}

function mapStateToProps({ notes }) {
  return { notes }
}
export default connect(mapStateToProps, { fetchNotes })(NotesList)