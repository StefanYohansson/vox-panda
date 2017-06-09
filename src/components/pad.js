import React, { Component } from 'react';
import { removeKeyEvent } from '../actions/actions';

class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.handleKeys(nextProps.keyPressed)
  }

  handleTouch = () => {
    const { Synth, pad, dispatch } = this.props;
    Synth.triggerAttackRelease(pad.envelope.attack, pad.envelope.release);
    this.setState({ active: false });
    dispatch(removeKeyEvent());
  }

  handleKeys = (keyPressed) => {
    const padKey = this.props.pad.key;
    if (padKey == keyPressed) {
      this.setState({ active: true }, this.handleTouch)
      
    }
  }

  render() {
    const { pad: { label, key } } = this.props;
    return(
      <div
        onMouseDown={evt => {
          this.setState({ active: true }, () => this.handleTouch(evt))
        }}
        className={`pad-container ${this.state.active ? 'active' : ''}`}>
        <small>{label}</small>
      </div>
    );
  }
}

export default Pad;
