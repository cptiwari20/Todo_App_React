import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root'
import App from './components/App';

// import axios from 'axios';
// window.axios = axios;

ReactDOM.render( 
  <Root>
    <App />   
  </Root>
  , document.getElementById('root')
);