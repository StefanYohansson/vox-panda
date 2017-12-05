import React from 'react';
import { LocalForm, Control } from 'react-redux-form';

function noFormFound(props) {
  return (
    <div>
      <h1>{'no form found'}</h1>
    </div>
  );
}

class SynthForm extends React.Component {
  attachFormDispatch = formDispatch => {
    this.formDispatch = formDispatch;
  }

  render () {
    return (
      <LocalForm
        model={'SynthForm'}
        initialState={{}}
        id={'synth-form'}
        className={'sidebar-form'}
        attachDispatch={(formDispatch) => this.attachFormDispatch(formDispatch)}>
        <Control model={'.bla'} type={'text'} />
      </LocalForm>
    );
  }
}

export function getFormByType(type, props) {
  console.log(type)
  const forms = {
    Synth: <SynthForm {...props} />,
  };

  console.log(forms[type])

  return forms[type] || noFormFound();
}
