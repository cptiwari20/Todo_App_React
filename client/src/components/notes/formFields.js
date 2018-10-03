import React from 'react';

export const newNoteField = ({name, input, label, meta: {touched, error}}) => {
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
export const newNoteFieldTA = ({name, input, label, meta: {touched, error}}) => {
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
