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
