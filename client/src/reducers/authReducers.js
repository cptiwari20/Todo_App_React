import { FETCH_USER } from '../actions/types'
export default function( state = null, actions){
  switch (actions.type) {
    case FETCH_USER:
      return actions.payload || false;
    default:
      return state;
  }
}