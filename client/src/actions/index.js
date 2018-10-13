import axios from 'axios';
import { 
  FETCH_USER, 
  FETCH_NOTES, 
  FETCH_NOTE, 
  DELETE_NOTE,
  UPDATE_NOTE } from './types';

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
export const submitNote = (values, file, history) => async dispatch => {
  const configUrl = await axios.get('/api/upload')
  const upload = await axios.put(configUrl.data.url, file, {
    headers:{
      'Content-Type': file.type
    }
  });
  console.info(upload)
  const res = await axios.post('/api/notes', { ...values, image: configUrl.data.key });
  history.push('/dashboard');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
}

export const fetchNote = (id) => async dispatch => {
  const res = await axios.get(`/api/notes/${id}`)
  dispatch({
    type: FETCH_NOTE,
    payload: res.data
  })
};

export const deleteNote = (id, history) => async dispatch => {
  const res = await axios.delete(`/api/notes/${id}`);
  history.push('/dashboard')
  console.log('Note is successfully dleted');
  
  dispatch({
    type: DELETE_NOTE,
    payload: res.data
  })
}
export const updateNote = (id, values, history) => async dispatch => {
  const res = await axios.put(`/api/notes/edit/${id}`, values);
  history.push(`/notes/${id}`);
  dispatch({
    type: UPDATE_NOTE,
    payload: res.data
  })
}