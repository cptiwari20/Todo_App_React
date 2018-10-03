import React, { Component } from 'react';
import { Field } from 'redux-form'

class ImageInputField extends Component {
  state = {file: null}

  onFileChange(event){
    this.setState({file: 'Some file'})
    console.log(event.target)
  }

  
  render(){

    const imageInputField = (field ) => {
      console.log('FIELD:', field)
      return(
        <div className='file-field input-field'>
          <div className='btn'>
          <span>Choose a file</span>
          <input 
              name={field.name}
              {...field.input}
              type='file'
              accept='image/*'
              value={this.state.file}
              onChange={this.onFileChange.bind(this)}
              style={{ marginBottom: '5px' }}
          />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div> 
      )
    }

    return(
      <Field 
            type='file'
            name='image'
            label='Upload an image'
            component={imageInputField}
          />
    )
   
  }
}

export default ImageInputField;