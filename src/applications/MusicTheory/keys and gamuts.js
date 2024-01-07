const modes = [
  { name: "мажор", scheme: [0, 2, 4, 5, 7, 9, 11, 12] },
  { name: "мінор", scheme: [0, 2, 3, 5, 7, 8, 10, 12] },
];

function getGamut(firstDegrees, firstSemitones, firstSignSemitones, modeName) {
  const gamutArray = [];
  const mode = modes[modeName];

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
