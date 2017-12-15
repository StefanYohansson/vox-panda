import { getTone } from 'vox/Tone';
import _ from 'lodash';

export function play(pad) {
    const Synth = getTone().Synth;
    const { playSettings } = pad;
    const synthHasKey = synthKey => Synth[synthKey];

    Object.keys(pad).filter(synthHasKey).forEach(
      (componentKey) => {
        Object.keys(pad[componentKey]).forEach(attr => {
          Synth[componentKey].set(attr, pad[componentKey][attr]);
        })
      }
    );

    Synth.triggerAttackRelease(playSettings.note, playSettings.duration);
}
