import { commonSounds, signs, octaves } from "../MusicTheoryItems";

const getSoundData = (soundDegrees, soundSemitones, initialOctaveIndex) => {
  const clearSoundDegrees = soundDegrees % 7;
  const clearSoundSemitones = soundSemitones % 12;

  const soundOctaveDifference = Math.floor(soundDegrees / 7);
  const soundOctaveIndex = initialOctaveIndex + soundOctaveDifference;

  const { name: soundName, semitones: commonSoundSemitones } =
    commonSounds.find((sound) => sound.degrees === clearSoundDegrees);

  const { name: signName } = signs.find(
    (sign) => sign.semitones === clearSoundSemitones - commonSoundSemitones
  );

  return { name: soundName, sign: signName, octave: octaves[soundOctaveIndex] };
};

export { getSoundData };
