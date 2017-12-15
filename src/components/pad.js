import React, { Component } from 'react';
import { removeKeyEvent, setCurrent } from 'vox/actions/actions';
import { play } from 'vox/utils/tone';

class Pad extends Component {
  componentWillReceiveProps(nextProps) {
    this.handleKeys(nextProps.keyPressed)
  }

  handleTouch = () => {
    const { pad, dispatch } = this.props
    play(pad)
    dispatch(removeKeyEvent());
    setTimeout(() => this.pad.style.background = "white", 100);
  }

  handleKeys = (keyPressed) => {
    const padKey = this.props.pad.conf.key;
    if (padKey == keyPressed) {
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
