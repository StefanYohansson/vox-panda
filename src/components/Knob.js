import React from 'react';
import { actions } from 'react-redux-form';

import Knob from 'react-canvas-knob';

class InputKnob extends React.Component {
  render() {
    const { model, dispatch } = this.props;

    return (
      <Knob
        onChange={e => dispatch(actions.change(model, e))}
      />
    );
  }
}

export default InputKnob;
