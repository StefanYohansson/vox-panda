import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { mountPartials, confPartials } from './partials';

const SynthForm = props => mountPartials(['playSettings', 'oscillator', 'envelope'], props);

class PadForm extends React.Component {
  attachFormDispatch = formDispatch => {
    this.formDispatch = formDispatch;
  }

  getFields = type => {
    const forms = {
      Synth: SynthForm(this.props)
    }

    return forms[type] || noFormFound(type);
  }

  onChange = values => {
    console.log(values)
  }

  render () {
    const { pad: { conf } } = this.props;
    return (
      <LocalForm
        model={'SynthForm'}
        initialState={this.props.pad}
        id={'synth-form'}
        className={'sidebar-form'}
        onChange={this.onChange}
        getDispatch={dispatch => this.attachFormDispatch(dispatch)}>
        { confPartials() }
        { this.getFields(conf.padType) }
      </LocalForm>
    );
  }
}

export function getFormByType(pad) {
  return <PadForm key={pad.conf.label} pad={pad} />;
}
