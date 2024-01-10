import { commonSounds, signs, octaves } from "../MusicTheoryItems";

const getSign = (semitones) => {
  return signs.find((sign) => {
    sign.semitones === semitones;
  });
};

const getOctave = (index) => {
  return octaves[index];
};

const getSound = (degrees) => {
  return commonSounds.find((sound) => {
    sound.degrees === degrees;
  });
};

const separateOctaves = () => {};

const getSoundAndSign = ({ degrees, semitones }) => {};

export { getSoundAndSign };
