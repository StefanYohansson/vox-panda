import {
  KEY_EVENT, REMOVE_KEY_EVENT, SET_CURRENT_PAD,
  CLEAN_CURRENT_PAD, SET_PAD_ATTRIBUTES 
} from 'vox/utils/constants';

export function keyEvent(keyCode) {
  return {
    type: KEY_EVENT,
    keyCode
  }
}

export function removeKeyEvent() {
  return {
    type: REMOVE_KEY_EVENT,
  }
}

export function setCurrent(pad) {
  return {
    type: SET_CURRENT_PAD,
    pad
  }
}

export function CleanCurrent() {
  return {
    type: CLEAN_CURRENT_PAD,
  }
}

export function setPadAttributes(pad) {
  return {
    type: SET_PAD_ATTRIBUTES,
    pad
  }
}
