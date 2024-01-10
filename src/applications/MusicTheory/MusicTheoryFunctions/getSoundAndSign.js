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

const separateOctaves = ({ degrees, semitones }) => {
  const clearDegrees = degrees % 7;
  const octaves = (degrees - clearDegrees) / 7;
  const clearSemitones = semitones - 12 * octaves;
  return { degrees: clearDegrees, semitones: clearSemitones, octaves };
};

const getSoundAndSign = (data) => {
  const { degrees, semitones, octaves } = separateOctaves(data);
  const sound = getSound(degrees);
  const sign = getSign(semitones - soundSemitones);
  const octave = getOctave(octaves);
  return { name: sound.name, sign: sign.name, octave };
};

export { getSoundAndSign };
