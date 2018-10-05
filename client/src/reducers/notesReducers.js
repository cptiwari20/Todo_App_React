import mapKeys from 'lodash/mapKeys';
import { FETCH_NOTES, FETCH_NOTE } from '../actions/types'
export default function( state = {}, actions){
  switch (actions.type) {
    case FETCH_NOTE:
      const blog = actions.payload;
      return {...state, [blog._id]: blog };
    case FETCH_NOTES:
      console.info(state)
      return { ...state, ...mapKeys(actions.payload, '_id')};
    default:
      return state;
  }
}