import React, { Component } from 'react';
import Pad from './pad';
import Tone from 'tone';

class Mpc extends Component {
  render() {
    const Synth = new Tone.Synth().toMaster();
    const pads = this.props.pads;
    const keyPressed = this.props.keyPressed;
    return (
      <div className="mpc-container">
        {
          pads.map(pad => <Pad dispatch={this.props.dispatch} keyPressed={keyPressed} Synth={Synth} pad={pad}/>) 
        }
      </div>
    );
  }
}

export default Mpc;
