import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitNote } from '../../actions';

class NoteFormReview extends Component {
  state = {
    file: null, 
    buttonColor: 'green', 
    buttonLogo: 'done',
    buttonText: 'submit'
  }

  onFileChange(event){
    this.setState({file: event.target.files[0]})
    console.log('got the files**', this.state)
  }

  onSubmit(event){
    event.preventDefault()
    const { formValues, history, submitNote } = this.props;

    submitNote(formValues, this.state.file, history);
  }
  renderFormValues({body, category, title}){
    return(
      <div>
        <div key='title' style={{ marginBottom: '20px' }}>
          <label>Title</label>
          <div>{title}</div>
        </div>
        <div key='body' style={{ marginBottom: '20px' }}>
          <label>Content</label>
          <div style={{ whiteSpace: "pre-wrap"}}>{body}</div>
        </div>
        <div key='category' style={{ marginBottom: '20px' }}>
          <label>Categores</label>
          <div>{category}</div>
        </div>
      </div>
        )
      };

    changeButton(){
      return(
        this.setState({
          buttonColor: 'yellow', 
            buttonLogo: 'done',
            buttonText: 'Loading...'
        }) 
      )
    }
  render(){
    return(
      <div className='container'>
        <h5>Please review your form..</h5>
        <form onSubmit={this.onSubmit.bind(this)}>
          {this.renderFormValues(this.props.formValues)}

          <div className='file-field input-field'>
            <div className='btn'>
            <span>Choose a file</span>
            <input 
                name='image'
                type='file'
                accept='image/*'
                onChange={this.onFileChange.bind(this)}
                style={{ marginBottom: '5px' }}
            />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div> 

        <button 
          onClick={this.props.onCancel} 
          className='btn waves-effect yellow left'
        >
          <i className='material-icons right'>cancel</i>
          cancel
        </button>

        <button 
          type='submit'
          className={`btn waves-effect right ${this.state.buttonColor}`}
          onClick={this.changeButton.bind(this)}
        >
          <i className="material-icons right" >{this.state.buttonLogo}</i>
          {this.state.buttonText}
        </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ form }) {
  return {
    formValues: form.NewNote.values
  }
}

export default connect(mapStateToProps, { submitNote })(withRouter(NoteFormReview))
