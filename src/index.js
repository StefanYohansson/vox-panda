import css from './styles/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app.js';
import Login from './components/Login.js';
import { getTone } from './Tone';
import Tone from 'tone';
import 'hack';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import appReducer from './reducers/appReducer.js'
const root = document.getElementById('root');
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/app" component={App}/>
      </div>
    </Router>
  </Provider>
  , root);
