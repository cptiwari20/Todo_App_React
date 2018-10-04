import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import NoteForm from './NoteForm';
import NoteFormReview from './NoteFormReview';

class NoteNew extends Component {
  state = {showFormReview: false}

  renderContent(){
    if(this.state.showFormReview){
      return(
        <NoteFormReview 
        onCancel={() => this.setState({showFormReview: false})}
        />
      )
      }
      return(
        <NoteForm 
        onNoteSubmit={() => this.setState({showFormReview: true})}
        />
      )
    }

  render(){
    return(
     <div>
       {this.renderContent()}
     </div>
    )
  }
}
export default reduxForm({
  form: 'NewNote'
})(NoteNew);