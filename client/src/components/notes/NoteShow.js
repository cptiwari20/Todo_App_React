import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNote, deleteNote } from '../../actions';

class NoteShow extends Component{
  componentDidMount(){
    this.props.fetchNote(this.props.match.params.id)
  }
  renderImage(){
    if(this.props.note.image){
      return (
            <img className='materialboxed responsive-img'
            src={'https://s3.ap-south-1.amazonaws.com/two-doo-reactapp/' + this.props.note.image}
            alt='ImageUrl' />
        );
    }
  }
  onSubmitDelete(event){
    event.preventDefault();
    const { deleteNote, history, note: { _id }} = this.props;
    deleteNote(_id, history);
  }
  renderOptions(){
    const { auth, note: { _id } } = this.props;
    if(auth){
      return( 
        <div className='row right'>
          <div className='col s6'>
            <form onSubmit={this.onSubmitDelete.bind(this)}>
              <button className='btn white-text red btn-small' type='submit'>   
                <i className="material-icons white-text right">delete</i> 
              </button>
            </form>
          </div>
          <div className='col s6'>
            <Link className="btn orange btn-small left" to={`/notes/edit/${_id}`}>
              <i className="material-icons white-text right">edit</i>
              Edit
            </Link>
          </div>      
        </div>
      )
    }
  }

  render(){
    if(!this.props.note){
      return(
        <div className='progress'>
          <div className='indeterminate'></div>
        </div>
      )
    }
    const { title, body, createdAt, category} = this.props.note
    return(
     
      <div className='container'>
        {this.renderImage()}
        <Link to='/dashboard' className="btn grey lighten-2 black-text left">
        <i className="material-icons left">chevron_left</i>
        Back
        </Link>
        <div>{this.renderOptions()}</div>
        <div className='section white'>
          <div className='row'>
            <h2 className='header'>{title}</h2>
            <span className='grey-text lighten-2'>
            Created on: {new Date(createdAt).toLocaleDateString()}
            </span>
            <p style={{ whiteSpace: "pre-wrap" }}>{body}</p>
            <p className='chip'>{category}</p>
          </div>
        </div>
      </div>
     
    )
  }
};
function mapStateToProps({ notes, auth }, ownProps) {
  return {
    note: notes[ownProps.match.params.id],
    auth
  }
}

export default connect(mapStateToProps, { fetchNote, deleteNote })(withRouter(NoteShow))