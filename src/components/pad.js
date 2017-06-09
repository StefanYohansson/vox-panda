import React, { Component } from 'react';
import { removeKeyEvent, setCurrent } from '../actions/actions';
import { getInstance } from '../Tone';

class Pad extends Component {
  componentWillReceiveProps(nextProps) {
    this.handleKeys(nextProps.keyPressed)
  }

  handleTouch = () => {
    const { pad, dispatch } = this.props;
    const Synth = getInstance();
    Synth.triggerAttackRelease(pad.envelope.attack, pad.envelope.release);
    dispatch(removeKeyEvent());
  }

  handleKeys = (keyPressed) => {
    const padKey = this.props.pad.key;
    if (padKey == keyPressed) {
      this.handleTouch();
    }
  }

  render() {
    const { pad: { label, key }, dispatch } = this.props;
    return(
      <div
        onMouseDown={this.handleTouch} 
        className={`pad-container ${false ? 'active' : ''}`}>
        <small>{label}</small>
        <nav className="actions-container">
          <i className="fa fa-cog" onClick={() => {
            console.log(dispatch, this.props.pad)
            dispatch(setCurrent(this.props.pad))
          }}/>
        </nav>
      </div>
    );
  }
}

export default Pad;
