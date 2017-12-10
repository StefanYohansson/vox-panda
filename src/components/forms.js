import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { defaultKnobProps } from '../constants';

const partials = {
  envelope: EnvelopePartials(),
  oscillator: OscillatorPartials()
}

function noFormFound(type) {
  return (
    <div>
      <h1>{`no form found for ${type}`}</h1>
    </div>
  );
}

function makeOptions(opts) {
  return opts.map(item => {
    return (
      <option value={item}>{item}</option>
    );
  });
}

function EnvelopePartials(props) {
  const curveTypes = [
    'linear', 'exponential', 'sine',
    'cosine', 'bounce', 'riple', 'step'
  ];

  const curveOptions = makeOptions(curveTypes);

  return (
    <div>
      <h1 className="subform-title">{'Envelope'}</h1>
      <label className="select-field">{'attackCurve'}
        <Control.select
          model=".attackCurve">
          {curveOptions}
        </Control.select>
      </label>
      <label className="selectField">{'releaseAttack'}
        <Control.select
          model=".releaseAttack" >
          {curveOptions}
        </Control.select>
      </label>
      <div className="knob-fields">
        <label>{'attack'}
          <Control
            model=".attack"
            {...defaultKnobProps} />
        </label>
        <label>{'decay'}
          <Control
            model=".decay"
            {...defaultKnobProps} />
        </label>
        <label>{'sustain'}
          <Control
            model=".sustain"
            {...defaultKnobProps} />
        </label>
        <label>{'release'}
          <Control
            model=".release"
            {...defaultKnobProps} />
        </label>
      </div>
    </div>
  );
}

function OscillatorPartials() {
  const oscillatorTypes = [
    'sine', 'fmsine', 'amsine',
    'fatsine', 'square', 'fmsquare',
    'amsquare', 'fatsquare', 'tringle',
    'fmtringle', 'amtringle', 'fattringle',
    'sawtooth', 'fmsawtooth', 'amsawtooth',
    'fatsawtooth', 'pwm', 'pulse'
  ];
  const oscillatorOptions = makeOptions(oscillatorTypes)

  return (
    <div>
      <h1 className="subform-title">{'Oscillator'}</h1>
      <label className="select-field">{'type'}
        <Control.select
          model=".type" >
          {oscillatorOptions}
        </Control.select>
      </label>
      <div className="knob-fields">
        <label>{'frequency'}
          <Control
            model=".frequency"
            {...defaultKnobProps} />
        </label>
        <label>{'phase'}
          <Control
            model=".phase"
            {...defaultKnobProps} />
        </label>
        <label>{'detune'}
          <Control
            model=".detune"
            {...defaultKnobProps} />
        </label>
      </div>
    </div>
  );
}

const mountPartials = pieces => pieces.map(item => partials[item] || null);

const SynthForm = props => mountPartials(['oscillator', 'envelope'], props);

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
        initialState={{}}
        id={'synth-form'}
        className={'sidebar-form'}
        onChange={this.onChange}
        getDispatch={
          formDispatch => {
            this.attachFormDispatch(formDispatch)
          }
        }>
        { this.getFields(conf.padType) }
      </LocalForm>
    );
  }
}

export function getFormByType(pad) {
  return <PadForm pad={pad} />;
}
