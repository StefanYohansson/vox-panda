import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { mountPartials, confPartials } from 'vox/components/partials';
import { setPadAttributes } from 'vox/actions/actions';

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
    const { pad: { conf }, dispatch } = this.props;
    dispatch(setPadAttributes(values))
  }

  render () {
    const { pad, pad: { conf } } = this.props;
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

export function getFormByType(pad, dispatch) {
  return <PadForm dispatch={dispatch} key={pad.conf.label} pad={pad} />;
}
