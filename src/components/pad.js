import React, { Component } from 'react';

class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleTouch = () => {
    console.log('play', this.props)
    const { Synth, pad } = this.props;
    console.log(Synth)
    Synth.triggerAttackRelease(pad.envelope.attack, pad.envelope.release);
    this.setState({ active: true });
  }

  keyDown = (evt) => {
    const keyPressed = evt.target.value;
    const padKey = this.props.touchKey.charCodeAt(0);
    if (padKey == keyPressed) {
      console.log(padKey)
      this.handleTouch();
    }
  }

  render() {
    const label = this.props.label;
    return(
      <div
        onMouseDown={this.handleTouch}
        onMouseUp={() => this.setState({ active: false })}
        className={`pad-container ${this.state.active ? 'active' : ''}`}>
        <small>{label}</small>
      </div>
    );
  }
}

export default Pad;
