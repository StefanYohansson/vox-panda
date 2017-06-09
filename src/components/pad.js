import React, { Component } from 'react';

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
    console.log('play', this.props)
    const { Synth, pad } = this.props;
    Synth.triggerAttackRelease(pad.envelope.attack, pad.envelope.release);
    this.setState({ active: true });
  }

  handleKeys = (keyPressed) => {
    const padKey = this.props.pad.key;
    if (padKey == keyPressed) {
      this.handleTouch();
    }
  }

  render() {
    const { pad: { label, key } } = this.props;
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
