import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Mpc from './mpc';
import { keyEvent } from '../actions/actions'; 

class App extends Component {
  componentDidMount() {
    window.addEventListener('keypress', (evt) => this.props.dispatch(keyEvent(evt.key)));
  }
  render() {
    return (
      <main >
        <Mpc dispatch={this.props.dispatch} keyPressed={this.props.keyPressed} pads={this.props.pads} />
      </main>
    );
  }
}

export default connect(state => {
  return ({
    pads: state.pads,
    keyPressed: state.keyPressed
  });
})(App);
