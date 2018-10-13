import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateNoteField, updateNoteFieldTA } from './updateFormFields';
import { updateNote, fetchNote } from '../../actions'

class UpdateNote extends Component {
  componentDidMount(){
    this.props.fetchNote(this.props.match.params.id)
  }
  renderUpdateForm(){    
    if(!this.props.note){
      return (
        <div>
          <h5>Fetching Note details...</h5>
          <p>Please wait..</p>
        </div>
      )
    }
    return(
      <div>
        <Field 
            type='text'
            name='title'
            label='Title'
            component={updateNoteField}
          />
          <Field 
            type='text'
            name='body'
            label='Content'            
            component={updateNoteFieldTA}
          />
          <Field 
            type='text'
            name='category'
            label='Categories'
            component={updateNoteField}
          />
         
      </div> 
    )
  }
  onSubmit(event){
    event.preventDefault();
    const { formValues, note: {_id }, history, updateNote } = this.props;
    return updateNote(_id, formValues, history)
  }
  render(){
    return(
      <div className='container'>
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className='input-field'>
        {this.renderUpdateForm()}
        </div>
        <Link to='/dashboard' className='btn red left'>
          <i className='material-icons left'>cancel</i>
          Cancel
        </Link>
        <button 
          type='submit' 
          className='btn waves-effect right green'>
          <i className='material-icons right'>done</i>
          Next
        </button>
      </form>
      </div>
    )
  }
}
function validate(values){
  const errors = {};

  if(!values.title){
   errors.title = 'Please enter some title'
  }
  if(!values.body){
   errors.body = 'Please add some kind of note'
  }
  if(!values.category){
   errors.category = 'Select some categories.'
  }
  return errors;
}

function mapStateToProps({ notes, form }, ownProps) {
  if(!form.UpdateNote){
    return { 
      note: notes[ownProps.match.params.id],
      initialValues: notes[ownProps.match.params.id],
      formValues: '' }
  } return { 
    note: notes[ownProps.match.params.id],
    initialValues: notes[ownProps.match.params.id],
    formValues: form.UpdateNote.values 
  }
}
const updateNoteForm = reduxForm({
  validate,
  form: 'UpdateNote',
  enableReinitialize: true
})(withRouter(UpdateNote)) 

export default (connect(  
    mapStateToProps, 
    {
      updateNote, 
      fetchNote 
    })( updateNoteForm));