import { pads } from 'vox/utils/data';
import {
  KEY_EVENT, REMOVE_KEY_EVENT, SET_CURRENT_PAD,
  CLEAN_CURRENT_PAD
} from 'vox/utils/constants';

const initialState = {
  pads,
  keyPressed: '',
  currentPad: {} 
}

function keyEvent(state, action) {
  const keyPressed = action.keyCode;
  return {
    ...state,
    keyPressed
  };
}

function removeKeyEvent(state) {
  return {
    ...state,
    keyPressed: ''
  }
}

function setCurrentPad(state, action) {
  const pad = action.pad;
  return {
    ...state,
    currentPad: {
      ...pad
    }
  }
}

function cleanCurrentPad(state) {
  return {
    ...state,
    currentPad: null 
  }
}

export default function appReducer(state = initialState, action) {
  const getState = () => ({ ...state });
  const actionHandlers = {
    [KEY_EVENT]: keyEvent,
    [REMOVE_KEY_EVENT]: removeKeyEvent,
    [SET_CURRENT_PAD]: setCurrentPad,
    [CLEAN_CURRENT_PAD]: cleanCurrentPad
  };

  const fn = actionHandlers[action.type] || getState;

  return fn(state, action);
}
