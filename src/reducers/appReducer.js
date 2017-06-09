const initialState = {
  pads: [
    {
      label: 'pad1',
      key: '1',
      envelope: {
        attack: "35",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    }, 
    {
      label: 'pad2',
      key: '2',
      envelope: {
        attack: "C3",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
    {
      label: 'pad3',
      key: '3',
      envelope: {
        attack: "E5",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
    {
      label: 'pad4',
      key: '4',
      envelope: {
        attack: "C6",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
    {
      label: 'pad5',
      key: '5',
      envelope: {
        attack: "C2",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
    {
      label: 'pad6',
      key: '6',
      envelope: {
        attack: "D3",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
    {
      label: 'pad7',
      key: '7',
      envelope: {
        attack: "A5",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
    {
      label: 'pad8',
      key: '8',
      envelope: {
        attack: "G3",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
    {
      label: 'pad9',
      key: '9',
      envelope: {
        attack: "F4",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    },
  ],
  keyPressed: '',
  currentPad: null
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
