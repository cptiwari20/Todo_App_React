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
      _.map(this.props.notes, ({title, _id, image, body }) => {
        return(
          <div key={_id} className='col s12 m4 l3'>
          <div className='card medium'>
            <div className='card-image'>
              <img alt={title} src={'https://s3.ap-south-1.amazonaws.com/two-doo-reactapp/' + image} />
            </div>
            <div className='card-stacked'>
              <div className='card-content'>
                <span className="card-title">{title}</span>
                <p className='grey-text lighten-2 truncate'>{body}</p>  
              </div>
              <div className='card-action'>
              <Link className='btn waves-effect waves-light' to={`/notes/${_id}`}>Read More</Link>
              </div>
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