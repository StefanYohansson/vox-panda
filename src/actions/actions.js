export function keyEvent(keyCode) {
  console.log(keyCode)
  return {
    type: 'KEY_EVENT',
    keyCode
  }
}
