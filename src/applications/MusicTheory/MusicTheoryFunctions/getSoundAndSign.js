import { commonSounds, signs, octaves } from "../MusicTheoryItems";

const getSign = (semitones) => {
  return signs.find((sign) => {
    sign.semitones === semitones;
  });
};

const getOctave = (index) => {
  return octaves[index];
};

const getSound = (semitones) => {
  return commonSounds.find((sound) => {
    sound.semitones === semitones;
  });
};

const getSoundAndSign = ({ degrees, semitones }) => {};

export { getSoundAndSign };
