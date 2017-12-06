import React, { Component } from 'react';
import { removeKeyEvent, setCurrent } from '../actions/actions';
import { getTone } from '../Tone';

class Pad extends Component {
  componentWillReceiveProps(nextProps) {
    this.handleKeys(nextProps.keyPressed)
  }

  handleTouch = () => {
    const { pad: { conf }, dispatch } = this.props;
    const Synth = getTone().Synth;
    Synth.triggerAttackRelease(conf.note, conf.duration);
    dispatch(removeKeyEvent());
    setTimeout(() => this.pad.style.background = "white", 100);
  }

  handleKeys = (keyPressed) => {
    const padKey = this.props.pad.key;
    if (padKey == keyPressed) {
      this.pad.style.background = "red";
      this.handleTouch();
    }
  }

  render() {
    const { pad: { conf }, keyPressed, dispatch } = this.props;
    return(
      <div
        onMouseDown={this.handleTouch} 
        className={`pad-container`}
        ref={(c) => this.pad = c} >
        <small>{conf.label}</small>
        <nav className="actions-container">
          <i className="fa fa-cog" onClick={() => {
            dispatch(setCurrent(this.props.pad))
          }}/>
        </nav>
      </div>
    );
  }
}

export default Pad;
