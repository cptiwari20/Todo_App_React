import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitNote } from '../../actions';

class NewNote extends Component {
  renderNewForm(){
    const newNoteField = ({name, input, label, meta: {touched, error}}) => {
      return(
        <div>
          <label htmlFor={name}>{label}</label>
          <input 
            id={name} 
            {...input} 
            style={{ marginBottom: '5px' }}/>
          <div className='red-text' style={{ marginBottom: '20px' }}>
          {touched && error} 
          </div>
        </div> 
      )
    };
    const newNoteFieldTA = ({name, input, label, meta: {touched, error}}) => {
      return(
        <div>
          <label htmlFor={name}>{label}</label>
          <textarea 
              id={name} 
              {...input} 
              className="materialize-textarea"
              style={{ marginBottom: '5px' }}>
          </textarea>
          <div className='red-text' style={{ marginBottom: '20px' }}>
          {touched && error} 
          </div>
        </div> 
      )
    };
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
    const { handleSubmit, submitNote } = this.props;
    return(
      <div className='container'>
      <form onSubmit={handleSubmit(values => submitNote(values))}>
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
          Submit
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
})(connect(null, { submitNote })(NewNote));