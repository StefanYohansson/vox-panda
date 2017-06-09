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
      key: '2',
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
      key: '7',
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
  ]
}

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'KEY_EVENT': 
      const keyCode = action.keyCode;
      return {
        ...state,
        keyCode
      };
    default:
      return state
  }
}
