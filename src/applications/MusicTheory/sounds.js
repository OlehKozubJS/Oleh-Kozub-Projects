const commonSounds = [
  { name: "До", degrees: 1, semitones: 1 },
  { name: "Ре", degrees: 2, semitones: 3 },
  { name: "Мі", degrees: 3, semitones: 5 },
  { name: "Фа", degrees: 4, semitones: 6 },
  { name: "Соль", degrees: 5, semitones: 8 },
  { name: "Ля", degrees: 6, semitones: 10 },
  { name: "Сі", degrees: 7, semitones: 12 },
];

const signs = [
  { name: "-дубль-бемоль", semitones: -2 },
  { name: "-бемоль", semitones: -1 },
  { name: "", semitones: 0 },
  { name: "-дієз", semitones: 1 },
  { name: "-дубль-дієз", semitones: 2 },
];

const octaves = [
  " субконтроктави",
  " контроктави",
  " великої октави",
  " малої октави",
  " пешої октави",
  " другої октави",
  " третьої октави",
  " четвертої октави",
];

const getFullSoundInformation = (
  soundDegrees,
  soundSemitones,
  initialOctaveIndex
) => {
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

export { getFullSoundInformation };
