import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote } from '../../actions';

class NoteShow extends Component{
  componentDidMount(){
    this.props.fetchNote(this.props.match.params.id)
  }
  renderImage(){
    if(this.props.note.image){
      return (
            <img className='responsive-img'
            src={'https://s3.ap-south-1.amazonaws.com/two-doo-reactapp/' + this.props.note.image}
            alt='ImageUrl' />
        );
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
      <div>
        {this.renderImage()}
        <div className='section white'>
        <div className='row container'>
          <h2 className='header'>{title}</h2>
          <span className='grey-text lighten-2'>Created on: {new Date(createdAt).toLocaleDateString()}</span>
          <p>{body}</p>
          <p className='chip'>{category}</p>
          </div>
        </div>
      </div>
    )
  }
};
function mapStateToProps({ notes }, ownProps) {
  return {
    note: notes[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchNote })(NoteShow)