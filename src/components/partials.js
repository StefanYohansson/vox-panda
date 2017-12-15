import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { defaultKnobProps } from 'vox/utils/constants';

const partials = {
  envelope: EnvelopePartials(),
  oscillator: OscillatorPartials(),
  playSettings: PlaySettingsPartials()
};

function noFormFound(type) {
  return (
    <div>
      <h1>{`no form found for ${type}`}</h1>
    </div>
  );
}

function makeOptions(opts) {
  return opts.map((item, key )=> {
    return (
      <option key={key} value={item}>{item}</option>
    );
  });
}

function PlaySettingsPartials() {
  return (
    <div className="play-settings-partials">
      <label>{'note'}
        <Control.text model=".playSettings.note"/>
      </label>
      <label>{'duration'}
        <Control.text model=".playSettings.duration"/>
      </label>
    </div>
  );
}

function EnvelopePartials(props) {
  const curveTypes = [
    'linear', 'exponential', 'sine',
    'cosine', 'bounce', 'riple', 'step'
  ];

  const curveOptions = makeOptions(curveTypes);

  return (
    <div className="envelope-partials">
      <h1 className="subform-title">{'Envelope'}</h1>
      <label className="select-field">{'attackCurve'}
        <Control.select
          model=".envelope.attackCurve">
          {curveOptions}
        </Control.select>
      </label>
      <label className="select-field">{'releaseAttack'}
        <Control.select
          model=".envelope.releaseAttack" >
          {curveOptions}
        </Control.select>
      </label>
      <div className="knob-fields">
        <label>{'attack'}
          <Control
            model=".envelope.attack"
            {...defaultKnobProps} />
        </label>
        <label>{'decay'}
          <Control
            model=".envelope.decay"
            {...defaultKnobProps} />
        </label>
        <label>{'sustain'}
          <Control
            model=".envelope.sustain"
            {...defaultKnobProps} />
        </label>
        <label>{'release'}
          <Control
            model=".envelope.release"
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
    'amsquare', 'fatsquare', 'triangle',
    'fmtriangle', 'amtriangle', 'fattriangle',
    'sawtooth', 'fmsawtooth', 'amsawtooth',
    'fatsawtooth', 'pwm', 'pulse'
  ];
  const oscillatorOptions = makeOptions(oscillatorTypes)

  return (
    <div className="oscillator-partials">
      <h1 className="subform-title">{'Oscillator'}</h1>
      <label className="select-field">{'type'}
        <Control.select
          model=".oscillator.type" >
          {oscillatorOptions}
        </Control.select>
      </label>
      <div className="knob-fields">
        <label>{'frequency'}
          <Control
            model=".oscillator.frequency"
            {...defaultKnobProps} />
        </label>
        <label>{'phase'}
          <Control
            model=".oscillator.phase"
            {...defaultKnobProps} />
        </label>
        <label>{'detune'}
          <Control
            model=".oscillator.detune"
            {...defaultKnobProps} />
        </label>
      </div>
    </div>
  );
}

export function confPartials() {
  return (
    <div className="conf-partials">
      <Control.text className="editable-text pad-label" model=".conf.label" />
      <label>{'key'}
        <Control.text model=".conf.key" />
      </label>
    </div>
  );
}

export const mountPartials = pieces => pieces.map(item => partials[item] || null);
