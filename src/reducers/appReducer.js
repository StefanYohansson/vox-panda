const initialState = {
  pads: [
    {
      label: 'pad1',
      key: '1',
      envelope: {
        attack: "C5",
        release: "10n"
      },
      oscilator: {
        type: "triangle"
      }
    }, 
    {label: 'pad2', key: '2'},
    {label: 'pad3', key: '3'},
    {label: 'pad4', key: '4'},
    {label: 'pad5', key: '5'},
    {label: 'pad6', key: '6'}, 
    {label: 'pad7', key: '7'},
    {label: 'pad8', key: '8'},
    {label: 'pad9', key: '9'}
  ]
}

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'BORA': 
      return !state;
    default:
      return state
  }
}
