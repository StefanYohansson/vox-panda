import { pads } from '../utils/data';
const initialState = {
  pads,
  keyPressed: '',
  currentPad: {} 
}

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'KEY_EVENT': 
      const keyPressed = action.keyCode;
      return {
        ...state,
        keyPressed
      };

    case 'REMOVE_KEY_EVENT':
      return {
        ...state,
        keyPressed: ''
      }

    case 'SET_CURRENT_PAD':
      const pad = action.pad;
      return {
        ...state,
        currentPad: pad
      }

    case 'CLEAN_CURRENT_PAD':
      return {
        ...state,
        currentPad: null 
      }
    default:
      return state
  }
}
