import { modes } from "../MusicTheoryItems";

function getGamut(firstDegrees, firstSemitones, firstSignSemitones, modeName) {
  const { scheme } = modes.find((mode) => {
    mode.name === modeName;
  });

  for (let soundNumber = 0; soundNumber <= 7; soundNumber += 1) {
    const currentSoundDegrees = (firstDegrees + soundNumber) % 7;
    const currentSoundSemitones =
      ((firstSemitones + mode[soundNumber]) % 12) + firstSignSemitones;
    gamutArray.push(
      getSoundAndSign(currentSoundDegrees, currentSoundSemitones)
    );
  }

  return gamutArray;
}

export { getGamut };
