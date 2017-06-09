let synth = null;

export function getInstance(_synth) {
  if (!synth) {
    synth = _synth;
  }
  return synth;
}
