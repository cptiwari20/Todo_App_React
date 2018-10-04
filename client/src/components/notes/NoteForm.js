import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { newNoteField, newNoteFieldTA } from './formFields';


class NewNote extends Component {
  renderNewForm(){
    return(
      <div>
        <Field 
            type='text'
            name='title'
            label='Title'
            component={newNoteField}
          />
          <Field 
            type='text'
            name='body'
            label='Content'
            component={newNoteFieldTA}
          />
          <Field 
            type='text'
            name='category'
            label='Categories'
            component={newNoteField}
          />
         
      </div> 
    )
  }
  render(){
    return(
      <div className='container'>
      <form onSubmit={this.props.handleSubmit(() => this.props.onNoteSubmit())}>
        <div className='input-field'>
        {this.renderNewForm()}
        </div>
        <Link to='/dashboard' className='btn red left'>
          <i className='material-icons left'>cancel</i>
          Cancel
        </Link>
        <button 
          type='submit' 
          className='btn waves-effect right green'
        >
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

export default reduxForm({
  validate,
  form: 'NewNote',
  destroyOnUnmount: false
})(NewNote);