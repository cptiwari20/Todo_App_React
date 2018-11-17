import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers';

export default function({children, initialState = {} }){
  const newStore = createStore(reducer, initialState, applyMiddleware(ReduxThunk));
  
  return ( 
  <Provider store={newStore}>
    {children}
  </Provider>
  )
}