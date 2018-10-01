import { combineReducers } from 'redux';
import authReducer from './authReducers';
import notesReducer from './notesReducers';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth: authReducer,
  notes: notesReducer,
  form: formReducer
});