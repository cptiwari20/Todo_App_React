import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNote, deleteNote } from '../../actions';

class NoteShow extends Component{
  componentDidMount(){
    this.props.fetchNote(this.props.match.params.id)
  }
  renderImage(){
    if(this.props.note.image){
      return (
            <img className='responsive-img materialboxed'
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
    const { auth } = this.props;
    if(auth){
      return(
        <div>
          <form onSubmit={this.onSubmitDelete.bind(this)}>
            <button className='btn red' type='submit'>Delete</button>
          </form>
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
        <div className='section white'>
        <div className='row'>
          <h2 className='header'>{title}</h2>
          <span className='grey-text lighten-2'>Created on: {new Date(createdAt).toLocaleDateString()}</span>
          <span>{this.renderOptions()}</span>
          <p>{body}</p>
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