import React from 'react';
import { LocalForm, Control } from 'react-redux-form';

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

function EnvelopePartials() {
  const curveTypes = [
    'linear', 'exponential', 'sine',
    'cosine', 'bounce', 'riple', 'step'
  ];

  const curveOptions = makeOptions(curveTypes);

  return (
    <div>
      <h1 className="subform-title">{'Envelope'}</h1>
      <label>{'attack'}
        <Control type="range" model=".attack" />
      </label>
      <label>{'decay'}
        <Control type="range" model=".decay" />
      </label>
      <label>{'sustain'}
        <Control type="range" model=".sustain" />
      </label>
      <label>{'release'}
        <Control type="range" model=".release" />
      </label>
      <label>{'attackCurve'}
        <Control.select
          model=".attackCurve">
          {curveOptions}
        </Control.select>
      </label>
      <label>{'releaseAttack'}
        <Control.select
          model=".releaseAttack" >
          {curveOptions}
        </Control.select>
      </label>
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
      <label>{'frequency'}
        <Control type="range" model=".frequency" />
      </label>
      <label>{'type'}
        <Control.select
          model=".type" >
          {oscillatorOptions}
        </Control.select>
      </label>
      <label>{'phase'}
        <Control type="range" model=".phase" />
      </label>
      <label>{'detune'}
        <Control type="number" model=".detune" />
      </label>
    </div>
  );
}

const mountPartials = pieces => pieces.map(item => partials[item] || null);

const SynthForm = props => mountPartials(['oscillator', 'envelope']);

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

  render () {
    const { pad: { conf } } = this.props;
    return (
      <LocalForm
        model={'SynthForm'}
        initialState={{}}
        id={'synth-form'}
        className={'sidebar-form'}
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
