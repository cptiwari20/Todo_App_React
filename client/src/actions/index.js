import axios from 'axios';
import { FETCH_USER, FETCH_NOTES } from './types';

export const fetchUser = () => async dispatch => {
   const res = await axios.get('/api/current_user')
   dispatch({
     type: FETCH_USER,
     payload: res.data
   })
}
export const fetchNotes = () => async dispatch => {
  const res = await axios.get('/api/notes')
  dispatch({
    type: FETCH_NOTES,
    payload: res.data
  })
}
export const submitNote = (values) => async dispatch => {
  const res = await axios.post('/api/notes', values)
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
}