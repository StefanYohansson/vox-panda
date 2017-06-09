import css from './styles/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app.js';
import { getInstance } from './Tone';
import Tone from 'tone';

import appReducer from './reducers/appReducer.js'
const root = document.getElementById('root');
const store = createStore(appReducer);

const Synth = new Tone.Synth().toMaster();
getInstance(Synth);

console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , root);
