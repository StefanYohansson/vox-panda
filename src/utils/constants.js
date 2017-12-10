import Knob from 'react-canvas-knob';

// actions
export const KEY_EVENT = 'KEY_EVENT';
export const SET_CURRENT_PAD = 'SET_CURRENT_PAD';
export const REMOVE_KEY_EVENT = 'REMOVE_KEY_EVENT';
export const CLEAN_CURRENT_PAD = 'CLEAN_CURRENT_PAD';

//utils
export const  defaultKnobProps = {
  component: Knob,
  width: 50,
  height: 50,
  step: 0.01,
  min: 0,
  max: 1
};
