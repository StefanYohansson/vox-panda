import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { keyEvent } from 'vox/actions/actions'; 
import Mpc from 'vox/components/mpc';
import Sidebar from 'vox/components/sidebar';

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
        <main >
          <Mpc dispatch={dispatch} keyPressed={keyPressed} pads={pads} />
          <Sidebar dispatch={dispatch} currentPad={currentPad} />
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
