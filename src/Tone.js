import Tone from 'tone';
let AppTone = {};

export function getTone(_Tone) {
  if (!AppTone.length) {
    AppTone = {
      Synth: new Tone.Synth().toMaster(),
      OmniOscillator: new Tone.OmniOscillator().toMaster(),
      MembraneSynth: new Tone.MembraneSynth().toMaster()
    };
  }

  return AppTone;
}
