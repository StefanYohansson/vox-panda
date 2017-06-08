import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Mpc from './mpc';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <main>
        <Mpc pads={this.props.pads} />
      </main>
    );
  }
}

export default connect(state => {
  return ({
    pads: state.pads
  });
})(App);
