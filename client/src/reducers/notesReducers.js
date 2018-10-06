import _ from 'lodash';
import { FETCH_NOTES, FETCH_NOTE, DELETE_NOTE } from '../actions/types'
export default function( state = {}, actions){
  switch (actions.type) {
    case FETCH_NOTE:
      const note = actions.payload;
      return {...state, [note._id]: note };
    case DELETE_NOTE:
      return _.omit(state, note);
    case FETCH_NOTES:
      console.info(state)
      return _.mapKeys(actions.payload, '_id');
    default:
      return state;
  }
}