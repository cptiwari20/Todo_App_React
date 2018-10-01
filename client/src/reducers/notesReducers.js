import { FETCH_NOTES } from '../actions/types'
export default function( state = [], actions){
  switch (actions.type) {
    case FETCH_NOTES:
      return actions.payload;
    default:
      return state;
  }
}