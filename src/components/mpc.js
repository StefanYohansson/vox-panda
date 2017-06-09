import React, { Component } from 'react';
import Pad from './pad';

class Mpc extends Component {
  render() {
    const pads = this.props.pads;
    const keyPressed = this.props.keyPressed;
    return (
      <div className="mpc-container"> 
        <div className="pads-container">
          {
            pads.map(pad => <Pad dispatch={this.props.dispatch} keyPressed={keyPressed} pad={pad}/>) 
          }
        </div>
      </div>
    );
  }
}

export default Mpc;
