export function keyEvent(keyCode) {
  return {
    type: 'KEY_EVENT',
    keyCode
  }
}

export function removeKeyEvent() {
  return {
    type: 'REMOVE_KEY_EVENT',
  }
}

export function setCurrent(pad) {
  console.log('bora')
  return {
    type: 'SET_CURRENT_PAD',
    pad
  }
}

export function CleanCurrent() {
  return {
    type: 'CLEAN_CURRENT_PAD',
  }
}
