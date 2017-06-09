import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { keyEvent } from '../actions/actions'; 
import Mpc from './mpc';
import Sidebar from './sidebar';

class App extends Component {
  componentDidMount() {
    window.addEventListener('keypress', evt => this.props.dispatch(keyEvent(evt.key)));
  }

  render() {
    const {
      dispatch, keyPressed, pads,
      currentPad
    } = this.props;
    return (
      <div>
        <header>
          <h1>{'ReactMPC'}</h1>
          <p>{'a React + ToneJS'}</p>
        </header>
        <main >
          <Mpc dispatch={dispatch} keyPressed={keyPressed} pads={pads} />
          <Sidebar currentPad={currentPad} />
        </main>
      </div>
    );
  }
}

export default connect(state => {
  return ({
    pads: state.pads,
    keyPressed: state.keyPressed,
    currentPad: state.currentPad
  });
})(App);
