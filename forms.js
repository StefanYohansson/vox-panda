import React from 'react';
import { LocalForm, Control } from 'react-redux-form';

function noFormFound(props) {
  return (
    <div>
      <h1>{'no form found'}</h1>
    </div>
  );
}

class OmniOscillatorForm() extends React.Component {
  attachFormDispatch = formDispatch => {
    this.formDispatch = formDispatch;
  }

  render () {
    return (
      <LocalForm
        model={'OmniOcillator'}
        initialState={{}}
        id={'omni-oscillator-form'}
        className={'sidebar-form'}
        attachDispatch={(formDispatch) => this.attachFormDispatch(formDispatch)}>
        <Control model={'.bla'} type={'text'} />

      </LocalForm>
    );
  }
}

export function getFormByType(type) {
  const forms = {
    OmniOscillator: OmniOscillatorForm(),
  };

  return forms[type] || noFormFound();
}
