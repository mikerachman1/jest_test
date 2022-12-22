
function alphabet() {
  return 'abcdefghijklmnopqrstuvwxyz'.split('');
}

function capsAlphabet() {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
}

function skipChars() {
  return '`~!@#$%^&*()_-=+[]{}\|:;"<,>./? '.split('');
}

function shiftLetter(letter, array, shift) {
  let shiftValue = (array.indexOf(letter) + shift)
  if (shiftValue > 25) {shiftValue -= 26}
  if (shiftValue < 0) {shiftValue += 26}
  return array[shiftValue]
}

function caesar(string, shift) {
  const alphabetArray = alphabet();
  const capsArray = capsAlphabet();
  const charactersToSkip = skipChars();
  const splitString = string.split('');
  let returnArray = [];

  for (const char of splitString) {
    if (charactersToSkip.includes(char)) {
      returnArray.push(char)
    } else if (capsArray.includes(char)) {
      returnArray.push(shiftLetter(char, capsArray, shift))
    } else {
      returnArray.push(shiftLetter(char, alphabetArray, shift))
    }
  }
  return returnArray.join('')
}

export default caesar;
