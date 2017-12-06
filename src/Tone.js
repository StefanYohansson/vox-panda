import Tone from 'tone';
var AppTone = {};

export function getTone(_Tone) {
  if (!Object.keys(AppTone).length) {
    AppTone = {
      Synth: new Tone.Synth().toMaster(),
      OmniOscillator: new Tone.OmniOscillator().toMaster(),
      MembraneSynth: new Tone.MembraneSynth().toMaster(),
    };
  }

  return AppTone;
}
